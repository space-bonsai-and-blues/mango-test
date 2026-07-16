// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real domain once it's purchased and connected
  // to Cloudflare Pages (see README "Go live" section).
  site: 'https://nara.example.com',
  integrations: [sitemap()],
});
