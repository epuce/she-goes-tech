// General logic:
function name(parameter1, parameter2, parameter3) {
  // code to be executed.
}

// Create a setup where an anonymous function is called/ Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
// Create a setup where a declared function is called
[null].forEach(function () {});

function callMe() {
  console.log("callMe");
}
callMe();

var callYou = function () {
  console.log("callYou");
};
callYou();
// Create a function where two number are summed up

var sum = function (num1, num2) {
  console.log("The sum of these two is: " + (num1 + num2));
};

sum(10, 30);
// Create a function with unknown amount of parameters where all of them are summed up
function sumOfAll(...params) {
  var sum = 0;

  params.forEach(function (num) {
    sum = sum + num;
  });

  console.log("The sum of all numbers ir: " + sum);
}
// Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables
var sayHiTo = function (user) {
  var { name, lastName } = user;

  console.log("Hi " + name + " " + lastName);
};
sayHiTo({ name: "Jim", lastName: "Bruth" });

var john = {
  name: "John",
  lastName: "Hillbilly",
};
sayHiTo(john);
