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
  "title": "Boosting & Bagging: The Wisdom of Crowds",
  "description": "How combining weak learners creates powerful, robust models",
  "pubDate": "April 7 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "boosting--bagging-strength-in-numbers",
    "text": "Boosting & Bagging: Strength in Numbers"
  }, {
    "depth": 2,
    "slug": "the-wisdom-of-crowds-weak-learners-made-strong",
    "text": "The wisdom of crowds: weak learners made strong"
  }, {
    "depth": 2,
    "slug": "emphasizes-diversity-randomness-and-averaging-as-a-meta-strategy",
    "text": "Emphasizes diversity, randomness, and averaging as a meta-strategy"
  }, {
    "depth": 2,
    "slug": "a-solution-to-variance-and-overfitting-from-a-systems-perspective",
    "text": "A solution to variance and overfitting from a systems perspective"
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
      id: "boosting--bagging-strength-in-numbers",
      children: "Boosting & Bagging: Strength in Numbers"
    }), "\n", createVNode(_components.h2, {
      id: "the-wisdom-of-crowds-weak-learners-made-strong",
      children: "The wisdom of crowds: weak learners made strong"
    }), "\n", createVNode(_components.p, {
      children: "Individual decision trees have limitations, but what if we could combine many trees to create a more powerful model? This is the fundamental insight behind ensemble methods. By aggregating the predictions of multiple \u201Cweak learners\u201D (simple models that perform slightly better than random guessing), we can create a \u201Cstrong learner\u201D that achieves much higher accuracy."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "emphasizes-diversity-randomness-and-averaging-as-a-meta-strategy",
      children: "Emphasizes diversity, randomness, and averaging as a meta-strategy"
    }), "\n", createVNode(_components.p, {
      children: "Ensemble methods come in different flavors. Bagging (Bootstrap Aggregating) creates diversity by training each model on a random subset of the data and features, then averaging their predictions. Boosting, on the other hand, trains models sequentially, with each new model focusing on the examples that previous models struggled with. Both approaches leverage diversity and aggregation to improve performance."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "a-solution-to-variance-and-overfitting-from-a-systems-perspective",
      children: "A solution to variance and overfitting from a systems perspective"
    }), "\n", createVNode(_components.p, {
      children: "What makes ensemble methods particularly powerful is their ability to reduce overfitting. While individual models might overfit to their specific subset of the data, their collective prediction tends to average out these idiosyncrasies, resulting in a more generalizable model. This approach addresses overfitting not by simplifying individual models, but by creating a system that balances out their individual biases."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["Ensemble methods show us that combining simple models can create powerful predictive systems. But what if, instead of having many separate models, we could create a single model with multiple interconnected layers of processing? This brings us to our next topic: ", createVNode(_components.strong, {
        children: "Neural Networks"
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
const url = "/browser-ide/blog/ml-story/08-boosting-bagging";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/08-boosting-bagging.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/08-boosting-bagging.mdx";

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
