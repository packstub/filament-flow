import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// Builds the canvas into resources/dist as a single classic script + one
// stylesheet, registered with FilamentAsset by the service provider.
export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    plugins: [tailwindcss(), svelte()],
    build: {
        lib: {
            entry: resolve(__dirname, 'resources/js/index.js'),
            name: 'PackstubFlow',
            fileName: () => 'flow.js',
            formats: ['iife'],
        },
        outDir: 'resources/dist',
        emptyOutDir: true,
        cssCodeSplit: false,
        minify: true,
        rollupOptions: {
            output: {
                assetFileNames: (asset) => (asset.name?.endsWith('.css') ? 'flow.css' : '[name][extname]'),
            },
        },
    },
});
