import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://senorita-xi.github.io',
  // base: '/xi_blog',  // Uncomment if deploying to a project page (not user page)

  i18n: {
    defaultLocale: 'bg',
    locales: ['bg', 'en'],
    routing: {
      prefixDefaultLocale: false,  // Bulgarian at /, English at /en/
    },
  },
});
