let arr = [10, 20, 30, 40, 50];
//slice method
let value = arr.slice(1, 3); //start at 0 and end with 3 but not consider 3
console.log(value);
let val = arr.slice(1);
console.log(val); //after index 1 it will print all trhe values
let va = arr.slice(-2);
console.log(va); //comming in reverse order

let res = [
  { name: "iphone", price: 1234 },
  { name: "iphone", price: 3456 },
  { name: "iphone", price: 1236 },
];
let fin = res.slice(0, 2);
console.log(fin);

let ar = [10, 20, 30, 40, 50];
//Splice method
ar.splice(1, 1); //start at 1 after that delete one and print next all
console.log(ar);
//syntax for splice method
//splice(count,deleteconut,item1,item2,,,,,,);
let a = [10, 20, 30, 40, 50];
a.splice(1, 2, 70);
console.log(a);
let b = [10, 20, 30, 40, 50];
b.splice(1, 2, 70, 90);
console.log(b);
//filter method
let company = ["apple", "microsoft", "nvidia", "adobe"];
company.splice(1, 0, "openAI", "claude");
console.log(company);

let transactions = [
  { upi: "a", number: "123", status: "success" },
  { upi: "b", number: "153", status: "success" },
  { upi: "c", number: "173", status: "failed" },
  { upi: "d", number: "126", status: "failed" },
];

let finOp = transactions.filter((value) => value.status == "success");
console.log(finOp);
//map method-it will iterate through each element of an array

let array = [20, 30, 40];
let values = array.map((num) => num * 2);
console.log(values);

let transaction = [
  { status: "failed", product: "phone", value: 20 },
  { status: "success", product: "phone", value: 200 },
  { status: "failed", product: "phone", value: 2000 },
  { status: "failed", product: "charger", value: 2670 },
  { status: "success", product: "shoes", value: 200 },
  { status: "failed", product: "phone", value: 2570 },
];

let mapOp = transaction.map((value) => console.log(value));

let mapOpp = transaction.map(
  (value) => `product is ${value.product} amount${value.product}`,
);
//console.log(mapOp);

//reduce method
let scores = [73, 53, 35, 87, 87, 38, 90];
let final = scores.reduce((acc, value) => acc + value, 0);
//second argument holds accumulator initial value
console.log("total score:", final);

let mobile = [
  { name: "iphone", brand: "apple", price: 100000, country: "US" },
  { name: "galaxy", brand: "apple", price: 57000, country: "Korea" },
  { name: "android", brand: "apple", price: 30000, country: "china" },
  { name: "iphone", brand: "apple", price: 10000, country: "US" },
];
let tatoalValue = mobile.reduce((acc, value) => acc + value.price, 0);
console.log("total value", tatoalValue);
