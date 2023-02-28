var list = [1, 2, 3, 4, 5]; //arrays are usually the ones we can loop through
list.forEach(function (value) {
  console.log(value + " multiplied by 5 is" + value * 5);
});

list.forEach(function (value, index) {
  console.log("Element at index " + index + " is " + value);
});

console.log(15 % 10);

list.forEach(function (value) {
  if (value % 2 === 0) {
    console.log(value + " is an even digit");
  }
});

//MAP modifies array items, it does not change the original list

console.log(
  list.map(function (value) {
    return value;
  })
);

var priceList = [100, 120, 250, 500, 700];

console.log(
  priceList.map(function (price) {
    return price + price * 0.1;
  })
);
console.log(
  priceList.reduce(function (acc, value) {
    return acc + value;
  }, 0)
);
console.log(
  priceList
    .map(function (price) {
      return price + price * 0.1;
    })
    .reduce(function (acc, num) {
      return acc + num;
    })
);

for (var i = 0; i < 5; i = i + 1) {
  console.log(i);
}
var number = [];
for (var i = 0; i < 100; i++) {
  number.push(Math.random() * 100);
}
Math.random(); //creates value between 0-1

console.log(number);

for (var i = 0; i < priceList.length; i++) {
  console.log(priceList[i]);
}

var i = 0;

while (i < 10) {
  console.log("Number " + i);
  i = i + 2;
} //we modified i, therefore, we cannot run it again since we modified it once

var isAdmin = true;
while (isAdmin) {
  var randomNumber = Math.random() * 100;
  if (randomNumber > 50) {
    console.log(randomNumber);
  } else {
    isAdmin = false;
  }
  console.log(Math.random());
}

[1, 2, 3, 4, 5].forEach(function (num, i) {
  console.log("item at indexn: " + i + " is " + num);
});
[1, 2, 3, 4, 5].reduce(function (acc, num) {
  console.log(acc, num);
  return acc * num;
}, 10);

console.log(
  [10, 20, 130, 45, 58].map(function (value) {
    return value + value * 0.15;
  })
);
var array = ["Ed", "Max", "Jim"];
for (var i = 0; i < array.length; i++) {
  console.log("Hi, " + array[i]);
}

// var isBiggerThatTen = true;
// while (isBiggerThatTen === true) {
//   var num = Math.random() * 100;
//   if (num > 10) {
//     console.log(num);
//   } else {
//     isBiggerThatTen = false;
//   }
// }
