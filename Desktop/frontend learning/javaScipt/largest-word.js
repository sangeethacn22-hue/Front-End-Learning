let str = "Hello i am attending class";
function largeWord(sentence) {
  let arr = sentence.split("  ");
  let large = "";
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i].lenght > large.length) {
      large = arr[i];
    }
  }
  return large.length;
}
let value = largeWord(str);
console.log(value);

let city = "Banglore              ";
console.log("city", city.trim().length);
