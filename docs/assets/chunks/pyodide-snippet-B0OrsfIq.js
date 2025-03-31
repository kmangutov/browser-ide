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
  "title": "Running scikit-learn in the browser",
  "date": "2023-04-10T00:00:00.000Z",
  "description": "Learn how to run Python machine learning code directly in your browser using Pyodide and scikit-learn without any server or installation."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "running-scikit-learn-in-the-browser",
    "text": "Running scikit-learn in the browser"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How it works"
  }, {
    "depth": 3,
    "slug": "benefits",
    "text": "Benefits:"
  }, {
    "depth": 2,
    "slug": "example-linear-regression-with-scikit-learn",
    "text": "Example: Linear Regression with scikit-learn"
  }, {
    "depth": 2,
    "slug": "how-the-code-works",
    "text": "How the code works"
  }, {
    "depth": 2,
    "slug": "try-it-yourself",
    "text": "Try it yourself"
  }, {
    "depth": 2,
    "slug": "technical-considerations",
    "text": "Technical considerations"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next steps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
      id: "running-scikit-learn-in-the-browser",
      children: "Running scikit-learn in the browser"
    }), "\n", createVNode(_components.p, {
      children: ["Machine learning typically requires a Python environment with libraries like scikit-learn installed. But what if you could run this code directly in your browser? That\u2019s exactly what ", createVNode(_components.a, {
        href: "https://pyodide.org/",
        children: "Pyodide"
      }), " enables by bringing Python to WebAssembly."]
    }), "\n", createVNode(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", createVNode(_components.p, {
      children: "Pyodide is a Python interpreter compiled to WebAssembly, allowing Python to run directly in the browser. When combined with scientific libraries like NumPy, pandas, and scikit-learn, it enables running machine learning algorithms without a server."
    }), "\n", createVNode(_components.h3, {
      id: "benefits",
      children: "Benefits:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "No installation required"
      }), "\n", createVNode(_components.li, {
        children: "No server-side processing"
      }), "\n", createVNode(_components.li, {
        children: "Secure execution in browser sandbox"
      }), "\n", createVNode(_components.li, {
        children: "Accessible from any device with a modern browser"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-linear-regression-with-scikit-learn",
      children: "Example: Linear Regression with scikit-learn"
    }), "\n", createVNode(_components.p, {
      children: "Below is a simple example using scikit-learn to perform linear regression on synthetic data:"
    }), "\n", createVNode($$PyodideEmbed, {
      code: `# Import necessary libraries
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

try:
  # Generate synthetic data
  np.random.seed(42)
  X = np.random.rand(100, 4) * 10  # 100 samples, 4 features
  y = 2 + 3 * X[:, 0] + 1.5 * X[:, 1] - 0.5 * X[:, 2] + 0.2 * X[:, 3] + np.random.randn(100) * 2

  # Split the data into training and testing sets
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

  # Create and train the model
  model = LinearRegression()
  model.fit(X_train, y_train)

  # Make predictions
  y_pred = model.predict(X_test)

  # Calculate metrics
  mse = mean_squared_error(y_test, y_pred)
  r2 = r2_score(y_test, y_pred)

  # Print results
  print(f"Model: Linear Regression")
  print(f"Mean Squared Error: {mse:.4f}")
  print(f"R\xB2 Score: {r2:.4f}")
  print(f"Coefficients: {model.coef_}")
  print(f"Intercept: {model.intercept_}")

  # Create a results dictionary to return - convert all NumPy arrays to lists
  result = {
      "model_type": "LinearRegression",
      "mse": float(mse),
      "r2": float(r2),
      "coefficients": model.coef_.tolist(),
      "intercept": float(model.intercept_),
      "y_test": y_test.tolist(),
      "y_pred": y_pred.tolist()
  }

  # This dictionary will be converted to JSON-friendly format automatically
  result
except Exception as e:
  # Return error information if something goes wrong
  {"error": str(e)}`
    }), "\n", createVNode(_components.h2, {
      id: "how-the-code-works",
      children: "How the code works"
    }), "\n", createVNode(_components.p, {
      children: "This example demonstrates several key concepts:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Generation"
        }), ": Creating synthetic data with known relationships"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Preparation"
        }), ": Splitting the data into training and testing sets"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Model Creation"
        }), ": Initializing a LinearRegression model"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Model Training"
        }), ": Fitting the model to our training data"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prediction"
        }), ": Using the trained model to make predictions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Evaluation"
        }), ": Calculating metrics to assess model performance"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "try-it-yourself",
      children: "Try it yourself"
    }), "\n", createVNode(_components.p, {
      children: "You can modify the code above to experiment with:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Different data generation (change coefficients or add nonlinear terms)"
      }), "\n", createVNode(_components.li, {
        children: ["Different models (try ", createVNode(_components.code, {
          children: "RandomForestRegressor"
        }), " or ", createVNode(_components.code, {
          children: "SVR"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: "Different hyperparameters or feature sets"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-considerations",
      children: "Technical considerations"
    }), "\n", createVNode(_components.p, {
      children: "While Pyodide is impressive, there are some limitations:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Initial load time"
        }), ": The first load downloads Python and libraries (~10-20MB)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Memory constraints"
        }), ": Browser memory limits complex computations"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance"
        }), ": Native Python is generally faster for intensive tasks"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Library support"
        }), ": Not all Python libraries work in the browser (for example, visualization libraries and file I/O operations may have limitations)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For production applications with large datasets, a server-based approach is recommended. However, for learning, experimentation, and demonstrations, browser-based ML is incredibly powerful and accessible."
    }), "\n", createVNode(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), "\n", createVNode(_components.p, {
      children: "Check out our playground to experiment with more ML models and techniques, all running directly in your browser!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/",
        children: "Go to Playground \u2192"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "This blog post is part of our series on making machine learning more accessible through browser-based tools."
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
const url = "/browser-ide/blog/pyodide-snippet";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/pyodide-snippet.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/pyodide-snippet.mdx";

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
