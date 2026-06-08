let product = "Five star"; // global variable //global scope

function outer() {
  let p1 = "Sangeetha"; //local scope
  function inner() {
    let p2 = "sang"; // nested scope
    let message;
    if (true) {
      let message = "add complete"; //block scope
      console.log("product name", product);
      console.log("singer 1", p1);
      console.log("singer 2", p2);
    }
    console.log("message:", message);
  }
  inner();
  //console.log("singer 2 new", p2);
  /* console.log("Product name", product);
  console.log("singer 1", p1);*/
}
outer();
console.log("Product name", product);
//console.log("singer 1 outside", p1);
