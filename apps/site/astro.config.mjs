import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

// Detect if we're in production (GitHub Pages) or development
const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-github-username.github.io',
  base: isProduction ? '/browser-ide/' : '/',
  outDir: '../../docs',
  integrations: [
    mdx()
  ],
  markdown: {
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: 'github-dark',
        keepBackground: true
      }]
    ]
  }
});
