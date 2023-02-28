[1, 2, 3, 4].forEach;
[1, 2, 3, 4].forEach(function (number) {
  console.trace();
});

//2 ways of defining the function
function callMe() {
  console.log("Call me");
  console.trace();
}
let callme = function () {};

callMe();

[1, 2, 3, 4].forEach(callMe);

//Function with 1 parameter
let sayHelloTo = function (name) {
  if (typeof name === "string") {
    console.log("Hello " + name);
  } else {
    console.log("Invalid input");
  }
};

sayHelloTo("Jim");
sayHelloTo("Max");

["Ed", "Jix", "John"].forEach(sayHelloTo); //function+loop

//Function with multiple parameters
function theSumOf(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (!isNaN(a) && !isNaN(b)) {
    console.log(a + b);
  } else {
    console.log("invalid input");
  }
}
theSumOf([], "1.12");

function monthlyBillSum(bill, ...otherBills) {
  console.log(bill, otherBills);
}
monthlyBillSum(100, 2, 3, 4);

function monthlyBillSum(bill, ...otherBills) {
  otherBills.reduce(function (acc, bill) {
    return acc + bill;
  }, bill);
}
monthlyBillSum(100, 150, 250, 600, 100, 12, 100, 100000);
console.log(1000 < monthlyBillSum(123, 321, 12, 123, 123));

var jim = {
  name: "Jim",
  age: 55,
  favFood: "Pizza",
};
var john = {
  name: "John",
  age: 34,
  favFood: "Hot dogs",
};

function parseUser(user) {
  var {name, age, favFood: food} = user; //we are extracting object keys as variables
  console.log(
    "Hey, " +
      name +
      " happy birthday to you " +
      age +
      " birthday, here's some " +
      food +
      " for you"
  );
}
parseUser(jim);
