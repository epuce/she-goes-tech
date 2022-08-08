// 1.
for (var i = 10; i <= 20; i = i + 2) {
    console.log(i);
}

// 2.
arr.forEach(function(text) {
    console.log(text)
})

// 3.
var listOfNum = [11,22,33,44,55]

for (var i = 0; i < listOfNum.length; i = i + 1) {
    listOfNum[i] = listOfNum[i] * listOfNum[i]
}

// 4.
var emptyArr = [];
var i = 0;

while (i < 5) {
    emptyArr[i] = "some text";
    i = i + 1;
}

var empty = [];
for (var i = 0; i < 5; i = i + 1) {
    empty[i] = i
}