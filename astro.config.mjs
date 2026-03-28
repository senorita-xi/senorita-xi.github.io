import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://senorita-xi.github.io',
  // base: '/xi_blog',  // Uncomment if deploying to a project page (not user page)
  // integrations: [sitemap()],  // Uncomment once site URL is confirmed
});
