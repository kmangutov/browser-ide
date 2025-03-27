#!/usr/bin/env python3
"""
Main script that demonstrates the math functions.
This can be run directly from the server or compiled to WebAssembly.
"""

from math_functions import add

def main():
    """
    Main function to demonstrate the math functions.
    """
    print("Hello, World!")
    result = add(5, 7)
    print(f"5 + 7 = {result}")
    return result

if __name__ == "__main__":
    main()
