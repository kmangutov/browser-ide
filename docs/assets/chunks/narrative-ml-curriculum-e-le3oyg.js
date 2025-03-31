import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server-BpiS1_cD.js';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets-DNMPS4SJ.js';
import { $ as $$PyodideEmbed } from './PyodideEmbed-hEc-L5vS.js';
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
  "layout": "../../layouts/BlogPostLayout.astro",
  "title": "Narrative-Driven ML Curriculum",
  "date": "2023-04-20T00:00:00.000Z",
  "description": "A continuous story-like approach to teaching machine learning concepts, inspired by G\xF6del, Escher, Bach."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "-narrative-driven-ml-curriculum",
    "text": "\u{1F9F5} Narrative-Driven ML Curriculum"
  }, {
    "depth": 2,
    "slug": "why-a-narrative-approach",
    "text": "Why a narrative approach?"
  }, {
    "depth": 2,
    "slug": "1-linear-regression-our-first-model",
    "text": "1. Linear Regression: Our First Model"
  }, {
    "depth": 2,
    "slug": "2-overfitting-the-danger-of-perfection",
    "text": "2. Overfitting: The Danger of Perfection"
  }, {
    "depth": 2,
    "slug": "3-traintest-split-measuring-generalization",
    "text": "3. Train/Test Split: Measuring Generalization"
  }, {
    "depth": 2,
    "slug": "-narrative-flow-principles",
    "text": "\u{1F300} Narrative Flow Principles"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next Steps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "-narrative-driven-ml-curriculum",
      children: "\u{1F9F5} Narrative-Driven ML Curriculum"
    }), "\n", createVNode(_components.p, {
      children: ["Inspired by ", createVNode(_components.em, {
        children: "G\xF6del, Escher, Bach"
      }), ", this curriculum weaves machine learning concepts into a continuous story, where each section emerges naturally from the last."]
    }), "\n", createVNode(_components.h2, {
      id: "why-a-narrative-approach",
      children: "Why a narrative approach?"
    }), "\n", createVNode(_components.p, {
      children: ["Traditional ML courses often present concepts as disconnected topics. But in reality, each idea flows from challenges encountered in previous approaches. By teaching ML as a continuous narrative, we help learners understand not just ", createVNode(_components.em, {
        children: "how"
      }), " techniques work, but ", createVNode(_components.em, {
        children: "why"
      }), " they were developed."]
    }), "\n", createVNode(_components.h2, {
      id: "1-linear-regression-our-first-model",
      children: "1. Linear Regression: Our First Model"
    }), "\n", createVNode(_components.p, {
      children: "The simplest lens through which we can view the world is as a mapping from input to output. Linear regression establishes this foundation."
    }), "\n", createVNode($$PyodideEmbed, {
      code: `# Import libraries
import numpy as np
from sklearn.linear_model import LinearRegression

try:
  # Generate synthetic data directly instead of using built-in datasets
  np.random.seed(42)
  X = np.random.rand(100, 1) * 10    # 100 samples, 1 feature
  noise = np.random.randn(100, 1) * 2  # some random noise
  y = 3 * X + 5 + noise               # y = 3x + 5 + noise

  # Create and train model
  model = LinearRegression()
  model.fit(X, y)

  # Make predictions across the input range
  X_range = np.linspace(X.min(), X.max(), 100).reshape(-1, 1)
  y_pred = model.predict(X_range)

  # Print model info
  print(f"Coefficient: {model.coef_[0][0]:.4f}")
  print(f"Intercept: {model.intercept_[0]:.4f}")

  # Create results dictionary - convert all NumPy arrays to lists
  result = {
      "X": X.flatten().tolist(),
      "y": y.flatten().tolist(),
      "X_range": X_range.flatten().tolist(),
      "y_pred": y_pred.flatten().tolist(),
      "coefficient": float(model.coef_[0][0]),
      "intercept": float(model.intercept_[0])
  }

  # Return results dictionary
  result
except Exception as e:
  # Return error information
  {"error": str(e)}`
    }), "\n", createVNode(_components.p, {
      children: "The continuous loss function (Mean Squared Error) teaches us the fundamental idea of optimizing a model. But it also introduces the temptation to fit every data point perfectly, leading us to our next challenge\u2026"
    }), "\n", createVNode(_components.h2, {
      id: "2-overfitting-the-danger-of-perfection",
      children: "2. Overfitting: The Danger of Perfection"
    }), "\n", createVNode(_components.p, {
      children: "Too perfect a fit spoils the truth. When a model captures not just patterns but noise, it loses its generalization power."
    }), "\n", createVNode($$PyodideEmbed, {
      code: `# Import libraries
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

try:
  # Generate synthetic data
  np.random.seed(42)
  X = np.sort(np.random.rand(20) * 5).reshape(-1, 1)
  y = np.sin(X).ravel() + np.random.randn(20) * 0.2

  # Create models with different polynomial degrees
  degrees = [1, 3, 10]
  models = {}
  predictions = {}

  for degree in degrees:
      # Create polynomial regression model
      model = make_pipeline(
          PolynomialFeatures(degree),
          LinearRegression()
      )
      model.fit(X, y)
      models[degree] = model
      
      # Make predictions
      X_range = np.linspace(0, 5, 100).reshape(-1, 1)
      predictions[degree] = model.predict(X_range)
      
      # Print model details
      print(f"Degree {degree} polynomial:")
      train_score = model.score(X, y)
      print(f"  Training R\xB2 score: {train_score:.4f}")

  # Create results dictionary - convert all NumPy arrays to lists
  result = {
      "X": X.flatten().tolist(),
      "y": y.tolist(),
      "X_range": np.linspace(0, 5, 100).tolist(),
      "predictions": {
          str(degree): predictions[degree].tolist() 
          for degree in degrees
      },
      "train_scores": {
          str(degree): float(models[degree].score(X, y))
          for degree in degrees
      }
  }

  # Return results
  result
except Exception as e:
  # Return error information
  {"error": str(e)}`
    }), "\n", createVNode(_components.p, {
      children: "This leads us to a critical insight: we need a way to measure how well our model performs on data it hasn\u2019t seen before."
    }), "\n", createVNode(_components.h2, {
      id: "3-traintest-split-measuring-generalization",
      children: "3. Train/Test Split: Measuring Generalization"
    }), "\n", createVNode(_components.p, {
      children: "To test our faith in generalization, we must withhold what we know. The train/test split is our first tool for measuring true learning rather than just memorization."
    }), "\n", createVNode($$PyodideEmbed, {
      code: `# Import libraries
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

try:
  # Generate synthetic data
  np.random.seed(42)
  X = np.sort(np.random.rand(50) * 5).reshape(-1, 1)
  y = np.sin(X).ravel() + np.random.randn(50) * 0.2

  # Split data into training and testing sets
  X_train, X_test, y_train, y_test = train_test_split(
      X, y, test_size=0.3, random_state=42
  )

  # Create models with different polynomial degrees
  degrees = [1, 3, 15]
  model_results = {}

  for degree in degrees:
      # Create polynomial regression model
      model = make_pipeline(
          PolynomialFeatures(degree),
          LinearRegression()
      )
      model.fit(X_train, y_train)
      
      # Evaluate on training data
      y_train_pred = model.predict(X_train)
      train_mse = mean_squared_error(y_train, y_train_pred)
      train_r2 = r2_score(y_train, y_train_pred)
      
      # Evaluate on testing data
      y_test_pred = model.predict(X_test)
      test_mse = mean_squared_error(y_test, y_test_pred)
      test_r2 = r2_score(y_test, y_test_pred)
      
      # Print results
      print(f"Degree {degree} polynomial:")
      print(f"  Training MSE: {train_mse:.4f}, R\xB2: {train_r2:.4f}")
      print(f"  Testing MSE: {test_mse:.4f}, R\xB2: {test_r2:.4f}")
      
      # Store results - convert NumPy arrays to lists
      model_results[degree] = {
          "train_mse": float(train_mse),
          "train_r2": float(train_r2),
          "test_mse": float(test_mse),
          "test_r2": float(test_r2),
          "y_train_pred": y_train_pred.tolist(),
          "y_test_pred": y_test_pred.tolist()
      }

  # Create results dictionary - convert NumPy arrays to lists
  result = {
      "X_train": X_train.flatten().tolist(),
      "y_train": y_train.tolist(),
      "X_test": X_test.flatten().tolist(),
      "y_test": y_test.tolist(),
      "degrees": degrees,
      "results": model_results
  }

  # Return results
  result
except Exception as e:
  # Return error information
  {"error": str(e)}`
    }), "\n", createVNode(_components.p, {
      children: "But what if not all errors are created equal? This leads us to consider the context in which our models operate."
    }), "\n", createVNode(_components.h2, {
      id: "-narrative-flow-principles",
      children: "\u{1F300} Narrative Flow Principles"
    }), "\n", createVNode(_components.p, {
      children: "This curriculum follows several key principles:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Continuity"
        }), ": Each section ends with a question or concept the next chapter answers"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Recurrent Motifs"
        }), ": Themes like overfitting, optimization, and abstraction reappear throughout"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Journey"
        }), ": We progress from simple to powerful models, but always return to interpretability and purpose"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The remaining chapters in our narrative continue this journey:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Precision vs Recall"
        }), ": Choosing what\u2019s important to get right"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Decision Trees"
        }), ": A more human-like model of if-then rules"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ensemble Methods"
        }), ": The wisdom of crowds in boosting and bagging"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Neural Networks"
        }), ": Layers of abstract representations"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Temporal Models"
        }), ": Patterns not in space, but in sequence"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", createVNode(_components.p, {
      children: "Our curriculum is designed so each concept builds naturally on the challenges and limitations revealed in the previous section. Follow along as we continue to explore machine learning through this narrative lens."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/blog/",
        children: "Explore More Articles \u2192"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "This approach is inspired by the interconnected storytelling in Douglas Hofstadter\u2019s \u201CG\xF6del, Escher, Bach\u201D which weaves together seemingly disparate concepts into a coherent whole."
      })
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
const url = "/browser-ide/blog/narrative-ml-curriculum";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/narrative-ml-curriculum.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/narrative-ml-curriculum.mdx";

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
