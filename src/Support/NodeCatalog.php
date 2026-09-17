<?php

namespace Packstub\Flow\Support;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Illuminate\Contracts\Support\Htmlable;
use Packstub\Flow\Engine\Runner;
use Packstub\Flow\Enums\NodeType;
use Packstub\Flow\Filament\Livewire\ManageNode;
use Packstub\Flow\NodeRegistry;
use Packstub\Flow\Nodes\Node;
use Throwable;

/**
 * The registered nodes described as data — type, name, outputs, and every
 * setting of the form with its kind, options and whether it is required —
 * read off the same form schemas the settings slide-over renders. The
 * "Describe a workflow" builder hands it to the model so a generated
 * workflow only uses nodes and settings that exist, and coerces the
 * model's answers (all text) back into what each setting stores.
 */
class NodeCatalog
{
    /** Kinds of settings, as the model sees them. */
    public const TEXT = 'text';

    public const NUMBER = 'number';

    public const BOOLEAN = 'boolean';

    public const SELECT = 'select';

    public const MULTISELECT = 'multiselect';

    public const LIST = 'list';

    public const MAP = 'map';

    public const ITEMS = 'items';

    public const TIME = 'time';

    /** The most options of a select that are described; the rest is left to the person. */
    public const MAX_OPTIONS = 40;

    /**
     * Every registered node, keyed by identifier.
     *
     * @return array<string, array{identifier: string, type: string, name: string, description: string, outputs: array<string, string>, settings: array<int, array<string, mixed>>, placeholders: array<string, string>}>
     */
    public static function all(): array
    {
        $registry = app(NodeRegistry::class);
        $catalog = [];

        foreach ([...$registry->triggers(), ...$registry->actions(), ...$registry->conditions()] as $class) {
            $node = $class::make();
            $catalog[$class] = static::describe($node);
        }

        return $catalog;
    }

    /**
     * @return array{identifier: string, type: string, name: string, description: string, outputs: array<string, string>, settings: array<int, array<string, mixed>>, placeholders: array<string, string>}
     */
    public static function describe(Node $node): array
    {
        $outputs = [];

        foreach ($node->getOutputs() as $id => $label) {
            $outputs[(string) $id] = (string) $label;
        }

        $settings = static::settings($node->getFormSchema());

        if ($node->getType() === NodeType::Action) {
            $outputs['error'] = __('packstub-flow::flow.builder.error');
            $settings[] = ['key' => Runner::ON_ERROR, 'label' => __('packstub-flow::flow.node_settings.on_error'), 'kind' => self::SELECT, 'required' => false, 'options' => ['fail' => __('packstub-flow::flow.node_settings.on_error_fail'), 'continue' => __('packstub-flow::flow.node_settings.on_error_continue'), 'branch' => __('packstub-flow::flow.node_settings.on_error_branch')], 'help' => __('packstub-flow::flow.describe.on_error_help')];
            $settings[] = ['key' => Runner::RETRIES, 'label' => __('packstub-flow::flow.node_settings.retries'), 'kind' => self::NUMBER, 'required' => false];
        }

        // Only what this node adds: the placeholders every node accepts are explained once, in the instructions.
        $placeholders = array_diff_key($node->getPlaceholders(), Placeholders::documentation(), Placeholders::actionDocumentation());

        return [
            'identifier' => $node::class,
            'type' => $node->getType()->value,
            'name' => $node->getName(),
            'description' => $node->getDescription(),
            'outputs' => $outputs,
            'settings' => $settings,
            'placeholders' => array_map(fn (mixed $text): string => (string) $text, $placeholders),
        ];
    }

    /**
     * The fields of a form schema as settings. Layout components are not
     * walked: every node keeps its fields at the top level, like the
     * validator expects.
     *
     * @param  array<int, mixed>  $components
     * @return array<int, array<string, mixed>>
     */
    public static function settings(array $components): array
    {
        $settings = [];

        foreach (static::contained($components) as $component) {
            if (! $component instanceof Field) {
                continue;
            }

            try {
                $settings[] = static::setting($component);
            } catch (Throwable) {
                // A field that cannot be described outside a form is left to the person.
                $settings[] = ['key' => $component->getName(), 'label' => $component->getName(), 'kind' => self::TEXT, 'required' => false];
            }
        }

        return $settings;
    }

