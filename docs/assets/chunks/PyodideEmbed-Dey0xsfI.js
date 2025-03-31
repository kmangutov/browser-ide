import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server-BpiS1_cD.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                          */

const $$Astro = createAstro("https://kmangutov.github.io");
const $$PyodideEmbed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PyodideEmbed;
  const { code } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pyodide-embed" data-astro-cid-udmswuc5> <div class="code-editor" data-astro-cid-udmswuc5> <pre class="code-display" data-astro-cid-udmswuc5>${code}</pre> </div> <div class="controls" data-astro-cid-udmswuc5> <button id="runButton" data-astro-cid-udmswuc5>Run Code</button> </div> <div class="output-container" data-astro-cid-udmswuc5> <div id="output" class="output" data-astro-cid-udmswuc5></div> </div> </div>  `;
}, "/Users/kmangutov/idetest/apps/site/src/components/PyodideEmbed.astro", void 0);

export { $$PyodideEmbed as $ };
