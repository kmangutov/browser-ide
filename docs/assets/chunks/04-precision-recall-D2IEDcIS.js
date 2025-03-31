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
  "title": "Precision vs Recall: The Values We Choose",
  "description": "Understanding the trade-offs in what we optimize for",
  "pubDate": "April 3 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "precision-vs-recall-what-matters-most",
    "text": "Precision vs Recall: What Matters Most?"
  }, {
    "depth": 2,
    "slug": "in-choosing-whats-important-to-get-right-we-define-our-values",
    "text": "In choosing what\u2019s important to get right, we define our values"
  }, {
    "depth": 2,
    "slug": "a-tension-emerges-do-we-cry-wolf-or-miss-the-threat",
    "text": "A tension emerges: do we cry wolf or miss the threat?"
  }, {
    "depth": 2,
    "slug": "contextualizes-error-into-decision-making-under-uncertainty",
    "text": "Contextualizes error into decision-making under uncertainty"
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
      id: "precision-vs-recall-what-matters-most",
      children: "Precision vs Recall: What Matters Most?"
    }), "\n", createVNode(_components.h2, {
      id: "in-choosing-whats-important-to-get-right-we-define-our-values",
      children: "In choosing what\u2019s important to get right, we define our values"
    }), "\n", createVNode(_components.p, {
      children: "Not all errors are created equal. When we build models to make decisions, we implicitly encode value judgments about which kinds of mistakes are more acceptable. In classification problems, we face a fundamental choice: do we prioritize being right when we make a positive prediction (precision), or do we focus on catching as many positive cases as possible (recall)?"
    }), "\n", "\n", createVNode(_components.h2, {
      id: "a-tension-emerges-do-we-cry-wolf-or-miss-the-threat",
      children: "A tension emerges: do we cry wolf or miss the threat?"
    }), "\n", createVNode(_components.p, {
      children: "Precision and recall often exist in tension with each other. As we adjust our model to increase precision (reducing false alarms), we typically sacrifice recall (missing more actual cases). Conversely, as we increase recall to catch more positive cases, we tend to generate more false positives."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "contextualizes-error-into-decision-making-under-uncertainty",
      children: "Contextualizes error into decision-making under uncertainty"
    }), "\n", createVNode(_components.p, {
      children: "This trade-off forces us to think about the real-world context of our model\u2019s applications. In medical diagnosis, missing a disease (false negative) might be life-threatening, while in spam detection, incorrectly flagging a legitimate email (false positive) might be more problematic than missing some spam."
    }), "\n", "\n", createVNode(_components.p, {
      children: ["The precision-recall framework introduces us to thinking about model evaluation in terms of specific kinds of errors. This perspective is particularly important in certain domains, which leads us to our next topic: ", createVNode(_components.strong, {
        children: "Specificity vs Sensitivity"
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
const url = "/browser-ide/blog/ml-story/04-precision-recall";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/04-precision-recall.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/04-precision-recall.mdx";

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
