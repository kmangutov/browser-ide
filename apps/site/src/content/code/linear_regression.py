import numpy as np
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