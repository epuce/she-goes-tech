1.
var animals = [dog, cat, mouse];
var animals = ["dog", "cat", "mouse"];
var count = animals.push("bird");
console.log(animals)
---
2.
var Info = {
    a: 'green',
    b: 42,
    c: false
  };
  console.log(Object.values(Info))
---
3.
function Person(name, age, favSnack) {
    this.name = name
    this.age = age
    this.favSnack = favSnack

    this.sayHi = function() {
        return "Hello, my name is " + this.name
    }
}
var Person1 = new Person("Tim", 23, "apple")

---
function Person(name, age, favSnack) {
    this.name = name
    if (typeof age === "number") {
        this.age = age} 
    else {
        this.age = ""}
    this.favSnack = favSnack

    this.sayHi = function() {
        return "Hello, my name is " + this.name
    }
}
---
function Admin() {
    Person.apply(this, arguments)
}
