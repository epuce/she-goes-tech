// Create a setup where an anonymous function is called

let numbers = [25, 99, 78];

numbers.forEach(function () {
  console.log("You have some numbers");
});

// Create a setup where a declared function is called

function sayHello(name) {
  if (typeof name === "string") {
    console.log("Helo " + name);
  } else {
    console.log("Please write your name");
  }
}

sayHello("Veronika");
sayHello(2);

// Create a function where two number are summed up

function sum(num1, num2) {
  console.log("The sum is " + (num1 + num2));
}

sum(8, 10);

// Create a function with unknown amount of parameters where all of them are summed up

function unknownAmountOfParameters(num1, ...amountOfParameters) {
  console.log(
    "The sum is " +
      amountOfParameters.reduce((acc, value) => {
        return (acc += value);
      }, num1)
  );
}

unknownAmountOfParameters(100, 25, 458, 50);

// Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables

function sayHelloObj(obj) {
  console.log(
    "Hey " +
      obj.name +
      ", you are " +
      obj.status +
      " and your role is " +
      obj.role +
      "."
  );
}

sayHelloObj({ name: "Christina", status: "available", role: "admin" });
