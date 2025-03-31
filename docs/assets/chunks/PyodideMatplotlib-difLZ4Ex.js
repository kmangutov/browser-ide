import { c as createAstro, a as createComponent, b as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server-BpiS1_cD.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                              */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kmangutov.github.io");
const $$PyodideMatplotlib = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PyodideMatplotlib;
  const { code } = Astro2.props;
  const uniqueId = `pyodide_${Math.random().toString(36).substr(2, 9)}`;
  const baseUrl = "/browser-ide";
  const basePath = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return renderTemplate(_a || (_a = __template(["", '<div class="pyodide-embed"', "", ' data-astro-cid-afk6wh7r> <div class="code-editor"', ' data-astro-cid-afk6wh7r></div> <div class="controls" data-astro-cid-afk6wh7r> <button class="run-button" data-astro-cid-afk6wh7r>Run Animation</button> <button class="pause-button" disabled data-astro-cid-afk6wh7r>Pause</button> <button class="reset-button" disabled data-astro-cid-afk6wh7r>Reset</button> </div> <div class="visualization-container" data-astro-cid-afk6wh7r> <img class="output-canvas"', ' width="800" height="500" data-astro-cid-afk6wh7r> </div> <div class="output-container" data-astro-cid-afk6wh7r> <div class="output-text" data-astro-cid-afk6wh7r></div> </div> </div> <!-- CodeMirror CSS --> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/theme/monokai.min.css">  <script', ' type="module"></script> '])), maybeRenderHead(), addAttribute(uniqueId, "data-component-id"), addAttribute(code, "data-code"), addAttribute(`codeEditor_${uniqueId}`, "id"), addAttribute(`outputCanvas_${uniqueId}`, "id"), addAttribute(`${basePath}js/pyodide-loader.js`, "src"));
}, "/Users/kmangutov/idetest/apps/site/src/components/PyodideMatplotlib.astro", void 0);

export { $$PyodideMatplotlib as $ };
