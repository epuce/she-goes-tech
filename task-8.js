// create a loop that prints every second number starting from 10 and ending with 20

let number = 10;
while (number < 20) {
  if (number % 2 === 0) {
    number++;
  } else {
    console.log(number);
    number++;
  }
}

// loop thru an array of 5 values and print out it's content

let fiveValues = [20, 88, 56, 44, 45];

fiveValues.forEach((value) => {
  console.log(value);
});

// modify array of 5 numbers by multiplying the numbers by itself

fiveValues.map((value) => {
  console.log(value * value);
});

// Create a loop that will add 5 values to an empty array

let newData = [];

for (var i = 0; i < 5; i++) {
    newData.push(i);
}

