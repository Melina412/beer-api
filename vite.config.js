import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/Day56/', // git repo name

  base: process.env.NODE_ENV === 'production' ? '/Day56/' : '/',
});
