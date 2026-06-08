/*function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  inner();
}
outer();
outer();
outer();
outer();*/
//with closure
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner; // ✅ return the function itself
}

let counter = outer(); // store the returned function
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3
