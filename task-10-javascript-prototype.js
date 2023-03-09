// Use two of built in prototype functions
console.log(Math.min(5, 6, 7, 8, 9));
console.log(new Date());

// Create your own prototype
function Food(title, taste, price) {
  this.title = title;
  this.taste = taste;
  this.price = price;
  this.text = function () {
    console.log(`${this.title} is ${this.taste} and costs (${this.price})`);
  };
}

// create new instance
var iceCream = new Food("Ice-cream", "sweet", "3$");
console.log(iceCream);
// call a function from it
console.log(iceCream.text());
// Create an other prototype that extends the previous one

function Snacks() {
  Food.apply(this, arguments);
  this.isPricey = "inexpensive";

  // Overwrite an existing functions
  this.text = function () {
    console.log(`${this.title} is ${this.taste} and costs (${this.price})`);
  };
  this.summary = function () {
    console.log(
      `${this.title} is ${this.taste} and costs (${this.price}) which is ${this.isPricey}`
    );
  };
}
const chips = new Snacks("chips", "salty", "2$");
console.log(chips);

// Create a new instance and call the function that was declared in the parent prototype and the one that was newly created

var candies = new Snacks("candy", "sweet", "5$");
console.log(candies.summary());
console.log(candies.text());

// Solution////////////////////////////////////////////////////

// Use two of built-in prototype functions
var user = {
  name: "ED",
  email: "test@test.com",
};

var user2 = {
  name: "John",
  email: "test2@test2.com",
};

Object.assign(user, user2); //to merge 2 objects together, If value exists, we ovewrite it

// Create your own prototype
function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("Hello, my name is " + this.name);
  };
  this.iWasBornIn = function () {
    var thisYear = new Date().getFullYear();

    if (thisYear - this.age > 2000) {
      return "I was born after year 2000";
    } else {
      return "I was born before year 2000";
    }
  };
}
// create new instance
// call a function from it
var user1 = new User("Neringa", 31);
console.log(user1.sayHi());
console.log(user1.iWasBornIn());

// Create an other prototype that extends the previous one
function Admin() {
  User.apply(this, arguments);
  this.sayHi = function () {
    return "I dont's like people";
  };
}
var admin1 = new Admin("Ed", 15);
console.log(admin1.sayHi());

// Overwrite an existing functions

// Create a new instance and call the function that was declared in the parent prototype and the one that was newly created
