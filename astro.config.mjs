// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fota666.github.io',
  base: '/vagoeszter-gyogytornasz',
  vite: {
    plugins: [tailwindcss()]
  }
});