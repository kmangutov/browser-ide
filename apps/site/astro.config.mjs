import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-github-username.github.io',
  base: '/',
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
