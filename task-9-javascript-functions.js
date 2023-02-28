//Create a setup where an anonymous function is called

let list = ["Goda", "Ieva", "Lukas"];
list.forEach(function (name) {
  console.log(`Hello, ${name}`);
});

//Create a setup where a declared function is called

function secondList(name) {
  console.log(`Hello, ${name}`);
}
secondList("Goda");

//Create a function where two number are summed up

function sumUp(a, b) {
  return typeof a === "number" && typeof b === "number"
    ? a + b
    : console.log("Please provide a number");
}
sumUp(10, 5);

//Create a function with unknown amount of parameters where all of them are summed up

const sumOfAll = function (numbers) {
  return numbers.reduce((acc, number) => {
    return (acc += number);
  });
};
sumOfAll([10, 5, 10]);

//Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables

const goda = {
  name: "Goda",
  age: 29,
};

const thomas = {
  name: "Thomas",
  age: 30,
};

function greeting(user) {
  const { name: firstName, age: age } = user;
  console.log(`Hello, ${firstName}`);
}
greeting(goda);
