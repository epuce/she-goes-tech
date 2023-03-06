// Anonymous
[1, 2, 3, 4].forEach(function () {
  console.log("Hello");
});

// Declared function
function clickHere(name) {
  console.log("Click Here" + name);
}
clickHere(" Alice");

// two numbers summed up
function sum(a, b) {
  console.log(a + b);
}

sum(2, 4);

// Unknown amount of parameters where all of them are summed up
function totalWeight(initialWeight, ...rest) {
  return rest.reduce(function (acc, weight) {
    return acc + weight;
  }, initialWeight);
}

totalWeight(1, 0.5, 7, 2.5, 4);

// Function that accepts object as an parameters

var box1 = { weight: 1, height: 2, width: 3, length: 4, color: "red" };
var box2 = { weight: 7, height: 3, width: 4, length: 5, color: "blue" };
var box3 = { weight: 2, height: 1, width: 7, length: 6, color: "purple" };

function parseBox(box) {
  console.log(
    "This box weights " +
      box.weight +
      " kg and it´s dimensions are " +
      box.height +
      " x " +
      box.width +
      " x " +
      box.length +
      " inches" +
      " and it´s color is " +
      box.color
  );
}

parseBox(box1);

var technicalSheet = function (box) {
  var { weight, height, width, length, color } = box;

  console.log(
    "This box weights " +
      box.weight +
      " kg and it´s dimensions are " +
      box.height +
      " x " +
      box.width +
      " x " +
      box.length +
      " inches" +
      " and it´s color is " +
      box.color
  );
};
