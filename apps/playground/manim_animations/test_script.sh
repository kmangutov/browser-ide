#!/bin/bash

# This script tests if the Manim animations for the ML curriculum render correctly

# Set output directory
OUTPUT_DIR="./media"
mkdir -p $OUTPUT_DIR

# Test if Manim is installed
if ! command -v manim &> /dev/null; then
    echo "Manim is not installed. Please install it with:"
    echo "pip install manim"
    exit 1
fi

# Verify that the animation file exists
if [ ! -f "test_animations.py" ]; then
    echo "Error: test_animations.py not found"
    exit 1
fi

echo "==== Testing Manim Animations ===="
echo ""

# Render the Linear Regression animation at low quality (for quick testing)
echo "Rendering LinearRegressionFitting animation..."
manim -ql test_animations.py LinearRegressionFitting

# Render the Overfitting animation at low quality
echo "Rendering OverfittingAnimation animation..."
manim -ql test_animations.py OverfittingAnimation

# Check if the renders completed successfully
if [ -f "$OUTPUT_DIR/videos/test_animations/480p15/LinearRegressionFitting.mp4" ]; then
    echo "✅ LinearRegressionFitting animation rendered successfully!"
else
    echo "❌ LinearRegressionFitting animation failed to render"
fi

if [ -f "$OUTPUT_DIR/videos/test_animations/480p15/OverfittingAnimation.mp4" ]; then
    echo "✅ OverfittingAnimation animation rendered successfully!"
else
    echo "❌ OverfittingAnimation animation failed to render"
fi

echo ""
echo "==== Test Complete ===="
echo "If you want to render at higher quality for production, use:"
echo "manim -qh test_animations.py LinearRegressionFitting"
echo "manim -qh test_animations.py OverfittingAnimation"
echo ""
echo "To render as GIFs for web embedding:"
echo "manim -qm --format=gif test_animations.py LinearRegressionFitting"
echo "manim -qm --format=gif test_animations.py OverfittingAnimation" 