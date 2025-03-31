import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# Template for creating your own animation class
class CustomAnimation(AnimationHelper):
    def setup(self):
        """
        This method is called once to set up the animation.
        Initialize your figure, axes, data, and other attributes here.
        """
        # Create a figure and axis
        self.fig, self.ax = plt.subplots(figsize=(8, 5))
        self.ax.set_xlim(0, 10)
        self.ax.set_ylim(0, 10)
        self.ax.set_xlabel('X-axis')
        self.ax.set_ylabel('Y-axis')
        self.ax.set_title('My Custom Animation')
        
        # Initialize your data structures
        np.random.seed(42)  # For reproducibility
        self.data_x = np.random.rand(10) * 10
        self.data_y = np.random.rand(10) * 10
        
        # Animation parameters
        self.max_frames = 60  # Total number of frames
        
        # Initialize any other variables or collections you need
        self.points = []
        self.text = None
        
        # Call this at the end to update the initial canvas state
        plt.tight_layout()
        update_canvas(self.fig)
    
    def update(self, frame):
        """
        This method is called for each frame of the animation.
        Update your visualization based on the current frame number.
        
        Args:
            frame: The current frame number (0-based index)
            
        Returns:
            bool: Return True to continue the animation, False to stop
        """
        # Example: Add points one by one
        if frame < len(self.data_x):
            point, = self.ax.plot(
                self.data_x[frame], 
                self.data_y[frame], 
                'o', 
                color='blue', 
                markersize=8
            )
            self.points.append(point)
            
            # Add some text showing the current point
            if self.text:
                self.text.remove()
            self.text = self.ax.text(
                self.data_x[frame], 
                self.data_y[frame] + 0.5, 
                f'Point {frame+1}', 
                fontsize=10
            )
        
        # Example: Change something else in a later phase
        elif frame < self.max_frames - 10:
            # Draw a line connecting all points
            if frame == len(self.data_x):
                self.ax.plot(self.data_x, self.data_y, '-', color='red', alpha=0.5)
                self.ax.text(5, 9, 'All points connected!', fontsize=12,
                           bbox=dict(facecolor='white', alpha=0.7))
        
        # End animation when reaching max frames
        if frame >= self.max_frames - 1:
            return False
        
        return True

# Create the animation instance
# Uncomment the line below to use your custom animation
# animation = CustomAnimation() 