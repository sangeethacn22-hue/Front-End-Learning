//check two values or strings anagram

function isAnagram(str1, str2) {
  let s1 = str1.split(" ").sort().join(" ");
  let s2 = str2.split(" ").sort().join(" ");
  if (s1 == s2) {
    console.log("String are anagram");
  } else {
    console.log("Strings are not anagram");
  }
}
let op = isAnagram("listen", "silent");
console.log("s", op);
