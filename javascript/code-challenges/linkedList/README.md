# Singly Linked List

## Author: Stacy Burris

## Challenge

+ Task is to create a class that will use linked lists. It should allow a new node to be created, a list to be searched for the matching values and also output a string of the entire list created.

## Approach

+ This creates a class for a single node and a class for a linked list

## API & Efficiency

+ `insert()` - Inserts a new node at the head of the list. - O(1)

+ `includes()` - Searches the list and then returns a boolean of true if the given value is present or false if not. - O(n)

+ `toString()` - This method returns all values of node class in a string order. - O(n)

### Contributors & Collaborators

+ TA Kristian & Simon

///////////////////////////////////////////////////////////
# Code Challenge: Class 06

### Contributors & Collaborators

+ Sara Strasner and Tina Myers

+ ![LL Insert](assets/insertion.png)

```
.append(value)
.insertBefore(value, newVal)
.insertAfter(value, newVal)
```

# Code Challenge: Class 07

+ k-th value from the end of a linked list

### Contributors & Collaborators

+ Simon Panek and Ricardo Barcenas

### Challenge

+ Given a position value return a value of the node at the position given as an argument.

## API & Efficiency

`ll.kthFromEnd(k)` - Starting at the head iterate though the linked list and unshift the values to return a new array with the index reversed. O(n)

+ ![kthFromEnd](assets/k-th-valuefromtheend.png)