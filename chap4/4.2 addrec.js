function addRec(arr, index = 0) {
  if (index >= arr.length) {
    return 0;
  }

  return arr[index] + addRec(arr, index + 1);
}

var arr = [1, 3, 5, 7];
console.log(addRec(arr));
