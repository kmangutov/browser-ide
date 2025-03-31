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
  "title": "Decision Trees: Human-Like Learning",
  "description": "Understanding models that learn through logical rules rather than mathematical functions",
  "pubDate": "April 6 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "decision-trees-the-logic-of-decisions",
    "text": "Decision Trees: The Logic of Decisions"
  }, {
    "depth": 2,
    "slug": "a-more-human-like-model-if-then-paths-like-rules-of-logic",
    "text": "A more human-like model: if-then paths, like rules of logic"
  }, {
    "depth": 2,
    "slug": "explores-the-structure-of-decisions",
    "text": "Explores the structure of decisions"
  }, {
    "depth": 2,
    "slug": "overfitting-reappears--trees-can-memorize-too-well",
    "text": "Overfitting reappears \u2014 trees can memorize too well"
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
      id: "decision-trees-the-logic-of-decisions",
      children: "Decision Trees: The Logic of Decisions"
    }), "\n", createVNode(_components.h2, {
      id: "a-more-human-like-model-if-then-paths-like-rules-of-logic",
      children: "A more human-like model: if-then paths, like rules of logic"
    }), "\n", createVNode(_components.p, {
      children: "Unlike the mathematical models we\u2019ve explored so far, decision trees make predictions through a series of logical if-then rules. Starting at the root, the model traverses a path of decisions based on feature values until it reaches a leaf node that provides the prediction. This process mirrors human decision-making, making decision trees highly interpretable."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "explores-the-structure-of-decisions",
      children: "Explores the structure of decisions"
    }), "\n", createVNode(_components.p, {
      children: "Decision trees automatically identify the most informative features and the optimal thresholds for splitting the data. At each node, the tree chooses the split that maximizes information gain\u2014reducing uncertainty about the target variable as much as possible. This process reveals the structure of the decision-making process inherent in the data."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "overfitting-reappears--trees-can-memorize-too-well",
      children: "Overfitting reappears \u2014 trees can memorize too well"
    }), "\n", createVNode(_components.p, {
      children: "Just as we saw with linear models, decision trees face the challenge of overfitting. A tree with too many nodes can perfectly fit the training data by essentially memorizing it, creating branches for every minor pattern or noise in the data. This leads to poor generalization on unseen data, reintroducing the fundamental tension between model complexity and generalizability."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["If a single decision tree is prone to overfitting, could we somehow combine multiple trees to create a more robust model? This question leads us to our next topic: ", createVNode(_components.strong, {
        children: "Boosting / Bagging"
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
const url = "/browser-ide/blog/ml-story/07-decision-trees";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/07-decision-trees.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/07-decision-trees.mdx";

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
