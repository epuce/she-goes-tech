// Task1
Math.max(6, 5, 75);
Number.isInteger(5);

// Task2
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

var studentAna = new Student("Ana", "Goodlearner", 24);
this.sayHi = function () {
  return "Hello, my name is " + this.firstName;
};

// Task3
function Teacher() {
  Student.apply(this, arguments);
  this.lesson = "Geography";
}

var teacherJohn = new Teacher("John", "Badteach", 51, "Geography");

this.greeting = function () {
  return "Hi, may name is " + this.firstName;
};

this.teaching = function () {
  return "Teacher John is teaching " + this.lesson;
};
