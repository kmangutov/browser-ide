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
  "title": "Neural Networks: Layers of Abstraction",
  "description": "Understanding models inspired by the human brain",
  "pubDate": "April 8 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "neural-networks-inspired-by-nature",
    "text": "Neural Networks: Inspired by Nature"
  }, {
    "depth": 2,
    "slug": "a-leap-from-rules-to-layers-of-abstract-representation",
    "text": "A leap: from rules to layers of abstract representation"
  }, {
    "depth": 2,
    "slug": "continuous-loss-meets-nonlinearity-and-optimization-deepens",
    "text": "Continuous loss meets nonlinearity, and optimization deepens"
  }, {
    "depth": 2,
    "slug": "even-the-simplest-nn-echoes-linear-regression--with-depth",
    "text": "Even the simplest NN echoes linear regression \u2014 with depth"
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
      id: "neural-networks-inspired-by-nature",
      children: "Neural Networks: Inspired by Nature"
    }), "\n", createVNode(_components.h2, {
      id: "a-leap-from-rules-to-layers-of-abstract-representation",
      children: "A leap: from rules to layers of abstract representation"
    }), "\n", createVNode(_components.p, {
      children: "Neural networks represent a fundamental shift in how we approach machine learning. Rather than manually engineering features or specifying rules, neural networks learn hierarchical representations of the data through layers of interconnected \u201Cneurons.\u201D Each layer transforms its input, gradually building up from simple features to complex concepts, similar to how our brains process information."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "continuous-loss-meets-nonlinearity-and-optimization-deepens",
      children: "Continuous loss meets nonlinearity, and optimization deepens"
    }), "\n", createVNode(_components.p, {
      children: "At their core, neural networks are mathematical functions with many parameters. However, the introduction of nonlinear activation functions allows them to learn complex patterns that linear models cannot capture. Training these models involves optimizing the loss function across many dimensions, a process made possible by the backpropagation algorithm, which efficiently calculates how each parameter affects the output."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "even-the-simplest-nn-echoes-linear-regression--with-depth",
      children: "Even the simplest NN echoes linear regression \u2014 with depth"
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s enlightening to see that a neural network with no hidden layers and no activation function is essentially a linear regression model. Adding depth (more layers) and nonlinearity (activation functions) transforms this simple model into a universal function approximator\u2014capable, in theory, of learning any mapping between inputs and outputs given enough data and capacity."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["So far, our journey has focused on models that make predictions based on static inputs. But what about data that changes over time, where the sequence of events matters? This brings us to our final topic: ", createVNode(_components.strong, {
        children: "Seasonality"
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
const url = "/browser-ide/blog/ml-story/09-neural-networks";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/09-neural-networks.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/09-neural-networks.mdx";

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
