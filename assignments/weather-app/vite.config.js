import 'dotenv/config';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  base: './',
  plugins: [
    EnvironmentPlugin('all'), // Loads all variables from .env files
  ],
  define: {
    // Dynamically inject all process.env variables that start with VITE_ into your application
    ...Object.keys(process.env).reduce((prev, next) => {
      if (next.startsWith('VITE_')) {
        prev[`process.env.${next}`] = JSON.stringify(process.env[next]);
      }
      return prev;
    }, {}),
  },
});
