import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jesus_an_coffee-web/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
