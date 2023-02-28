//create a loop that prints every second number starting from 10 and ending with 20

for (let i = 10; i <= 20; i = i + 2) {
  console.log(i);
}

// loop thru an array of 5 values and print out it's content

const someArray = [1, 2, 3, 4, 5];
someArray.forEach(function (value) {
  console.log(value);
});

//modify array of 5 numbers by multiplying the numbers by itself

someArray.map(function (value) {
  return value * value;
});

//Create a loop that will add 5 values to an empty array

let emptyArray = [];
let i = 1;
while (i <= 5) {
  emptyArray.push(i);
  i++;
}
console.log(emptyArray);

//Create a loop that will add 5 values to an empty array - Alternative

let anotherArray = [];
anotherArray = Array.from({ length: 5 }, (_, i) => i + 1);
