const sayHello = () => {
  console.log("arrow fn check");
};
sayHello();

/*const sum = (a, b) => {
  return a + b;
};*/

const sum = (a, b) => a + b;
let res = sum(5, 10);
console.log(res);
