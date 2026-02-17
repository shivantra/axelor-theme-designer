import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      modernPolyfills: true,
      renderLegacyChunks: false,
    }),
  ],
  optimizeDeps: {
    entries: ['src/**/*.{ts,js,tsx,jsx,css,scss,html}'],
  },
  resolve: {
    alias: [
      {
        find: /^~(.*)/,
        replacement: '$1',
      },
      {
        find: /^@\/(.*)/,
        replacement: path.join(__dirname, 'src', '$1'),
      },
    ],
  },
  build: {
    target: ['es2022'],
  },
});
