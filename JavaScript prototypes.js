function Animal(name, age, foodList) {
  this.name = name;
  this.age = age;
  this.foodList = foodList;
}

var animal = new Animal("Max", 21, [
  "snacks",
  "grass",
  "bones",
]); /*we create a new instance*/

/*then we can acces each instance by writing*/

animal.name;
animal.age;
animal.foodList;

var animalBob = new Animal("Bob", 21, [
  "snacks",
  "grass",
  "bones",
]); /*another animal instance created*/

// we can also add some validation when creating instances like this

function Animal(name, age, foodList) {
  if (typeof name === "string") {
    this.name = name;
  } else {
    this.name = "";
  }
  this.age = Number.isNan(parseInt(age)) ? undefined : parseInt(age);
  this.foodList = Array.isArray(foodList) ? foodList : [];
}

/* we can also include functions in instances like this*/

function Animal(name, age, foodList) {
    if (typeof name === 'string') {
        this.name = name
        } else {
        this.name = ""}
    this.age = Number.isNaN(parseInt(age)) ? undefined : parseInt(age)
    this.foodList = Array.isArray(foodList) ? foodList : []

    this.sayHi = function() {  /*this function is inc;uded in the instance*/
        return "Hi, my name is " + this.name
    }
}

var animalBob = newAnimal ("Jack", "test")

/* and then we can call the function on an instance like this*/

animalBob.sayHi() /*the output will be 'Hi, my name is Bob'*/

/* we can also build upon existing things*/

function Dog () {
    Animal.apply(this, arguments) /*we say "copy all parameters from animal and attachit to Dog"*/
    this.animalType = "dog"
}

function Cat () {
    Animal.apply(this, arguments) /*again we apply everithing from ANimal instance, but add another property"*/
    this.animalType = "cat"
}

var dog = new Dog ("Rex", 7)
var cat = new Cat ("Puss", 12) /*each of these will hold all Animal prototype properties, as well as each his own added property from instances Dog and Cat*/

