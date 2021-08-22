function insertionSort(arr) {
  // start a loop at the 2nd element of the array, this will be the unsorted portion
  for (let i = 1; i < arr.length; i++) {
    // the last element of our sorted portion
    let j = i - 1;
    // choose the first element of our unsorted portion
    let current = arr[i];
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([2, 4, 5, 1, 3, 7]));
