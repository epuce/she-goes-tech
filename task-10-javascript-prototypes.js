var user = {
  name: "Al",
  surname: "Ely",
};
var user2 = {
  name: "En",
  surname: "Joy",
  email: "en@digital.com",
};
Object.assign(user, user2);


function Cat(name, age, eye) {
  this.catName = name;
  this.catAge - age;
  this.catEye = eye;
}
Cat.prototype.name = function () {
  return this.catName + " " + this.catAge + " " + this.catEye;
};
const myCat = new Cat("Clooney", 8, "green");


function Person(name, nickname) {
  this.name = name;
  this.nickname = nickname;
  this.fun = function () {
    alert("Person: " + this.name + " " + this.nickname);
  };
}
var pers = new Person("James", "Jimmy");
pers.age = 40;
pers.fun = function () {
  alert(
    "Change person: " +
      this.name +
      " " +
      this.nickname +
      ", age = " +
      this.age
  );
};
delete pers.name;
pers.fun();