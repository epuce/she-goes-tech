[null].forEach(function() {

})

function callMe() {
    console.log("callMe")
}
callMe()

var callYou = function() {
    console.log("callYou")
}
callYou()

var sum = function(num1, num2) {
    console.log("The sum of these two is: " + (num1+num2))
}

sum(10, 30)

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