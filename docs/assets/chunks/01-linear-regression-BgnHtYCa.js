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
  "title": "Linear Regression: The Beginning of Our Journey",
  "description": "Understanding the simplest lens through which we can see the world",
  "pubDate": "March 31 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "linear-regression-where-our-story-begins",
    "text": "Linear Regression: Where Our Story Begins"
  }, {
    "depth": 2,
    "slug": "our-simplest-lens-to-see-the-world-input--output",
    "text": "Our simplest lens to see the world: input \u21A6 output"
  }, {
    "depth": 2,
    "slug": "continuous-loss-mse-teaches-us-the-idea-of-optimizing-a-model",
    "text": "Continuous loss (MSE) teaches us the idea of optimizing a model"
  }, {
    "depth": 2,
    "slug": "introduces-overfitting-via-the-temptation-to-fit-every-data-point",
    "text": "Introduces overfitting via the temptation to fit every data point"
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
      id: "linear-regression-where-our-story-begins",
      children: "Linear Regression: Where Our Story Begins"
    }), "\n", createVNode(_components.h2, {
      id: "our-simplest-lens-to-see-the-world-input--output",
      children: "Our simplest lens to see the world: input \u21A6 output"
    }), "\n", createVNode(_components.p, {
      children: "The journey of machine learning begins with a simple idea: given some input, can we predict an output?\nImagine trying to predict house prices based on their size. As the size increases, the price tends to increase as well. This relationship can be modeled as a line: y = mx + b, where y is the price, x is the size, m is the slope, and b is the y-intercept."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "continuous-loss-mse-teaches-us-the-idea-of-optimizing-a-model",
      children: "Continuous loss (MSE) teaches us the idea of optimizing a model"
    }), "\n", createVNode(_components.p, {
      children: "How do we know if our line is a good fit? We measure the distance between our predictions and the actual values. The most common way is through Mean Squared Error (MSE): the average of the squared differences between predictions and actual values. By minimizing this loss, we find the best-fitting line."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "introduces-overfitting-via-the-temptation-to-fit-every-data-point",
      children: "Introduces overfitting via the temptation to fit every data point"
    }), "\n", createVNode(_components.p, {
      children: "But wait\u2014what if we could create a model so complex that it passes through every single data point perfectly? Wouldn\u2019t that be better? This is where we encounter our first fundamental challenge: the tension between fitting the training data and generalizing to new, unseen data."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["As we fit our model too precisely to our training data, we risk missing the forest for the trees. This leads us naturally to our next topic: ", createVNode(_components.strong, {
        children: "Overfitting"
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
const url = "/browser-ide/blog/ml-story/01-linear-regression";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/01-linear-regression.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/01-linear-regression.mdx";

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
