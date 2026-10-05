import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hyprfm.soyebjim.me',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
