import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build', // Set the output directory to 'build'
  },
  base: '/mini-portfolio/', // Adjust the base path for GitHub Pages
});
