import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server-BpiS1_cD.js';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets-DNMPS4SJ.js';
import { $ as $$PyodideMatplotlib } from './PyodideMatplotlib-BQsgqGZh.js';
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
  "title": "Creating Interactive Python Animations with Pyodide",
  "publishDate": "2023-09-17T00:00:00.000Z",
  "description": "Learn how to create interactive animations using Python, NumPy, and Matplotlib that run directly in the browser",
  "author": "Your Name"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "creating-interactive-python-animations-with-pyodide",
    "text": "Creating Interactive Python Animations with Pyodide"
  }, {
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 2,
    "slug": "the-pyodidematplotlib-component",
    "text": "The PyodideMatplotlib Component"
  }, {
    "depth": 2,
    "slug": "animation-framework",
    "text": "Animation Framework"
  }, {
    "depth": 2,
    "slug": "example-simple-sine-wave-animation",
    "text": "Example: Simple Sine Wave Animation"
  }, {
    "depth": 2,
    "slug": "example-advanced-gradient-descent-animation",
    "text": "Example: Advanced Gradient Descent Animation"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 3,
    "slug": "component-implementation",
    "text": "Component Implementation"
  }, {
    "depth": 3,
    "slug": "technical-details",
    "text": "Technical Details"
  }, {
    "depth": 2,
    "slug": "technical-considerations",
    "text": "Technical Considerations"
  }, {
    "depth": 3,
    "slug": "canvas-rendering",
    "text": "Canvas Rendering"
  }, {
    "depth": 3,
    "slug": "multiple-components",
    "text": "Multiple Components"
  }, {
    "depth": 3,
    "slug": "memory-management",
    "text": "Memory Management"
  }, {
    "depth": 2,
    "slug": "troubleshooting",
    "text": "Troubleshooting"
  }, {
    "depth": 2,
    "slug": "future-enhancements",
    "text": "Future Enhancements"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
      id: "creating-interactive-python-animations-with-pyodide",
      children: "Creating Interactive Python Animations with Pyodide"
    }), "\n", createVNode(_components.p, {
      children: "This guide walks through creating interactive Python animations that run directly in your browser using Pyodide, NumPy, and Matplotlib. This is a simplified approach to create Manim-like animations without requiring server-side rendering."
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "Our animation framework uses:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pyodide"
        }), " - Run Python in the browser via WebAssembly"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "NumPy"
        }), " - For numerical computations"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Matplotlib"
        }), " - For rendering visualizations"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "JavaScript"
        }), " - To handle animation loops and user interaction"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-pyodidematplotlib-component",
      children: "The PyodideMatplotlib Component"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "PyodideMatplotlib"
      }), " component handles:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Loading the Pyodide runtime and required packages"
      }), "\n", createVNode(_components.li, {
        children: "Rendering your Python code with syntax highlighting"
      }), "\n", createVNode(_components.li, {
        children: "Providing animation controls (run, pause, reset)"
      }), "\n", createVNode(_components.li, {
        children: "Executing your code and displaying the animation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "To use it in your MDX files, import the component and provide your Python code:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " PyodideMatplotlib "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '../../components/PyodideMatplotlib.astro'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "PyodideMatplotlib"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " code"
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
            children: "`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "# Your Python animation code here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "animation-framework",
      children: "Animation Framework"
    }), "\n", createVNode(_components.p, {
      children: ["Your code should define an ", createVNode(_components.code, {
        children: "animation"
      }), " object with these methods:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "setup()"
        }), " - Runs once to initialize the animation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "update(frame)"
        }), " - Called on each animation frame"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "cleanup()"
        }), " - Called when animation ends (optional)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The component provides these helper functions:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "update_canvas()"
        }), " - Renders the current Matplotlib figure to the canvas"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "render_to_base64()"
        }), " - Converts a figure to base64 for display"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-simple-sine-wave-animation",
      children: "Example: Simple Sine Wave Animation"
    }), "\n", createVNode($$PyodideMatplotlib, {
      code: `
import numpy as np
import matplotlib.pyplot as plt

class SineWaveAnimation(AnimationHelper):
  def setup(self):
      # Configure plot once
      plt.figure(figsize=(10, 5))
      self.x = np.linspace(0, 10, 1000)
      self.max_frames = 120  # Animation length (frames)
      
  def update(self, frame):
      # Clear previous frame
      plt.clf()
      
      # Calculate phase based on frame
      phase = 2 * np.pi * frame / 60
      
      # Generate sine wave with moving phase
      y = np.sin(self.x + phase)
      
      # Plot and style
      plt.plot(self.x, y, 'b-', linewidth=2)
      plt.grid(True)
      plt.ylim(-1.5, 1.5)
      plt.title(f"Sine Wave Animation (Frame {frame})")
      plt.xlabel("x")
      plt.ylabel("sin(x)")
      
      # Return True to continue animation
      return frame < self.max_frames

# Assign to the animation object that the component expects
animation = SineWaveAnimation()
`
    }), "\n", createVNode(_components.h2, {
      id: "example-advanced-gradient-descent-animation",
      children: "Example: Advanced Gradient Descent Animation"
    }), "\n", createVNode($$PyodideMatplotlib, {
      code: `
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import cm

class GradientDescentAnimation(AnimationHelper):
  def setup(self):
      # Create a simple 2D function to minimize: f(x,y) = x^2 + 3y^2
      self.fig = plt.figure(figsize=(10, 6))
      
      # Create grid of x, y values
      x = np.linspace(-2, 2, 100)
      y = np.linspace(-2, 2, 100)
      self.X, self.Y = np.meshgrid(x, y)
      self.Z = self.X**2 + 3*self.Y**2  # Our function to minimize
      
      # Initial position and parameters
      self.pos = np.array([-1.8, 1.5])  # Starting point
      self.learning_rate = 0.1
      self.path = [self.pos.copy()]
      self.max_frames = 40
      
  def update(self, frame):
      plt.clf()
      
      # Calculate gradient: [2x, 6y]
      gradient = np.array([2*self.pos[0], 6*self.pos[1]])
      
      # Update position using gradient descent
      if frame > 0:
          self.pos = self.pos - self.learning_rate * gradient
          self.path.append(self.pos.copy())
      
      # Plot the function as a contour plot
      plt.contourf(self.X, self.Y, self.Z, 30, cmap=cm.viridis)
      plt.colorbar(label='f(x,y) = x\xB2 + 3y\xB2')
      
      # Plot the path taken
      path = np.array(self.path)
      plt.plot(path[:,0], path[:,1], 'w-', linewidth=2)
      plt.plot(path[:,0], path[:,1], 'o', color='orange', markersize=8)
      
      # Add current position with larger marker
      plt.plot(self.pos[0], self.pos[1], 'o', color='red', markersize=10)
      
      # Add labels and info
      plt.title(f'Gradient Descent Animation (Step {frame})')
      plt.xlabel('x')
      plt.ylabel('y')
      plt.grid(True)
      plt.text(0.02, 0.05, f'Position: ({self.pos[0]:.4f}, {self.pos[1]:.4f})', 
              transform=plt.gca().transAxes, color='white', fontsize=10)
      
      # Return True to continue animation
      return frame < self.max_frames

# Assign to the animation object that the component expects
animation = GradientDescentAnimation()
`
    }), "\n", createVNode(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", createVNode(_components.h3, {
      id: "component-implementation",
      children: "Component Implementation"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "PyodideMatplotlib.astro"
      }), " component handles the complexity of running Python in the browser:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Setup"
        }), ": Creates a unique ID for each component instance on the page"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Loading"
        }), ": Loads Pyodide runtime and required packages"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Animation Loop"
        }), ": Manages the JavaScript animation loop that calls your Python functions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rendering"
        }), ": Converts Matplotlib figures to images that can be displayed"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "technical-details",
      children: "Technical Details"
    }), "\n", createVNode(_components.p, {
      children: "The component:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Uses Pyodide to run Python code in WebAssembly"
      }), "\n", createVNode(_components.li, {
        children: "Creates a unique namespace for each animation component"
      }), "\n", createVNode(_components.li, {
        children: "Captures stdout/stderr for debugging"
      }), "\n", createVNode(_components.li, {
        children: ["Uses ", createVNode(_components.code, {
          children: "requestAnimationFrame"
        }), " for smooth animations"]
      }), "\n", createVNode(_components.li, {
        children: "Renders Matplotlib figures using the \u2018agg\u2019 backend and converts to base64 images"
      }), "\n", createVNode(_components.li, {
        children: "Provides play/pause/reset controls"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-considerations",
      children: "Technical Considerations"
    }), "\n", createVNode(_components.h3, {
      id: "canvas-rendering",
      children: "Canvas Rendering"
    }), "\n", createVNode(_components.p, {
      children: "We use the \u2018agg\u2019 backend for Matplotlib which renders to a PNG buffer:"
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
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " render_to_base64"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fig"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "None"
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
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fig "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "is"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " None"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        fig "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " plt.gcf()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    buf "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " io.BytesIO()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    fig.savefig(buf, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "format"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'png'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "dpi"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "bbox_inches"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'tight'"
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
            children: "    buf.seek("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
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
            children: "    img_str "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " base64.b64encode(buf.getvalue()).decode("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'utf-8'"
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
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " f"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"data:image/png;base64,'
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "img_str"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "multiple-components",
      children: "Multiple Components"
    }), "\n", createVNode(_components.p, {
      children: "Each component instance:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Has a unique ID (", createVNode(_components.code, {
          children: "pyodide_XXXXXXXXX"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: "Uses its own output element"
      }), "\n", createVNode(_components.li, {
        children: "Maintains separate animation state"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "memory-management",
      children: "Memory Management"
    }), "\n", createVNode(_components.p, {
      children: "For long-running animations, consider:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Limiting the number of frames"
      }), "\n", createVNode(_components.li, {
        children: ["Using ", createVNode(_components.code, {
          children: "plt.clf()"
        }), " to clear figures"]
      }), "\n", createVNode(_components.li, {
        children: ["Using the ", createVNode(_components.code, {
          children: "cleanup()"
        }), " method to free resources"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", createVNode(_components.p, {
      children: "Common issues:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Animation not showing"
        }), ": Check your Python code for errors in the output console"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance issues"
        }), ": Reduce the complexity of your plots or increase frame delay"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Memory leaks"
        }), ": Make sure to clear figures between frames with ", createVNode(_components.code, {
          children: "plt.clf()"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "future-enhancements",
      children: "Future Enhancements"
    }), "\n", createVNode(_components.p, {
      children: "Possible improvements:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Add support for interactive widgets (sliders, buttons)"
      }), "\n", createVNode(_components.li, {
        children: "Implement caching for faster restarts"
      }), "\n", createVNode(_components.li, {
        children: "Add a code editor for live modifications"
      }), "\n", createVNode(_components.li, {
        children: "Support multiple canvases per animation"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Now you can create interactive, educational animations that run directly in the browser without requiring a server or complex build process. This approach is ideal for educational content, interactive demos, or visualizing algorithms."
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
const url = "/browser-ide/blog/creating-pyodide-animations";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/creating-pyodide-animations.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/creating-pyodide-animations.mdx";

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
