// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vonage-events.com', // Adds your domain for social tags
  vite: {
    plugins: [tailwindcss()]
  }
});