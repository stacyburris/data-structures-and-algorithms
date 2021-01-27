# DepthFirst

## Challenge

+ Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

## Author: Stacy Burris

### Collaborators

+ Tina Myers, Sara Strasner

### Approach & Efficiency

**BigO:**
time: O(v + e) vertex and edges touch every single node so
space: O(d) - max depth of tree

Input: Adjacency list as a graph
output: [A, B, C, G, D, E, H, F]

### UML

+ ![depthFirst](CC-38.png)