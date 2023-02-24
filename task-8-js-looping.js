// create a loop that prints every second number starting from 10 and ending with 20
for (let i = 10; i <= 20; i += 2) {
  console.log(i);
}

// loop thru an array of 5 values and print out it's content
var arr = [10, 20, 30, 40, 50];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// modify array of 5 numbers by multiplying the numbers by itself
var array = [1, 2, 3, 4, 5];

var multiplyArray = array.map(function (value) {
  return value * value;
}); // could also use value**2

console.log(multiplyArray); //output is Array(5) [ 1, 4, 9, 16, 25 ]

// Create a loop that will add 5 values to an empty array
const myArray = [];
let i = 0;

while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray); // output is Array(5) [ 0, 1, 2, 3, 4 ]
