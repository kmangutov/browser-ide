import { c as createAstro, a as createComponent, b as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server-BpiS1_cD.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kmangutov.github.io");
const $$PyodideEmbed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PyodideEmbed;
  const { code } = Astro2.props;
  const baseUrl = "/browser-ide";
  const basePath = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return renderTemplate(_a || (_a = __template(["", '<div class="pyodide-embed" data-astro-cid-udmswuc5> <div class="code-editor" id="codeEditor" data-astro-cid-udmswuc5></div> <div class="controls" data-astro-cid-udmswuc5> <button id="runButton" data-astro-cid-udmswuc5>Run Code</button> </div> <div class="output-container" data-astro-cid-udmswuc5> <div id="output" class="output" data-astro-cid-udmswuc5></div> </div> </div> <!-- CodeMirror CSS --> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/theme/monokai.min.css">  <script', ' type="module"></script> '])), maybeRenderHead(), addAttribute(`${basePath}js/pyodide-loader.js`, "src"));
}, "/Users/kmangutov/idetest/apps/site/src/components/PyodideEmbed.astro", void 0);

export { $$PyodideEmbed as $ };
