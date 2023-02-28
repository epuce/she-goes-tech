//Checkup
for (var i = 10; i <= 20; i = i + 2) {
  console.log(i);
}

[1, 2, 3, 4, 5].forEach(function (num) {
  console.log(num);
});

console.log(
  [1, 2, 3, 4, 5].map(function (value) {
    return value ** 2;
  })
);

let isLength5 = false;
let numArr = [];

while (!isLength5) {
  var randomNumber = Math.random() * 100;
  numArr.push(randomNumber);
  if (numArr.length <= 5) {
    console.log(numArr);
  } else {
    isLength5 = true;
  }
}
