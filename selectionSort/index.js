function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([0, 5, 2, 1, 3, 4]));
