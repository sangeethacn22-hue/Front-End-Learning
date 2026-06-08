//object
let transaction = {
  upi: "a@a.com",
  number: "1234",
};
console.log(transaction.upi);
console.log(transaction["upi"]);

transaction["account"] = "ICICI";
console.log(transaction);

//object methods
console.log(Object.keys(transaction));

console.log(Object.values(transaction));

let obj1 = {
  name: "sang",
  age: 20,
};

let obj2 = {
  name: "sangeetha",
  city: "banglore",
};
Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);

//array of object
let transactions = [
  { upi: "a", number: "123", status: "success" },
  { upi: "b", number: "153", status: "success" },
  { upi: "c", number: "173", status: "failed" },
  { upi: "d", number: "126", status: "failed" },
];


console.log(transactions);
console.log(transactions.length);

for (let i = 0; i < transactions.length; i++) {
  let newAr = [];
  console.log("value is", transactions[i].status);
  if (transactions.status == "failed") {
    newAr.push(transactions[i]);
  }
}
console.log(newAr);
