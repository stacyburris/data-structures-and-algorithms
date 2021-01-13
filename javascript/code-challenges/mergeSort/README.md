# Code Challenge: Class 27 - Merge Sort

## Challenge Description

+ Merge sort algorithms is a concept of divide and conquer to sort a list of elements. Meaning, it will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.

## Approach & Efficiency

+ Time: O(nlogn)
+ Space: O(n)

## Solution

```
'use strict';

function _mergeSort(arr) {
  let n = arr.length;
  if (arr.length < 2) return arr;
  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(
      _mergeSort(left),
      _mergeSort(right));
  }
}
function merge(left, right) {
  let resultArray = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      resultArray.push(left[i]);
      i++;
    } else {
      resultArray.push(right[j]);
      j++;
    }
  }
  return resultArray.concat(left.slice(i)).concat(right.slice(j));
}
module.exports = { _mergeSort, merge };
```