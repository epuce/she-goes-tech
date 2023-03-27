[3,4,5].forEach(function() {
    console.log(2)
})


function printNumber() {
    console.log("printNumber")
}


var sum = function(num1, num2) {
    console.log("Numbers sum: " + (num1+num2))
}




function sumOfAll(...params) {
    var sum = 0;
    params.forEach(function(num) {
        sum = sum+num;
    })  
    console.log("The sum of all numbers ir: " + sum)
}

var sayHiTo = function(user) {
    var {name, lastName} = user;

    console.log("Hi " + name + " " + lastName);
}
sayHiTo({name: "Jim", lastName: "Bruth"});

var john = {
    name: "John",
    lastName: "Hillbilly"
}
sayHiTo(john)

var sum = function(num1, num2) {
    console.log("The sum of these two is: " + (num1+num2))
}