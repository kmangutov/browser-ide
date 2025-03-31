import { a as createComponent, c as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, h as renderSlot } from './astro/server-BpiS1_cD.js';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from './BaseLayout-Cr2tSbVm.js';
/* empty css                                              */

const $$Astro = createAstro("https://kmangutov.github.io");
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description, "data-astro-cid-2q5oecfc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-2q5oecfc> <header data-astro-cid-2q5oecfc> <h1 data-astro-cid-2q5oecfc>${frontmatter.title}</h1> ${frontmatter.date && renderTemplate`<time data-astro-cid-2q5oecfc>${new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</time>`} </header> <div class="prose" data-astro-cid-2q5oecfc> ${renderSlot($$result2, $$slots["default"])} </div> </article>  ` })}`;
}, "/Users/kmangutov/idetest/apps/site/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as default };