    /**
     * The components inside a schema owned by the settings slide-over, as
     * they are rendered there: helper texts and repeater items can only be
     * read from a component that has a container.
     *
     * @param  array<int, mixed>  $components
     * @return array<int, mixed>
     */
    protected static function contained(array $components): array
    {
        return static::quietly(fn (): array => Schema::make(app(ManageNode::class))->components($components)->getComponents(withActions: false, withHidden: true), $components) ?? $components;
    }

    /**
     * @return array<string, mixed>
     */
    protected static function setting(Field $field): array
    {
        $setting = [
            'key' => $field->getName(),
            'label' => static::text($field->getLabel()) ?? $field->getName(),
            'kind' => static::kind($field),
            'required' => static::required($field),
        ];

        if ($field instanceof Select) {
            $setting['options'] = static::options($field);
        }

        if ($field instanceof Repeater) {
            // Every item field, the ones shown only for some choices too (withHidden).
            $setting['fields'] = static::settings(static::quietly(fn (): array => $field->getChildSchema()?->getComponents(withActions: false, withHidden: true) ?? [], []));
        }

        if ($field instanceof TextInput && $field->isNumeric()) {
            $min = static::quietly(fn (): mixed => $field->getMinValue());
            $max = static::quietly(fn (): mixed => $field->getMaxValue());

            if (is_numeric($min)) {
                $setting['min'] = $min + 0;
            }

            if (is_numeric($max)) {
                $setting['max'] = $max + 0;
            }
        }

        $default = static::quietly(fn (): mixed => $field->getDefaultState());

        if (is_scalar($default) && $default !== '') {
            $setting['default'] = $default;
        }

        $placeholder = $field instanceof TextInput || $field instanceof Textarea || $field instanceof Select
            ? static::quietly(fn (): ?string => $field->getPlaceholder())
            : null;

        if (filled($placeholder)) {
            $setting['example'] = $placeholder;
        }

        $help = static::helperText($field);

        if (filled($help)) {
            $setting['help'] = $help;
        }

        return $setting;
    }

    protected static function kind(Field $field): string
    {
        return match (true) {
            $field instanceof Toggle, $field instanceof Checkbox => self::BOOLEAN,
            $field instanceof Select => $field->isMultiple() ? self::MULTISELECT : self::SELECT,
            $field instanceof Repeater => self::ITEMS,
            $field instanceof KeyValue => self::MAP,
            $field instanceof TagsInput => self::LIST,
            $field instanceof TimePicker, $field instanceof DateTimePicker, $field instanceof DatePicker => self::TIME,
            $field instanceof TextInput && $field->isNumeric() => self::NUMBER,
            $field instanceof Textarea => self::TEXT,
            default => self::TEXT,
        };
    }

    /**
     * Conditionally required fields need a form context; any failure to
     * evaluate counts as "not required", as in the validator.
     */
    protected static function required(Field $field): bool
    {
        return (bool) static::quietly(fn (): bool => $field->isRequired(), false);
    }

    /**
     * @return array<string, string> value => label, the first MAX_OPTIONS
     */
    protected static function options(Select $select): array
    {
        $options = static::quietly(fn (): array => $select->getOptions(), []);
        $flat = [];

        foreach ($options as $value => $label) {
            // Grouped options: [group => [value => label]].
            if (is_array($label)) {
                foreach ($label as $groupedValue => $groupedLabel) {
                    $flat[(string) $groupedValue] = static::text($groupedLabel) ?? (string) $groupedValue;
                }

                continue;
            }

            $flat[(string) $value] = static::text($label) ?? (string) $value;
        }

        return array_slice($flat, 0, self::MAX_OPTIONS, preserve_keys: true);
    }

    protected static function helperText(Field $field): ?string
    {
        $components = static::quietly(fn (): array => $field->getChildComponents(Field::BELOW_CONTENT_SCHEMA_KEY), []);

        foreach ($components as $component) {
            if ($component instanceof Text) {
                return static::text(static::quietly(fn (): mixed => $component->getContent()));
            }
        }

        return null;
    }

