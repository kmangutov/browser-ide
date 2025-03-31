import { a as createComponent, c as createAstro, d as addAttribute, i as renderHead, h as renderSlot, b as renderTemplate } from './astro/server-BpiS1_cD.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                              */

const $$Astro = createAstro("https://kmangutov.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  const baseUrl = "/browser-ide";
  const basePath = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const repoName = baseUrl.replace(/\//g, "");
  function fixUrl(url) {
    if (url.includes(repoName) && repoName !== "") {
      return url;
    }
    if (url.startsWith("/")) {
      return `${basePath}${url.substring(1)}`;
    }
    return `${basePath}${url}`;
  }
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description || "Machine Learning Blog and Playground", "content")}><title>${title || "ML Playground"}</title>${renderHead()}</head> <body data-astro-cid-37fxchfa> <!-- Navigation Bar --> <nav class="main-nav" data-astro-cid-37fxchfa> <ul data-astro-cid-37fxchfa> <li data-astro-cid-37fxchfa><a${addAttribute(baseUrl, "href")}${addAttribute(Astro2.url.pathname === baseUrl || Astro2.url.pathname === "/" ? "active" : "", "class")} data-astro-cid-37fxchfa>Playground</a></li> <li data-astro-cid-37fxchfa><a${addAttribute(fixUrl("blog/"), "href")}${addAttribute(Astro2.url.pathname.startsWith(`${baseUrl}blog`) || Astro2.url.pathname.startsWith("/blog") ? "active" : "", "class")} data-astro-cid-37fxchfa>Blog</a></li> </ul> </nav> <main class="content" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/kmangutov/idetest/apps/site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
