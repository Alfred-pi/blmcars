import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind({ configFile: './tailwind.config.mjs' }),
    sitemap(),
  ],
  output: 'static',
  site: 'https://blmcars.ch',
  base: '/',
});
