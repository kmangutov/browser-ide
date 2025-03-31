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
  "title": "Interactive Matplotlib Animations: A Manim-Inspired Approach",
  "description": "Create and run interactive animations for machine learning concepts directly in your browser",
  "date": "2023-04-12T00:00:00.000Z"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "interactive-matplotlib-animations-a-manim-inspired-approach",
    "text": "Interactive Matplotlib Animations: A Manim-Inspired Approach"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How it works"
  }, {
    "depth": 2,
    "slug": "example-1-linear-regression-animation",
    "text": "Example 1: Linear Regression Animation"
  }, {
    "depth": 2,
    "slug": "example-2-decision-boundaries-animation",
    "text": "Example 2: Decision Boundaries Animation"
  }, {
    "depth": 2,
    "slug": "creating-your-own-animations",
    "text": "Creating Your Own Animations"
  }, {
    "depth": 3,
    "slug": "animation-template",
    "text": "Animation Template"
  }, {
    "depth": 2,
    "slug": "benefits-over-traditional-manim",
    "text": "Benefits Over Traditional Manim"
  }, {
    "depth": 2,
    "slug": "limitations",
    "text": "Limitations"
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
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "interactive-matplotlib-animations-a-manim-inspired-approach",
      children: "Interactive Matplotlib Animations: A Manim-Inspired Approach"
    }), "\n", createVNode(_components.p, {
      children: ["While ", createVNode(_components.a, {
        href: "https://www.manim.community/",
        children: "Manim"
      }), " is a powerful animation engine used to create precise mathematical animations, it requires Python installation with numerous dependencies. But what if you could create similar animations directly in your browser?"]
    }), "\n", createVNode(_components.p, {
      children: "This page demonstrates how to use Python\u2019s Matplotlib in WebAssembly (via Pyodide) to create animated visualizations similar to basic Manim animations, without any installation."
    }), "\n", createVNode(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "We use Pyodide to run Python code directly in your browser"
      }), "\n", createVNode(_components.li, {
        children: "We leverage Matplotlib\u2019s animation capabilities with HTML5 canvas"
      }), "\n", createVNode(_components.li, {
        children: "A custom animation framework manages the frames and timing"
      }), "\n", createVNode(_components.li, {
        children: "The result: interactive animations rendered directly in your browser"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-1-linear-regression-animation",
      children: "Example 1: Linear Regression Animation"
    }), "\n", createVNode(_components.p, {
      children: "This animation shows data points appearing on a plane, followed by a regression line that fits them. The framework is structured to separate initialization, animation, and cleanup phases:"
    }), "\n", createVNode($$PyodideMatplotlib, {
      code: `import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# Create a custom animation class that inherits from the base AnimationHelper
class LinearRegressionAnimation(AnimationHelper):
  def setup(self):
      # Set up the data and figure once
      self.fig, self.ax = plt.subplots(figsize=(8, 5))
      self.ax.set_xlim(0, 10)
      self.ax.set_ylim(0, 10)
      self.ax.set_xlabel('X')
      self.ax.set_ylabel('Y')
      self.ax.set_title('Linear Regression Animation')
      
      # Generate data points with noise
      np.random.seed(42)
      self.x = np.array([1, 2, 3, 4, 5, 6, 7, 8])
      self.y = 1 + 0.9 * self.x + np.random.normal(0, 0.5, len(self.x))
      
      # Initialize empty collections
      self.points = []
      self.line = None
      self.error_lines = []
      
      # Animation parameters
      self.max_frames = 120
      self.points_phase_end = 40
      self.line_phase_end = 60
      self.error_phase_end = 100
      
      # Initialize figure
      plt.tight_layout()
      update_canvas(self.fig)
  
  def update(self, frame):
      # Phase 1: Add points one by one
      if frame < self.points_phase_end:
          point_idx = min(int(frame * len(self.x) / self.points_phase_end), len(self.x) - 1)
          
          # Only add a new point if needed
          if len(self.points) <= point_idx:
              point, = self.ax.plot(self.x[point_idx], self.y[point_idx], 'o', color='blue', markersize=8)
              self.points.append(point)
      
      # Phase 2: Draw regression line
      elif frame < self.line_phase_end:
          progress = (frame - self.points_phase_end) / (self.line_phase_end - self.points_phase_end)
          
          # Calculate linear regression coefficients
          m, b = np.polyfit(self.x, self.y, 1)
          
          # Create or update the line
          x_line = np.array([0, 10])
          y_line = b + m * x_line * progress  # Animate line's slope
          
          if self.line is None:
              self.line, = self.ax.plot(x_line, y_line, '-', color='red', linewidth=2)
          else:
              self.line.set_ydata(y_line)
              
          # Add a label with the equation
          if frame == self.line_phase_end - 1:
              self.ax.text(1, 9, f'y = {b:.2f} + {m:.2f}x', fontsize=12, 
                           bbox=dict(facecolor='white', alpha=0.7))
              
      # Phase 3: Show errors
      elif frame < self.error_phase_end:
          # Only draw error lines once at the start of this phase
          if not self.error_lines:
              m, b = np.polyfit(self.x, self.y, 1)
              
              for i in range(len(self.x)):
                  pred_y = b + m * self.x[i]
                  line = self.ax.plot([self.x[i], self.x[i]], [self.y[i], pred_y], 
                                      '--', color='green', alpha=0.7)[0]
                  self.error_lines.append(line)
              
              self.ax.text(6, 2, 'Errors', color='green', fontsize=12,
                           bbox=dict(facecolor='white', alpha=0.7))
      
      # Final phase: Complete animation
      else:
          if frame >= self.max_frames - 1:
              return False  # End animation
      
      return True  # Continue animation

# Create the animation instance
animation = LinearRegressionAnimation()
`
    }), "\n", createVNode(_components.h2, {
      id: "example-2-decision-boundaries-animation",
      children: "Example 2: Decision Boundaries Animation"
    }), "\n", createVNode(_components.p, {
      children: "This animation shows a decision tree splitting a feature space to classify points, illustrating how decision boundaries are formed:"
    }), "\n", createVNode($$PyodideMatplotlib, {
      code: `import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.collections import PatchCollection

class DecisionTreeAnimation(AnimationHelper):
  def setup(self):
      # Create figure and axis
      self.fig, self.ax = plt.subplots(figsize=(8, 5))
      self.ax.set_xlim(0, 10)
      self.ax.set_ylim(0, 10)
      self.ax.set_xlabel('Feature 1')
      self.ax.set_ylabel('Feature 2')
      self.ax.set_title('Decision Tree Boundary Animation')
      
      # Generate random data points for two classes
      np.random.seed(42)
      
      # Class 1 (clustered in top-right)
      self.class1_x = 5 + 2 * np.random.randn(15)
      self.class1_y = 5 + 2 * np.random.randn(15)
      
      # Class 2 (clustered in bottom-left)
      self.class2_x = 3 + 1.5 * np.random.randn(15)
      self.class2_y = 3 + 1.5 * np.random.randn(15)
      
      # Animation phases
      self.max_frames = 120
      self.points_phase_end = 30
      self.first_split_phase_end = 60
      self.second_split_phase_end = 90
      
      # Initialize collections
      self.class1_points = []
      self.class2_points = []
      self.split_lines = []
      self.regions = []
      
      # Initialize figure
      plt.tight_layout()
      update_canvas(self.fig)
  
  def update(self, frame):
      # Phase 1: Draw points
      if frame < self.points_phase_end:
          # Calculate how many points to show
          n_class1 = min(int(frame * len(self.class1_x) / self.points_phase_end), len(self.class1_x))
          n_class2 = min(int(frame * len(self.class2_x) / self.points_phase_end), len(self.class2_x))
          
          # Only add new points if needed
          while len(self.class1_points) < n_class1:
              idx = len(self.class1_points)
              point, = self.ax.plot(self.class1_x[idx], self.class1_y[idx], 'o', color='blue', markersize=8)
              self.class1_points.append(point)
              
          while len(self.class2_points) < n_class2:
              idx = len(self.class2_points)
              point, = self.ax.plot(self.class2_x[idx], self.class2_y[idx], 'o', color='red', markersize=8)
              self.class2_points.append(point)
              
          if frame == self.points_phase_end - 1:
              self.ax.text(7, 7, 'Class 1', color='blue', fontsize=12,
                           bbox=dict(facecolor='white', alpha=0.7))
              self.ax.text(3, 3, 'Class 2', color='red', fontsize=12,
                           bbox=dict(facecolor='white', alpha=0.7))
      
      # Phase 2: First split (vertical line)
      elif frame < self.first_split_phase_end:
          # Draw the first decision boundary (x = 4.5)
          if not self.split_lines:
              line = self.ax.axvline(x=4.5, color='black', linestyle='--', linewidth=2)
              self.split_lines.append(line)
              
              # Text annotation
              self.ax.text(4.7, 9, 'First Split: x < 4.5', fontsize=10,
                           bbox=dict(facecolor='white', alpha=0.7))
              
              # Add semi-transparent regions
              rect1 = Rectangle((0, 0), 4.5, 10, alpha=0.2, color='red')
              rect2 = Rectangle((4.5, 0), 5.5, 10, alpha=0.2, color='blue')
              self.ax.add_patch(rect1)
              self.ax.add_patch(rect2)
              self.regions.extend([rect1, rect2])
      
      # Phase 3: Second split (horizontal line in left region)
      elif frame < self.second_split_phase_end:
          # Draw the second decision boundary (y = 5 but only for x < 4.5)
          if len(self.split_lines) == 1:
              line = self.ax.plot([0, 4.5], [5, 5], '--', color='black', linewidth=2)[0]
              self.split_lines.append(line)
              
              # Text annotation
              self.ax.text(1, 5.2, 'Second Split: y < 5', fontsize=10,
                           bbox=dict(facecolor='white', alpha=0.7))
              
              # Update regions
              for patch in self.regions:
                  patch.remove()
              self.regions = []
              
              # Create new regions with decision boundaries
              rect1 = Rectangle((0, 0), 4.5, 5, alpha=0.2, color='red')
              rect2 = Rectangle((0, 5), 4.5, 5, alpha=0.2, color='green')
              rect3 = Rectangle((4.5, 0), 5.5, 10, alpha=0.2, color='blue')
              
              self.ax.add_patch(rect1)
              self.ax.add_patch(rect2)
              self.ax.add_patch(rect3)
              self.regions.extend([rect1, rect2, rect3])
      
      # Final phase
      else:
          if frame == self.second_split_phase_end:
              # Final text with accuracy
              self.ax.text(1, 1, 'Class 2: 87% purity', color='white', fontsize=10,
                          bbox=dict(facecolor='red', alpha=0.7))
              self.ax.text(1, 8, 'Mixed region', color='black', fontsize=10,
                          bbox=dict(facecolor='green', alpha=0.7))
              self.ax.text(8, 5, 'Class 1: 93% purity', color='white', fontsize=10,
                          bbox=dict(facecolor='blue', alpha=0.7))
          
          if frame >= self.max_frames - 1:
              return False  # End animation
      
      return True  # Continue animation

# Create the animation instance
animation = DecisionTreeAnimation()
`
    }), "\n", createVNode(_components.h2, {
      id: "creating-your-own-animations",
      children: "Creating Your Own Animations"
    }), "\n", createVNode(_components.p, {
      children: "You can create your own animations by following this pattern:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Define a class that inherits from ", createVNode(_components.code, {
          children: "AnimationHelper"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Implement the ", createVNode(_components.code, {
          children: "setup()"
        }), " method to initialize your visualization"]
      }), "\n", createVNode(_components.li, {
        children: ["Implement the ", createVNode(_components.code, {
          children: "update(frame)"
        }), " method to handle animation frames"]
      }), "\n", createVNode(_components.li, {
        children: ["Return ", createVNode(_components.code, {
          children: "True"
        }), " to continue the animation or ", createVNode(_components.code, {
          children: "False"
        }), " to end it"]
      }), "\n", createVNode(_components.li, {
        children: ["Set your class instance to the ", createVNode(_components.code, {
          children: "animation"
        }), " variable"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "animation-template",
      children: "Animation Template"
    }), "\n", createVNode($$PyodideMatplotlib, {
      code: `import numpy as np
import matplotlib.pyplot as plt

class MyCustomAnimation(AnimationHelper):
  def setup(self):
      # Create figure and axis
      self.fig, self.ax = plt.subplots(figsize=(8, 5))
      self.ax.set_xlim(0, 10)
      self.ax.set_ylim(0, 10)
      self.ax.set_xlabel('X')
      self.ax.set_ylabel('Y')
      self.ax.set_title('My Custom Animation')
      
      # Initialize data structures
      self.data = np.random.rand(10)
      self.line, = self.ax.plot([], [], 'o-', color='blue', linewidth=2)
      
      # Animation parameters
      self.max_frames = 100
      
      # Initialize figure
      plt.tight_layout()
      update_canvas(self.fig)
  
  def update(self, frame):
      # Calculate progress as percentage of animation completed
      progress = frame / self.max_frames
      
      # Update visualization based on frame
      x = np.linspace(0, 10, 10)
      y = 5 + 3 * np.sin(x + progress * 4 * np.pi)
      
      # Update line data
      self.line.set_data(x, y)
      
      # End animation when we reach max_frames
      if frame >= self.max_frames - 1:
          return False
          
      return True

# Create the animation instance
animation = MyCustomAnimation()
`
    }), "\n", createVNode(_components.h2, {
      id: "benefits-over-traditional-manim",
      children: "Benefits Over Traditional Manim"
    }), "\n", createVNode(_components.p, {
      children: "While this approach doesn\u2019t replace all Manim functionality, it offers several advantages:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Immediate feedback"
        }), ": Animations run directly in your browser"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "No installation"
        }), ": Everything runs in the browser via WebAssembly"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Interactive editing"
        }), ": Modify code and instantly see results"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Shareable"
        }), ": Works on any modern browser without dependencies"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Integration with notebooks"
        }), ": Can be combined with other browser-based tools"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", createVNode(_components.p, {
      children: "This approach has some limitations compared to full Manim:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Less precise control over animation timing and tweening"
      }), "\n", createVNode(_components.li, {
        children: "No 3D support (limited to what Matplotlib can render)"
      }), "\n", createVNode(_components.li, {
        children: "Fewer specialized mathematical animations"
      }), "\n", createVNode(_components.li, {
        children: "Performance depends on the browser and device"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", createVNode(_components.p, {
      children: "These simple examples demonstrate the concept, but you can create much more sophisticated animations:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Neural network activation visualizations"
      }), "\n", createVNode(_components.li, {
        children: "Gradient descent optimization"
      }), "\n", createVNode(_components.li, {
        children: "Decision boundary evolution in SVMs"
      }), "\n", createVNode(_components.li, {
        children: "PCA dimension reduction"
      }), "\n", createVNode(_components.li, {
        children: "Ensemble model voting"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Try modifying the examples above or create your own animations to illustrate ML concepts!"
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
const url = "/browser-ide/blog/interactive-matplotlib-animations";
const file = "/Users/kmangutov/idetest/apps/site/src/pages/blog/interactive-matplotlib-animations.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kmangutov/idetest/apps/site/src/pages/blog/interactive-matplotlib-animations.mdx";

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
