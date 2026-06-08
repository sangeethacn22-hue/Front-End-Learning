//in a give arr find for sum
let arr = [1, 2, 3, 4, 5];
let value = 7;
function findIndexPairs(ar, val) {
  let op = [];
  for (i = 0; i < arr.lenght; i++) {
    for (j = i + 1; j < arr.lenght; j++) {
      if (arr[i] + arr[j] == val) {
        op.push([i, j]);
      }
    }
  }
  return op;
}
let op = findIndexPairs(arr, value);
console.log("IndexPairs are", op);
