```
Pseudo Code

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

Sample Arrays
In your blog article, visually show the output of processing this input array:

[8,4,23,42,16,15]
```

[merge-sort.js](javascript/code-challenges/mergeSort/merge-sort.js)

+ ![mergeSort1](assets/mergeSort1.png)

+ ![mergeSort2](assets/mergeSort2.png)

+ ![mergeSort3](assets/mergeSort3.png)

+ ![mergeSort4](assets/mergeSort4.png)

+ ![mergeSort5](assets/mergeSort5.png)

+ ![mergeSort6](assets/mergeSort6.png)

+ ![mergeSort7](assets/mergeSort7.png)

+ ![mergeSort8](assets/mergeSort8.png)
