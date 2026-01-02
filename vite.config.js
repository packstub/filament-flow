import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
    plugins: [svelte()],
    build: {
        lib: {
            entry: resolve(__dirname, 'resources/js/index.js'),
            name: 'LaravelFlow',
            fileName: 'laravel-flow',
            formats: ['es', 'umd'],
        },
        outDir: 'dist',
        rollupOptions: {
            // Externalize dependencies that should not be bundled
            external: [],
            output: {
                globals: {
                    // Define globals for UMD format if needed
                },
            },
        },
    },
});
