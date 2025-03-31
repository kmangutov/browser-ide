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
  "title": "Categorical vs Continuous Loss: Measuring Different Realities",
  "description": "How the nature of our prediction shapes our evaluation strategies",
  "pubDate": "April 5 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "categorical-vs-continuous-loss-the-nature-of-prediction",
    "text": "Categorical vs Continuous Loss: The Nature of Prediction"
  }, {
    "depth": 2,
    "slug": "we-ask-what-are-we-measuring-numbers-or-categories",
    "text": "We ask: what are we measuring? Numbers or categories?"
  }, {
    "depth": 2,
    "slug": "explores-how-models-learn-differently-depending-on-output-space",
    "text": "Explores how models learn differently depending on output space"
  }, {
    "depth": 2,
    "slug": "the-bridge-between-worlds-probability-distributions",
    "text": "The bridge between worlds: probability distributions"
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
      id: "categorical-vs-continuous-loss-the-nature-of-prediction",
      children: "Categorical vs Continuous Loss: The Nature of Prediction"
    }), "\n", createVNode(_components.h2, {
      id: "we-ask-what-are-we-measuring-numbers-or-categories",
      children: "We ask: what are we measuring? Numbers or categories?"
    }), "\n", createVNode(_components.p, {
      children: "Thus far, we\u2019ve explored various ways to evaluate models, but we haven\u2019t deeply examined how the nature of what we\u2019re predicting fundamentally changes our approach. Are we predicting a discrete category (classification) or a continuous value (regression)? This distinction shapes not only our evaluation metrics but also how our models learn."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "explores-how-models-learn-differently-depending-on-output-space",
      children: "Explores how models learn differently depending on output space"
    }), "\n", createVNode(_components.p, {
      children: "In classification, we typically use loss functions like cross-entropy loss, which penalizes confident but wrong predictions severely. In regression, we often use mean squared error or mean absolute error, which directly measure the numerical difference between predicted and actual values. These different loss functions guide our models to learn in fundamentally different ways."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "the-bridge-between-worlds-probability-distributions",
      children: "The bridge between worlds: probability distributions"
    }), "\n", createVNode(_components.p, {
      children: "Behind both categorical and continuous predictions lies the concept of probability distributions. A classification model outputs a probability distribution over discrete categories, while a regression model (in its probabilistic form) outputs a continuous probability distribution. This perspective unifies our understanding and opens the door to more sophisticated modeling approaches."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["As we\u2019ve seen, the methods we\u2019ve discussed so far all involve models that make predictions based on mathematical functions. But what if we could create models that make decisions based on logical rules, similar to human reasoning? This brings us to our next topic: ", createVNode(_components.strong, {
        children: "Decision Trees"
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
const url = "/browser-ide/blog/ml-story/06-categorical-continuous-loss";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/06-categorical-continuous-loss.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/06-categorical-continuous-loss.mdx";

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
