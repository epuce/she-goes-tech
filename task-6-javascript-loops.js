// create a loop that prints every second number starting from 10 and ending with 20

for (let i = 10; i < 21; i = i + 2) {
  console.log(i);
}

// loop thru an array of 5 values and print out it's content

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// modify array of 5 numbers by multiplying the numbers by itself
[1, 2, 3, 4, 5].map(function (num) {
  return num * num;
});

// Create a loop that will add 5 values to an empty array
var array = [];

while (array.length < 5) {
  array.push(Math.random());
}
