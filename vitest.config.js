import { defineConfig } from 'vitest/config';

// Unit tests for the canvas helpers (resources/js), run with `bun run test`.
export default defineConfig({
    test: {
        include: ['tests/js/**/*.test.ts'],
        environment: 'node',
    },
});
