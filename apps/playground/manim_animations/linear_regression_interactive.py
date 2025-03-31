import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.metrics import mean_squared_error

# For interactive widgets in Pyodide
from js import document, Math
from pyodide.ffi import create_proxy

# Generate synthetic data
def generate_data(n_samples=20, noise=0.5, seed=42):
    np.random.seed(seed)
    X = np.linspace(0, 10, n_samples).reshape(-1, 1)
    y_true = 1 + 0.9 * X.ravel()
    y = y_true + np.random.normal(0, noise, size=n_samples)
    return X, y, y_true

# Split data into train and test sets
def train_test_split(X, y, test_size=0.3, random_state=42):
    np.random.seed(random_state)
    indices = np.random.permutation(len(X))
    test_count = int(len(X) * test_size)
    test_indices = indices[:test_count]
    train_indices = indices[test_count:]
    return X[train_indices], X[test_indices], y[train_indices], y[test_indices]

# Plot the data and model predictions
def plot_regression(X_train, X_test, y_train, y_test, degree, ax=None):
    if ax is None:
        fig, ax = plt.subplots(figsize=(10, 6))
    
    # Create and train the model
    model = make_pipeline(
        PolynomialFeatures(degree=degree),
        LinearRegression()
    )
    model.fit(X_train, y_train)
    
    # Make predictions
    X_plot = np.linspace(0, 10, 100).reshape(-1, 1)
    y_pred_plot = model.predict(X_plot)
    y_pred_train = model.predict(X_train)
    y_pred_test = model.predict(X_test)
    
    # Calculate MSE
    train_mse = mean_squared_error(y_train, y_pred_train)
    test_mse = mean_squared_error(y_test, y_pred_test)
    
    # Plot data points
    ax.scatter(X_train, y_train, color='blue', label='Training data')
    ax.scatter(X_test, y_test, color='red', label='Test data')
    
    # Plot predictions
    ax.plot(X_plot, y_pred_plot, color='green', label=f'Polynomial (degree={degree})')
    
    # Add error lines for test data
    for i in range(len(X_test)):
        ax.plot([X_test[i], X_test[i]], [y_test[i], y_pred_test[i]], 'k--', alpha=0.3)
    
    # Set labels and title
    ax.set_xlabel('X')
    ax.set_ylabel('y')
    ax.set_title(f'Polynomial Regression (degree={degree})\nTrain MSE: {train_mse:.4f}, Test MSE: {test_mse:.4f}')
    ax.legend()
    ax.grid(True, alpha=0.3)
    
    return train_mse, test_mse

# Initialize data
X, y, y_true = generate_data(n_samples=20, noise=0.8)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# For Pyodide interactive use
def update_plot(degree_value):
    degree = int(degree_value)
    plt.clf()
    fig, ax = plt.subplots(figsize=(10, 6))
    train_mse, test_mse = plot_regression(X_train, X_test, y_train, y_test, degree, ax)
    
    # Update MSE display
    document.getElementById('train-mse').textContent = f"{train_mse:.4f}"
    document.getElementById('test-mse').textContent = f"{test_mse:.4f}"
    
    # Show the plot
    plt.tight_layout()
    display(plt.gcf())
    
    # Clear previous plot to avoid memory issues
    plt.close()

# Create a proxy for the update function to be called from JavaScript
update_plot_proxy = create_proxy(update_plot)

# Initial plot (will be called when loaded in Pyodide)
def show_initial_plot():
    update_plot(1)  # Start with degree 1 (linear)

# For standalone testing (not in Pyodide)
if __name__ == "__main__":
    plt.figure(figsize=(12, 8))
    
    # Compare different polynomial degrees
    plt.subplot(2, 2, 1)
    plot_regression(X_train, X_test, y_train, y_test, degree=1)
    
    plt.subplot(2, 2, 2)
    plot_regression(X_train, X_test, y_train, y_test, degree=3)
    
    plt.subplot(2, 2, 3)
    plot_regression(X_train, X_test, y_train, y_test, degree=5)
    
    plt.subplot(2, 2, 4)
    plot_regression(X_train, X_test, y_train, y_test, degree=9)
    
    plt.tight_layout()
    plt.show() 