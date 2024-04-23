import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/Day56/', // git repo name
  //! das geht so nicht wegen den routen, die base wird vom router als route interpretiert :(
});
