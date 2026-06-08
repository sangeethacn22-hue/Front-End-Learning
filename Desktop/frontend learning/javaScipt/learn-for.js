//for-of-loop:check the iteration of values

let arr = [1, 2, 3, 4];
for (let value of arr) {
  console.log(value);
}

let str = "banglore";
for (let char of str) {
  console.log(char);
}

//obj : for in loop:when we want to iterate through object

let obj = {
  name: "sang",
  city: "banglore",
};
for (let key in obj) {
  console.log(key + "  " + obj[key]);
}

