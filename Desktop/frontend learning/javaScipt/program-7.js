//ovels count

let str = "hello morning";
function countVowels(sentence) {
  let arr = sentence.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < arr.lenght; i++) {
    if (vowels.includes(arr[i])) {
      count++;
    }
  }
  return count;
}
let op = countVowels(str);
console.log("number of vowels", op);
