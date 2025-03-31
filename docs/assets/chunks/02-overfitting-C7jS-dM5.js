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
  "title": "Overfitting: When Models Learn Too Well",
  "description": "Understanding the dangers of perfect memorization",
  "pubDate": "April 1 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "overfitting-the-trap-of-perfection",
    "text": "Overfitting: The Trap of Perfection"
  }, {
    "depth": 2,
    "slug": "too-perfect-a-fit-spoils-the-truth--complexity-hides-generalization",
    "text": "Too perfect a fit spoils the truth \u2014 complexity hides generalization"
  }, {
    "depth": 2,
    "slug": "gives-rise-to-the-need-for-validation-and-holding-out-data",
    "text": "Gives rise to the need for validation and holding out data"
  }, {
    "depth": 2,
    "slug": "the-bias-variance-tradeoff",
    "text": "The bias-variance tradeoff"
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
      id: "overfitting-the-trap-of-perfection",
      children: "Overfitting: The Trap of Perfection"
    }), "\n", createVNode(_components.h2, {
      id: "too-perfect-a-fit-spoils-the-truth--complexity-hides-generalization",
      children: "Too perfect a fit spoils the truth \u2014 complexity hides generalization"
    }), "\n", createVNode(_components.p, {
      children: "In our previous lesson, we saw how a simple line could model relationships between variables. But what happens when we use a more complex model that fits our training data perfectly? Rather than capturing the underlying pattern, our model starts to memorize the noise and peculiarities of our specific dataset."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "gives-rise-to-the-need-for-validation-and-holding-out-data",
      children: "Gives rise to the need for validation and holding out data"
    }), "\n", createVNode(_components.p, {
      children: "If using the same data for both training and evaluation, we have no way to know if our model has learned generalizable patterns. This realization introduces a fundamental concept in machine learning: we need separate data to validate our model\u2019s performance."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "the-bias-variance-tradeoff",
      children: "The bias-variance tradeoff"
    }), "\n", createVNode(_components.p, {
      children: "At the heart of overfitting lies a fundamental tension: simpler models may fail to capture important patterns (high bias), while complex models might be too sensitive to noise in the training data (high variance). Finding the sweet spot between these extremes is crucial for creating models that generalize well."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["If we can\u2019t trust our model just because it fits our training data well, how do we properly evaluate its performance? This brings us to our next topic: ", createVNode(_components.strong, {
        children: "Train/Test Split"
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
const url = "/browser-ide/blog/ml-story/02-overfitting";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/02-overfitting.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/02-overfitting.mdx";

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
