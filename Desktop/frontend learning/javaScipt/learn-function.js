//Normal fn
/*function sayHello() {
  console.log("say hi");
}
sayHello();*/

//fn with argument
function sum(a, b) {
  console.log("sum is", a + b);
}
sum(5, 10);

//fn with return value
function sum(a, b) {
  return a + b;
}
let sumValue = sum(5, 10);
console.log("sum is ", sum(5, 10));

//Function Expression
let sayHello = function () {
  console.log("say Hi");
};
sayHello();

//fun expression with argument
let add = function (a, b) {
  console.log("sum is", a + b);
};
add(5, 10);

//fn expression with return value
let addValue = function (a, b) {
  return a + b;
};
let addition = addValue(5, 10);
console.log("added value is ", addition);
