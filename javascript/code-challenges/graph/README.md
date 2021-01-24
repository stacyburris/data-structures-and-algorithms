# Graphs

## Challenge

+ Implementing your own Graph. The graph should be represented as an adjacency list

## Author: Stacy Burris

### Contributors:

+ Simon Panek & Ricardo Barcenas

## Approach & Efficiency

+ **Include following methods:**
+ AddNode() - BigO Time & Space = O(1)
  + Adds a new node to the graph
  + Takes in the value of that node
  + Returns the added node
+ AddEdge() - BigO Time & Space = O(1)
  + Adds a new edge between two nodes in the graph
  + Include the ability to have a “weight”
  + Takes in the two nodes to be connected by the edge
    + Both nodes should already be in the Graph
+ GetNodes() - BigO Time & Space = O(n^2)
  + Returns all of the nodes in the graph as a collection (set, list, or similar)
+ GetNeighbors() - BigO Time & Space = O(n^2)
  + Returns a collection of edges connected to the given node
  + Takes in a given node 
  + Include the weight of the connection in the returned collection
+ Size() - BigO Time & Space = O(n^2)
  + Returns the total number of nodes in the graph



