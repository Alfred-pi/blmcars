import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    configFile: './tailwind.config.mjs'
  })],
  output: 'static',
  site: 'https://alfred-pi.github.io',
  base: '/blmcars/',
});
