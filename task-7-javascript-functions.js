// Create a setup where an anonymous function is called

[1, 2, 3].forEach(function () {
  console.log("Correct!");
});

// Create a setup where a declared function is called

function printUser() {
  console.log("printUser");
}

// Create a function where two number are summed up

function addNumbers(a, b) {
  return a + b;
}
addNumbers(15, 20);

// Create a function with unknown amount of parameters where all of them are summed up

function amountParam(...params) {
  var sum = 0;

  params.forEach(function (num) {
    sum = sum + num;
  });
  console.log("The total is " + sum);
}

// Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables

function loveMyCar(car) {
  var { model, color } = car;
  console.log("Love to ride my " + color + " " + model);
}

loveMyCar({ model: "Pagani", color: "silver" });

var newCar = {
  model: "BMW",
  color: "blue",
};

loveMyCar(newCar);
