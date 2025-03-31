import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from sklearn.tree import DecisionTreeClassifier

# Custom animation class for decision tree boundaries
class DecisionTreeAnimation(AnimationHelper):
    def setup(self):
        # Set up the figure and axes
        self.fig, self.ax = plt.subplots(figsize=(8, 5))
        self.ax.set_xlim(0, 10)
        self.ax.set_ylim(0, 10)
        self.ax.set_xlabel('Feature 1')
        self.ax.set_ylabel('Feature 2')
        self.ax.set_title('Decision Tree Boundary Animation')
        
        # Generate random data for two classes
        np.random.seed(42)
        self.n_points = 50
        
        # Class 0: Cluster around (3, 3)
        self.x0 = 3 + np.random.randn(self.n_points, 2)
        
        # Class 1: Cluster around (7, 7)
        self.x1 = 7 + np.random.randn(self.n_points, 2)
        
        # Combine data and create labels
        self.X = np.vstack([self.x0, self.x1])
        self.y = np.hstack([np.zeros(self.n_points), np.ones(self.n_points)])
        
        # Animation parameters
        self.max_frames = 80
        self.points_phase_end = 30
        self.decision_boundary_start = 35
        self.max_depth = 5
        
        # Initialize empty collections
        self.scatter0 = None
        self.scatter1 = None
        self.boundary = None
        self.tree_text = None
        
        plt.tight_layout()
        update_canvas(self.fig)
    
    def update(self, frame):
        # Phase 1: Plot points
        if frame < self.points_phase_end:
            # Determine how many points to show based on current frame
            points_to_show = int((frame / self.points_phase_end) * self.n_points)
            
            # Only draw points when there's something new to draw
            if self.scatter0 is None or self.scatter1 is None:
                # Draw class 0 points
                self.scatter0 = self.ax.scatter(
                    self.x0[:points_to_show, 0], 
                    self.x0[:points_to_show, 1],
                    color='blue', s=50, alpha=0.7, label='Class 0'
                )
                
                # Draw class 1 points
                self.scatter1 = self.ax.scatter(
                    self.x1[:points_to_show, 0], 
                    self.x1[:points_to_show, 1],
                    color='red', s=50, alpha=0.7, label='Class 1'
                )
                
                # Add legend
                self.ax.legend()
            else:
                # Update existing scatter plots with more points
                self.scatter0.set_offsets(self.x0[:points_to_show])
                self.scatter1.set_offsets(self.x1[:points_to_show])
        
        # Phase 2: Draw decision boundary
        elif frame >= self.decision_boundary_start:
            # Only compute and draw boundary once
            if self.boundary is None:
                # Calculate current tree depth based on remaining frames
                current_depth = min(
                    1 + int((frame - self.decision_boundary_start) / 10), 
                    self.max_depth
                )
                
                # Train decision tree with current max_depth
                tree = DecisionTreeClassifier(max_depth=current_depth)
                tree.fit(self.X, self.y)
                
                # Create a mesh grid to visualize decision boundary
                x_min, x_max = 0, 10
                y_min, y_max = 0, 10
                h = 0.1  # Step size
                xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                                     np.arange(y_min, y_max, h))
                
                # Predict on the mesh grid
                Z = tree.predict(np.c_[xx.ravel(), yy.ravel()])
                Z = Z.reshape(xx.shape)
                
                # Plot decision boundary
                self.boundary = self.ax.contourf(xx, yy, Z, alpha=0.3, 
                                           cmap=plt.cm.coolwarm)
                
                # Update depth information
                if self.tree_text:
                    self.tree_text.remove()
                
                self.tree_text = self.ax.text(
                    0.5, 0.95, f'Tree Depth: {current_depth}',
                    horizontalalignment='center',
                    verticalalignment='top',
                    transform=self.ax.transAxes,
                    bbox=dict(facecolor='white', alpha=0.7)
                )
        
        # Check if animation should end
        if frame >= self.max_frames - 1:
            return False
        
        return True

# Create the animation instance
animation = DecisionTreeAnimation() 