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
  "layout": "../../layouts/BlogPostLayout.astro",
  "title": "Using Manim to Visualize Algorithms",
  "date": "2023-04-15T00:00:00.000Z",
  "description": "Learn how to create beautiful math animations with Manim, the mathematical animation engine used by 3Blue1Brown."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "using-manim-to-visualize-algorithms",
    "text": "Using Manim to Visualize Algorithms"
  }, {
    "depth": 2,
    "slug": "what-is-manim",
    "text": "What is Manim?"
  }, {
    "depth": 2,
    "slug": "example-visualizing-linear-regression",
    "text": "Example: Visualizing Linear Regression"
  }, {
    "depth": 2,
    "slug": "animation-output",
    "text": "Animation Output"
  }, {
    "depth": 2,
    "slug": "advanced-features",
    "text": "Advanced Features"
  }, {
    "depth": 2,
    "slug": "example-gradient-descent-animation",
    "text": "Example: Gradient Descent Animation"
  }, {
    "depth": 2,
    "slug": "getting-started-with-manim",
    "text": "Getting Started with Manim"
  }, {
    "depth": 2,
    "slug": "manim-community-vs-manimgl",
    "text": "Manim Community vs ManimGL"
  }, {
    "depth": 2,
    "slug": "integration-with-ml-explanations",
    "text": "Integration with ML Explanations"
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
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "using-manim-to-visualize-algorithms",
      children: "Using Manim to Visualize Algorithms"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.manim.community/",
        children: "Manim"
      }), " is a powerful animation engine for creating precise mathematical animations. Created by Grant Sanderson (3Blue1Brown), it enables educators and content creators to produce explanatory math videos with beautiful visualizations."]
    }), "\n", createVNode(_components.h2, {
      id: "what-is-manim",
      children: "What is Manim?"
    }), "\n", createVNode(_components.p, {
      children: "Manim is a Python library that specializes in creating mathematical animations. It provides tools to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Create geometric shapes and graphs"
      }), "\n", createVNode(_components.li, {
        children: "Animate transformations between objects"
      }), "\n", createVNode(_components.li, {
        children: "Display mathematical equations"
      }), "\n", createVNode(_components.li, {
        children: "Create step-by-step algorithm visualizations"
      }), "\n", createVNode(_components.li, {
        children: "Build complex scenes with camera movements"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-visualizing-linear-regression",
      children: "Example: Visualizing Linear Regression"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s look at how we can use Manim to visualize a simple linear regression. This animation would show:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Data points scattered on a coordinate plane"
      }), "\n", createVNode(_components.li, {
        children: "The best-fit line being drawn through the points"
      }), "\n", createVNode(_components.li, {
        children: "The error lines connecting each point to the line"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s a simplified Manim script:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " manim "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " LinearRegressionScene"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "Scene"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " construct"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Create axes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        axes "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Axes("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            x_range"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            y_range"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "            axis_config"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"include_tip"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "False"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Add labels"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        x_label "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " axes.get_x_axis_label("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"x"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        y_label "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " axes.get_y_axis_label("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"y"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Create some data points (x, y coordinates)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        data_points "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "9"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        dots "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " VGroup("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            Dot(axes.c2p(x, y), "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "BLUE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " x, y "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data_points"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Create best fit line (simplified calculation)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # In reality, we would compute this from the data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        line "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " axes.plot("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "lambda"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " x: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.9"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " x, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "RED"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Animation sequence"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".play(Create(axes), Write(x_label), Write(y_label))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".wait()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".play(Create(dots, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "lag_ratio"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".wait()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".play(Create(line))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".wait()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Create error lines"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        error_lines "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " VGroup()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " x, y "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data_points:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            point "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " axes.c2p(x, y)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            line_y "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.9"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " x"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            line_point "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " axes.c2p(x, line_y)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            error_line "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Line("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                point, line_point, "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "                stroke_width"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "                color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "GREEN"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            error_lines.add(error_line)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".play(Create(error_lines, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "lag_ratio"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".wait("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "animation-output",
      children: "Animation Output"
    }), "\n", createVNode(_components.p, {
      children: "When rendered, the animation would look something like this:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://via.placeholder.com/600x400/f8f9fa/333333?text=Linear+Regression+Animation",
        alt: "Linear Regression Animation"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Note: This is a placeholder image. In a real implementation, this would be a GIF or video output from Manim."
      })
    }), "\n", createVNode(_components.h2, {
      id: "advanced-features",
      children: "Advanced Features"
    }), "\n", createVNode(_components.p, {
      children: "Manim offers many advanced features for creating more complex visualizations:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "3D Scenes"
        }), ": Create and animate objects in 3D space"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "LaTeX Integration"
        }), ": Display mathematical equations beautifully"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Camera Control"
        }), ": Zoom, pan, and focus on specific elements"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Graphing Utilities"
        }), ": Plot functions and datasets with ease"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Custom Animations"
        }), ": Define your own animation sequences"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-gradient-descent-animation",
      children: "Example: Gradient Descent Animation"
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Expand to see a more complex example (Gradient Descent)"
      }), createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "python",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " manim "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "class"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " GradientDescentScene"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Scene"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " construct"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(self):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Create a 3D axes for the loss function surface"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        axes "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ThreeDAxes("
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "            x_range"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "["
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "],"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "            y_range"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "["
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "],"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "            z_range"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "["
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "20"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "],"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        ).scale("
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0.7"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Define a simple loss function: f(x,y) = x^2 + y^2"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "        def"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " loss_func"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(x, y):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "            return"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "**"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " +"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " y"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "**"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Create the surface"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        surface "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Surface("
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "            lambda"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " u, v: axes.c2p(u, v, loss_func(u, v)),"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "            u_range"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "["
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "],"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "            v_range"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "["
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "],"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "            resolution"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "30"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "30"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "),"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "            fill_opacity"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0.7"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        )"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        surface.set_color_by_gradient(["
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "BLUE"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "GREEN"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "YELLOW"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "RED"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "])"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Starting point for gradient descent"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        start_point "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " axes.c2p("
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", loss_func("
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "))"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        dot "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Sphere("
            }), createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "radius"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0.1"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "color"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "WHITE"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ").move_to(start_point)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Label the axes"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        x_label "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " MathTex("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"'
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\\\"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: 'theta_1"'
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ").next_to(axes.x_axis, "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "RIGHT"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        y_label "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " MathTex("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"'
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\\\"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: 'theta_2"'
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ").next_to(axes.y_axis, "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "UP"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        z_label "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " MathTex("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"J('
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\\\"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: 'theta)"'
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ").next_to(axes.z_axis, "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "UP"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Title"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        title "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Text("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: '"Gradient Descent Optimization"'
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ").to_corner("
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "UL"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Add everything to the scene"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".add(axes, x_label, y_label, z_label, title)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".play(Create(surface))"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".play(Create(dot))"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        # Perform gradient descent steps"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        learning_rate "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 0.1"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        steps "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 15"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        x, y "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 3"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "        for"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " i "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "in"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " range"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(steps):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            # Compute gradient"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            grad_x "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " x"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            grad_y "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " 2"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " *"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " y"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            # Update parameters"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            new_x "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " x "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " learning_rate "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " grad_x"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            new_y "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " y "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " learning_rate "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " grad_y"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            # Update position"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            new_point "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " axes.c2p(new_x, new_y, loss_func(new_x, new_y))"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            # Create a line for the step"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            line "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Line("
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "                dot.get_center(), "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "                new_point, "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "                color"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "WHITE"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            )"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            # Animate the step"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "            self"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".play("
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "                Create(line),"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "                dot.animate.move_to(new_point),"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "                run_time"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0.5"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            )"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "            # Update current position"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            x, y "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " new_x, new_y"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "            "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ".wait("
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "getting-started-with-manim",
      children: "Getting Started with Manim"
    }), "\n", createVNode(_components.p, {
      children: "To get started with Manim:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Install Manim"
        }), ": ", createVNode(_components.code, {
          children: "pip install manim"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Create a Scene"
        }), ": Define a Python class inheriting from ", createVNode(_components.code, {
          children: "Scene"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Implement the ", createVNode(_components.code, {
            children: "construct"
          }), " method"]
        }), ": This is where you define your animation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Render your Scene"
        }), ": Run ", createVNode(_components.code, {
          children: "manim -pql your_file.py YourSceneName"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "manim-community-vs-manimgl",
      children: "Manim Community vs ManimGL"
    }), "\n", createVNode(_components.p, {
      children: "There are two main forks of Manim:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Manim Community Edition"
        }), ": More user-friendly, actively maintained by the community"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ManimGL (Manim Graphics Library)"
        }), ": Grant\u2019s personal version, used for 3Blue1Brown videos"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For beginners, the Community Edition is recommended due to better documentation and support."
    }), "\n", createVNode(_components.h2, {
      id: "integration-with-ml-explanations",
      children: "Integration with ML Explanations"
    }), "\n", createVNode(_components.p, {
      children: "Manim is perfect for explaining machine learning concepts like:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Gradient descent optimization"
      }), "\n", createVNode(_components.li, {
        children: "Neural network architecture and activation"
      }), "\n", createVNode(_components.li, {
        children: "Decision boundaries in classification"
      }), "\n", createVNode(_components.li, {
        children: "Principal component analysis"
      }), "\n", createVNode(_components.li, {
        children: "Clustering algorithms"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By visualizing these algorithms, we can develop stronger intuition about how machine learning works."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Next, we\u2019ll explore how to combine Manim visualizations with Pyodide to create fully interactive mathematical explanations."
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
const url = "/browser-ide/blog/manim-animation";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/manim-animation.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/manim-animation.mdx";

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
