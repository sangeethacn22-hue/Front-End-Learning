//check for palindrome
//please write javascript fn
let text = "sang";
function isPalindrome(str) {
  let rev = str.split(" ").reverse().join(" ");
  console.log("rev value", rev);

  return rev == text;
}
console.log("output", isPalindrome(text));
