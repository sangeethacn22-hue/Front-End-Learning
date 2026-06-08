class product {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  buyProduct() {
    console.log(`Buying product`);
  }
}
class Mobile extends product {
  //not only properties also mthod its inheriting
  buyProduct() {
    console.log("buying mobile");
  }
}
let mobile = new Mobile("iphone", "red");
console.log(mobile);
mobile.buyProduct();


