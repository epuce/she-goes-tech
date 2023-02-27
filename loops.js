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

var priceList = [100, 120, 250, 500, 700]

priceList = priceList.map (function (price) {
    return price + price * 0.1
})

priceList.reduce (function (acc, value) {
    return acc + value;
}, 0)

priceList.reduce (function (acc, value) {
    console.log(acc, value) /*here we print out each step and each loop*/
    return acc + value;
}, 0)

priceList.map (function (price) {
    return price + price * 0.16
}).reduce(function(acc,num) {
    console.log(acc,num)
    return acc + num;
})

/*FOR LOOPS*/



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