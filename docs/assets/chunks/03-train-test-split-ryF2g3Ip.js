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
  "title": "Train/Test Split: Evaluating With Integrity",
  "description": "How we measure true learning rather than mere memorization",
  "pubDate": "April 2 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "traintest-split-the-scientific-method-for-machine-learning",
    "text": "Train/Test Split: The Scientific Method for Machine Learning"
  }, {
    "depth": 2,
    "slug": "to-test-our-faith-in-generalization-we-must-withhold-what-we-know",
    "text": "To test our faith in generalization, we must withhold what we know"
  }, {
    "depth": 2,
    "slug": "shows-how-to-measure-learning-not-just-memory",
    "text": "Shows how to measure learning, not just memory"
  }, {
    "depth": 2,
    "slug": "sets-the-stage-for-evaluating-not-just-how-but-how-well",
    "text": "Sets the stage for evaluating not just how, but how well"
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
      id: "traintest-split-the-scientific-method-for-machine-learning",
      children: "Train/Test Split: The Scientific Method for Machine Learning"
    }), "\n", createVNode(_components.h2, {
      id: "to-test-our-faith-in-generalization-we-must-withhold-what-we-know",
      children: "To test our faith in generalization, we must withhold what we know"
    }), "\n", createVNode(_components.p, {
      children: "Like a scientist formulating a hypothesis and then testing it against new observations, a machine learning model must be evaluated on data it hasn\u2019t seen during training. This is the principle behind train/test splitting: dividing our data into a portion for training and a separate portion for evaluation."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "shows-how-to-measure-learning-not-just-memory",
      children: "Shows how to measure learning, not just memory"
    }), "\n", createVNode(_components.p, {
      children: "When we evaluate our model on the test set, we\u2019re asking: \u201CDid you learn meaningful patterns, or did you just memorize the examples I showed you?\u201D A model that performs well on both training and testing data demonstrates that it has captured generalizable knowledge about the problem domain."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "sets-the-stage-for-evaluating-not-just-how-but-how-well",
      children: "Sets the stage for evaluating not just how, but how well"
    }), "\n", createVNode(_components.p, {
      children: "Beyond simply asking if a model can generalize, the train/test paradigm allows us to compare different models and techniques quantitatively. This framework gives us a principled way to determine which approach works better for a given problem, laying the foundation for scientific progress in machine learning."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["But what exactly should we measure on our test set? The choice of metric fundamentally shapes what our model optimizes for, which brings us to our next topic: ", createVNode(_components.strong, {
        children: "Precision vs Recall"
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
const url = "/browser-ide/blog/ml-story/03-train-test-split";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/03-train-test-split.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/03-train-test-split.mdx";

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
