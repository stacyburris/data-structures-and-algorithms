function quickSort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;
  let position = partition(arr, left, right);
  if (left < position - 1) {
    quickSort(arr, left, position - 1);
  }
  if (right > position) {
    quickSort(arr, position, right);
  }
  return arr;
}
function partition(arr, left, right) {
  let pivot = Math.floor((left + right) / 2);
  while (left < right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}
function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
let arr = [-1, 67, 3, -8, 12, 52, 6, 13, 20];
quickSort(arr);

// output
[-8, -1, 3, 6, 12, 20, 52, 13, 67];

