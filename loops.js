var list = [1, 2, 3, 4, 5];
list.forEach(function(value) {
    console.log (value + "multiplied by 5 is" + (value *5))
})

list.forEach(function(value, index) {
    console.log ("Element at index " + index + " is " + value)
})

list.forEach(function(value, index) {
    if (value%2 === 0) {
    console.log (value +" is an even digit")
    }
})

[1,2, 3, 4, 5].forEach(function(num, i){
    console.log("item at index: " + i+ " is " +num)
})

var priceList = [100, 120, 250, 500, 700]

priceList = priceList.map (function (price) {
    return price + price * 0.1
})

[1,2, 3, 4, 5].reduce(function(acc, num){
    return acc + num
})

priceList.reduce (function (acc, value) {
    return acc + value;
}, 0) /*here we specify the initial value, here it is 0, but if it would be 10, than the start value would be 10 and then all values would be added to that. See next example.*/

[1,2, 3, 4, 5].reduce(function(acc, num){
    return acc + num
}, 10)

priceList.reduce (function (acc, value) {
    console.log(acc, value) /*here we print out each step and each loop*/
    return acc + value;
}, 0)

[1, 2, 3, 4, 5].map(function(value){
    return value*value*value
})
/* result -> [1, 8, 27, 64, 125]*/

priceList.map (function (price) {
    return price + price * 0.16
}).reduce(function(acc,num) {
    console.log(acc,num)
    return acc + num;
})

/*FOR LOOPS*/

var number = [];

for (var i=0; i<100; i=i+1) {
    number.push(i) /*to populate (fill) number array with 100 numbers from 1 to 100*/
}

/* result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]*/

var array = ["Ed", "Max", "Jim"];

/*Two ways to loop through the array*/

/*1*/

array.forEach(function(name) {
    console.log("Hi" + name)
})

/*2*/

for (var i=0; i<array.length; i=i+1) {
    console.log("Hi" + array[i])
}

/*Both above function return this result: 
HiEd
HiMax
HiJim*/

/*WHILE LOOP*/

var i = 0;

while (i<10) { /* atšķirībā no for loop, this doesn't have to be a number and it can be any condition. While loops are not used as comonly, because it is easier to get infinite loop*/
    console.log("Number " +i) /* with while loops we actually change the value of the i (not the case with for loops)*/
    i=i+2
} 

var isAdmin = true;

while (isAdmin){
    var randomNumber = Math.random()*100
    if (randomNumber > 50) {
        console.log (randomNumber)
    } else {
    isAdmin = false;
    }
}

var isBiggerThanTen = true;

while(isBiggerThanTen === true) {
    var num = Math.random()*100
    if (num > 10) {
        console.log(num)
    } else {
        isBiggerThanTen = false; /*in this case the variable is set to false and the function will stop working until the variable is set back to true*/
    }
}

