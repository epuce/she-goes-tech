/*create a loop that prints every second number starting from 10 and ending with 20*/
for (var i = 10 ; i < 21 ; i=i+2 ) {
    console.log(i);
 }

 /*create a loop that prints every second number starting from 10 and ending with 20*/
for (var i=10; i<=20; i=i+2) {
    console.log(i)
}



/*loop thru an array of 5 values and print out it's content*/
 var array = ["Linda", "Anna", "Mia", "Krista", "Sella"]
 array.forEach(function(name) {
    console.log (name)
})

/*loop thru an array of 5 values and print out it's content*/
var list = ['a', 'b', 'c', 'd', 'e'];
list.forEach(function(char)) {
    console.log(char)
}

/*loop thru an array of 5 values and print out it's content*/
['a', 'b', 'c', 'd', 'e'].forEach(function(char)) {
    console.log(char)
}

/*modify array of 5 numbers by multiplying the numbers by itself*/
[11,12,13,14,15].map(function(num) {
    return num*num
})

/*modify array of 5 numbers by multiplying the numbers by itself*/
[11,12,13,14,15].map(function(num) {
    return num**
})

/*modify array of 5 numbers by multiplying the numbers by itself*/
var array = [1, 2, 3, 4];
var sqrtArray = array.map(function(value) {
    return value*value
});
console.log(sqrtArray)

/*Create a loop that will add 5 values to an empty array*/
var array = [];
while(array.length<5) {
    array.push(Math.random())
}
