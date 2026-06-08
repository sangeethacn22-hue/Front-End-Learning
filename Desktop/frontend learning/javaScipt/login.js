//without closure

let password = "admin123"; //local scope

function login(userPassword) {
  if (userPassword === password) {
    console.log("Login Successful");
  } else {
    console.log("Invalid Password");
  }
  password = "hacked";
  login("admin123");
}

//second example

function createLoginSystem() {
  let password = "admin123";

  let login = function (userPassword) {
    if (userPassword === password) {
      console.log("Login Scessfully");
    } else {
      console.log("Invalid password");
    }
  };

  let changePassword = function (oldPassword, newPassward) {
    if (oldPassword === password) {
      password = newPassward;
      console.log("Password Updated");
    } else {
      console.log("Wrong old Password");
    }
  };
  return { login, changePassword };
}
const auth = createLoginSystem();

//login with initial password
auth.login("admin123"); //Login successfull

//change password
auth.changePassword("admin", "react123"); //password updated

//try old password
auth.login("admin123"); //invalid password

//direct access is not posssible
console.log(auth.password); //undefined
