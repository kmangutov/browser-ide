import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server-BpiS1_cD.js';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets-DNMPS4SJ.js';
import 'html-escaper';
import 'clsx';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./BlogPostLayout-BBmbFPSf.js')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../../layouts/BlogPostLayout.astro",
  "title": "Specificity vs Sensitivity: Medical Perspectives",
  "description": "How different domains reframe the evaluation of models",
  "pubDate": "April 4 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "specificity-vs-sensitivity-a-medical-lens",
    "text": "Specificity vs Sensitivity: A Medical Lens"
  }, {
    "depth": 2,
    "slug": "in-domains-like-medicine-these-values-become-life-and-death",
    "text": "In domains like medicine, these values become life and death"
  }, {
    "depth": 2,
    "slug": "mirrors-precisionrecall-but-emphasizes-the-perspective-of-absence",
    "text": "Mirrors precision/recall but emphasizes the perspective of absence"
  }, {
    "depth": 2,
    "slug": "the-roc-curve-visualizing-the-trade-off",
    "text": "The ROC curve: visualizing the trade-off"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "specificity-vs-sensitivity-a-medical-lens",
      children: "Specificity vs Sensitivity: A Medical Lens"
    }), "\n", createVNode(_components.h2, {
      id: "in-domains-like-medicine-these-values-become-life-and-death",
      children: "In domains like medicine, these values become life and death"
    }), "\n", createVNode(_components.p, {
      children: "When a doctor orders a test, two questions loom: \u201CIf someone has the disease, will the test detect it?\u201D (sensitivity) and \u201CIf someone doesn\u2019t have the disease, will the test correctly rule it out?\u201D (specificity). These questions directly map to recall and precision but are framed from the perspective of the medical field where the stakes can be extraordinarily high."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "mirrors-precisionrecall-but-emphasizes-the-perspective-of-absence",
      children: "Mirrors precision/recall but emphasizes the perspective of absence"
    }), "\n", createVNode(_components.p, {
      children: "While recall (sensitivity) focuses on correctly identifying positive cases, specificity highlights the importance of correctly identifying negative cases. This shift in perspective is crucial in contexts where ruling out a condition is as important as identifying it. Sensitivity answers \u201CHow good is this test at finding the disease?\u201D while specificity answers \u201CHow good is this test at ruling out the disease in healthy individuals?\u201D"
    }), "\n", "\n", createVNode(_components.h2, {
      id: "the-roc-curve-visualizing-the-trade-off",
      children: "The ROC curve: visualizing the trade-off"
    }), "\n", createVNode(_components.p, {
      children: "The Receiver Operating Characteristic (ROC) curve plots sensitivity against (1-specificity), providing a visual representation of the trade-off as we adjust the decision threshold. The area under this curve (AUC) gives us a single metric that captures how well our model can distinguish between classes, regardless of the threshold chosen."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["The language of specificity and sensitivity raises an important question: how does the nature of what we\u2019re predicting\u2014categories or continuous values\u2014affect how we evaluate and train our models? This brings us to our next topic: ", createVNode(_components.strong, {
        children: "Categorical vs Continuous Loss"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/browser-ide/blog/ml-story/05-specificity-sensitivity";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/05-specificity-sensitivity.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/05-specificity-sensitivity.mdx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
