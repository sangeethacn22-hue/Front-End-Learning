//remove duplicates
let arr = [1, 2, 2, 3, 4, 5, 5, 5];

function printUniq(ar) {
  let removedDuplicates = [];
  for (let i = 0; i < ar.length; i++) {
    if (removedDuplicates.indexOf(ar[i]) == -1) {
      removedDuplicates.push(ar[i]);
    }
  }
  return removedDuplicates;
}
let uniqvalue = printUniq(arr);
console.log(uniqvalue);
