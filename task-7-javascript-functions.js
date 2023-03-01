["a", "b", "c"].forEach(function () {
  console.log("Thats a start");
});

function alphabet(letters) {
  console.log("Thats a start");
}

["a", "b", "c"].forEach(alphabet);
alphabet("n");

var sum = function (num1, num2) {
  console.log("The sum of these two is " + (num1 + num2));
};

sum(10, 20);

function groceryExpensesSum(expenses, ...otherExpenses) {
  return otherExpenses.reduce(function (acc, exp) {
    return acc + expenses;
  }, expenses);
}

groceryExpensesSum(12, 6, 70, 57);

var linda = {
  name: "Linda",
  favAnimal: "Cat",
};

var sayHiTo = function (user) {
  var { name, favAnimal } = user;
  console.log("Hi " + name + " I also like " + favAnimal);
};

sayHiTo({ name: "Edgars", favAnimal: "Sunis" });

sayHiTo(linda);
