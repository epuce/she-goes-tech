for (let i = 10; i <= 20; i = i + 2) {
  console.log(i);
}

var array = ["Sun", "Venus", "Earth", "Mars", "Jupiter"].forEach(function (
  name
) {
  console.log(name);
});

[1, 6, 12, 4, 9].map(function (value) {
  return value * value;
});

var number = [];

for (var i = 0; i < 5; i = i + 1) {
  number.push(i);
}
console.log(number);
