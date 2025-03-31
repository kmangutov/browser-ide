import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

// GitHub Pages configuration with repository name
const REPO_NAME = 'browser-ide'; // ← replace with your actual repo name

// https://astro.build/config
export default defineConfig({
  site: 'https://your-github-username.github.io',
  base: `/${REPO_NAME}`,
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