    /**
     * Turn the model's answer for a setting — always text — into what the
     * setting stores: booleans, numbers, option keys (a label is accepted
     * too), lists, maps and repeater items from JSON text.
     *
     * @param  array<string, mixed>  $setting  a settings entry of describe()
     */
    public static function coerce(array $setting, mixed $value): mixed
    {
        $text = is_string($value) ? trim($value) : $value;

        if ($text === '' || $text === null) {
            return null;
        }

        return match ($setting['kind'] ?? self::TEXT) {
            self::BOOLEAN => is_bool($text) ? $text : in_array(strtolower((string) $text), ['1', 'true', 'yes', 'on'], true),
            self::NUMBER => is_numeric($text) ? $text + 0 : null,
            self::SELECT => static::option($setting, is_scalar($text) ? (string) $text : null),
            self::MULTISELECT => array_values(array_filter(array_map(fn (mixed $v): ?string => static::option($setting, is_scalar($v) ? (string) $v : null), static::list($text)))),
            self::LIST => static::list($text),
            self::MAP => static::map($text),
            self::ITEMS => static::items($setting, $text),
            default => is_scalar($text) ? (string) $text : json_encode($text),
        };
    }

    /**
     * An option by its key, or by its label when the model answered with
     * that; a select the catalog could not list keeps the value as given.
     *
     * @param  array<string, mixed>  $setting
     */
    protected static function option(array $setting, ?string $value): ?string
    {
        if ($value === null) {
            return null;
        }

        $options = (array) ($setting['options'] ?? []);

        if ($options === [] || array_key_exists($value, $options)) {
            return $value;
        }

        foreach ($options as $key => $label) {
            if (strcasecmp((string) $label, $value) === 0 || strcasecmp((string) $key, $value) === 0 || strcasecmp(class_basename((string) $key), $value) === 0) {
                return (string) $key;
            }
        }

        return null;
    }

    /** @return array<int, mixed> */
    protected static function list(mixed $value): array
    {
        if (is_array($value)) {
            return array_values($value);
        }

        $decoded = json_decode((string) $value, true);

        if (is_array($decoded)) {
            return array_values($decoded);
        }

        return array_values(array_filter(array_map('trim', explode(',', (string) $value)), fn (string $v): bool => $v !== ''));
    }

    /** @return array<string, mixed> */
    protected static function map(mixed $value): array
    {
        if (is_array($value)) {
            return $value;
        }

        $decoded = json_decode((string) $value, true);

        if (is_array($decoded)) {
            return $decoded;
        }

        $map = [];

        foreach (preg_split('/\r?\n/', (string) $value) ?: [] as $line) {
            if (str_contains($line, ':')) {
                [$key, $item] = explode(':', $line, 2);
                $map[trim($key)] = trim($item);
            }
        }

        return $map;
    }

    /**
     * Repeater items: a JSON list of objects, each coerced by the item fields.
     *
     * @param  array<string, mixed>  $setting
     * @return array<int, array<string, mixed>>
     */
    protected static function items(array $setting, mixed $value): array
    {
        $items = [];
        $fields = (array) ($setting['fields'] ?? []);

        foreach (static::list($value) as $item) {
            if (! is_array($item)) {
                continue;
            }

            $coerced = [];

            foreach ($fields as $field) {
                $coerced[$field['key']] = static::coerce($field, $item[$field['key']] ?? null);
            }

            $items[] = $coerced;
        }

        return $items;
    }

    protected static function text(mixed $value): ?string
    {
        if ($value instanceof Htmlable) {
            $value = strip_tags($value->toHtml());
        }

        return is_scalar($value) ? trim((string) $value) : null;
    }

    /**
     * @template T
     *
     * @param  \Closure(): T  $callback
     * @param  T|null  $default
     * @return T|null
     */
    protected static function quietly(\Closure $callback, mixed $default = null): mixed
    {
        try {
            return $callback();
        } catch (Throwable) {
            return $default;
        }
    }
}
