class product {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  buyProduct() {
    //buyProduct in java its an method
    console.log(`product name:${this.name}
        product color:${this.color}`);
  }
}
let value = new product("iphone", "red");
let data = new product("samsung", "blue");
/*console.log(value);
console.log(data);*/
value.buyProduct();
data.buyProduct();
