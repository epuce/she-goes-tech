for (var i = 10; i <= 20; i = i + 2) {
  console.log(i);
}

var arr = [10, 15, 43, 53, 32];

arr.forEach(function (num) {
  console.log(num);
});

arr.map(function (num) {
  return num * num; /*or here we can write num**2 (by the power of 2) or for example num**3 (by the power of 3)*/
});

var anotherArray = [];

while (anotherArray.length < 5) {
  anotherArray.push(Math.round(Math.random() * 100));
}
