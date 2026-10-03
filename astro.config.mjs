import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://juanaylola.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(gracias|en\/thank-you)\/?$/.test(page),
    }),
  ],
});
