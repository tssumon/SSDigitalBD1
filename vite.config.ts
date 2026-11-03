
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },

    server: {
      port: 3000,
      host: '0.0.0.0',

      // HMR is disabled in AI Studio when DISABLE_HMR=true.
      hmr: process.env.DISABLE_HMR !== 'true',

      // Disable file watching when required.
      watch:
        process.env.DISABLE_HMR === 'true'
          ? null
          : {},
    },
  };
});
