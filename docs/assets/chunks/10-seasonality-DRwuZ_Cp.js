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
  "title": "Seasonality: Time Enters the Picture",
  "description": "Understanding patterns that repeat over time",
  "pubDate": "April 9 2023"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "seasonality-the-rhythm-of-time",
    "text": "Seasonality: The Rhythm of Time"
  }, {
    "depth": 2,
    "slug": "time-reenters-the-picture-patterns-not-in-space-but-in-sequence",
    "text": "Time reenters the picture: patterns not in space, but in sequence"
  }, {
    "depth": 2,
    "slug": "models-must-now-remember-wait-and-revisit",
    "text": "Models must now remember, wait, and revisit"
  }, {
    "depth": 2,
    "slug": "introduces-temporal-modeling-and-domain-aware-thinking",
    "text": "Introduces temporal modeling and domain-aware thinking"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "seasonality-the-rhythm-of-time",
      children: "Seasonality: The Rhythm of Time"
    }), "\n", createVNode(_components.h2, {
      id: "time-reenters-the-picture-patterns-not-in-space-but-in-sequence",
      children: "Time reenters the picture: patterns not in space, but in sequence"
    }), "\n", createVNode(_components.p, {
      children: "Thus far, we\u2019ve largely considered data points as independent observations. But in many real-world scenarios, the order and timing of observations matter critically. Time series data\u2014like stock prices, weather patterns, or website traffic\u2014exhibit temporal dependencies that our models must capture to make accurate predictions."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "models-must-now-remember-wait-and-revisit",
      children: "Models must now remember, wait, and revisit"
    }), "\n", createVNode(_components.p, {
      children: "To model seasonality effectively, our approaches must identify and leverage recurring patterns across different time scales. For instance, retail sales might show daily patterns (higher in evenings), weekly patterns (higher on weekends), and yearly patterns (higher during holidays). These cyclical variations require models that can detect and utilize long-range dependencies."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "introduces-temporal-modeling-and-domain-aware-thinking",
      children: "Introduces temporal modeling and domain-aware thinking"
    }), "\n", createVNode(_components.p, {
      children: "Effective time series modeling often requires incorporating domain knowledge. Whether we\u2019re decomposing signals, using seasonal ARIMA models, or implementing more advanced techniques like recurrent neural networks, understanding the underlying processes generating the data becomes crucial. This represents a shift from purely data-driven approaches to ones that blend data with domain expertise."
    }), "\n", "\n", createVNode(_components.p, {
      children: "Our journey through machine learning has taken us from the simplicity of linear regression to the complexity of neural networks and time series analysis. Throughout this progression, we\u2019ve repeatedly encountered fundamental tensions: between simplicity and expressiveness, between memorization and generalization, between pure data-driven learning and domain-aware modeling. These tensions define the field and continue to guide its evolution."
    }), "\n", createVNode(_components.p, {
      children: "As we conclude this curriculum, remember that machine learning is not just a collection of techniques but a way of thinking about problems\u2014a lens through which we can view the world\u2019s complexity and extract meaningful patterns to inform decisions."
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
const url = "/browser-ide/blog/ml-story/10-seasonality";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/10-seasonality.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/ml-story/10-seasonality.mdx";

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
