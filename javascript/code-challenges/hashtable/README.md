# Hashtables

## Challenge

+ This challenge uses a hash table which is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will add, get, contain.

## Approach & Efficiency

+ **BigO**
+ Time - O(1)
+ Space - O(n)

## API

+ add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
+ get: takes in the key and returns the value from the table.
+ contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
+ hash: takes in an arbitrary key and returns an index in the collection.
