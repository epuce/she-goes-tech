//each of
//each of the data types has its own logic

//Number prototype
Number.isNaN();
Math.max();
console.log(Math.min(3, 2, 1, 0, 1));
console.log(Math.sqrt(144));
var arr = [1, 2, 3]; //thi array prototype has values, therefore, it is called instance
var date = new Date();
console.log(date);
console.log(date.getFullYear());
date.setDate(20);
date.toISOString(1);
var date1 = new Date("01/01/2023 12:00:00"); //although we defined 12, we were converted to 10
console.log(date1);
// JSON.parse();

// To create our own//
function Animal(name, age, foodList) {
  if (typeof name === "string") {
    this.name = name;
  } else {
    this.name = "";
  }

  this.age = Number.isNaN(parseInt(age)) ? undefined : parseInt(age);
  this.foodList = Array.isArray(foodList) ? foodList : [];
  this.sayHi = function () {
    return "Hi my name is " + this.name;
  };
}

var animal = new Animal("Max", 21, ["snacks", "grass", "bones"]);
var animalBob = new Animal("Bob", 21, ["snacks", "grass", "ice-cream"]);

//animal and animalBob are variables holding the instance
console.log(animal, animalBob);
console.log(animal.sayHi());
console.log(animalBob.sayHi());

function Dog() {
  Animal.apply(this, arguments); //copy everything what is inside Animal prototype and extend Dog class by adding something new
  this.animalType = "dog";
}
function Cat() {
  Animal.apply(this, arguments); //copy everything what is inside Animal prototype and extend Cat class by adding something new
  this.animalType = "dog";
  this.animalType = "cat";
}

var dog = new Dog("Rex", 7);
var cat = new Cat("Puss", 12);

console.log(dog, cat);
