class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
  logout() {
    console.log(`${this.name} logged out`);
  }
}
class Customer extends User {
  placeOrder(foodItem) {
    console.log(`${this.name} ordered ${foodItem}`);
  }
}
class DeliveryPartner extends User {
  deliverOrder(orderId) {
    console.log(`${this.name} delivered order ${orderId}`);
  }
}
class Admin extends User {
  removeRestaurant(restaurantName) {
    console.log(`${restaurantName} removed by ${this.name}`);
  }
}

const Customer = new Customer("David", "abc@gamil.com");

customer.login();
customer.placeOrder("Pizza");

console.log("--------");

const rider = new DeliveryPartner("Rahul", "abc@gamil.com");

rider.login();
rider.deliverOrder("ORD123");

console.log("--------");

const Admin = new Admin("Manager", "admin@foodapp.com");

Admin.login();
Admin.removeRestaurant("ABC Restaurant");
