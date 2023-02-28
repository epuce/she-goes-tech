/*Create a setup where an anonymous function is called*/
function sayHelloTo() {
    alert ('Hello')
}
/*Laikam nav pareizi?!*/

/*Create a setup where an anonymous function is called, Eda piemers*/
[].forEach(function() {

})

/*Create a setup where a declared function is called*/
var name=['John', 'Jim', 'Jerry']
function sayHello(name) {
    alert ('Hello ' + name)
}

/*Create a setup where a declared function is called, Eda piemers*/
function callMe() {
    console.log("callMe")
}

callMe()

/*Create a function where two number are summed up*/
function sumTwoNumbers(a, b) {
   sum = a+b;
    return sum
} 

/*Create a function where two number are summed up, Eda piemers*/
var sum = function(num1, num2) {
    console.log("The sum of these two is: " + (num1+num2))
}
sum (10,30)

/*Create a function with unknown amount of parameters where all of them are summed up*/
function sumManyNumbers(a, ...n) {
    sum = a+...n;
     return sum
 } 

/*Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables*/
var user {
    name: Linda;
    hair: brown;
}

function greeting(user) {
    console.log ('Hi ' + user.name + ', you have beautiful ' + user.hair + 'color')
}

/*Eda piemers, Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables*/
var sayHiTo = function(user) {
    var {name, lastName} = user;

    console.log ("Hi " + name + " " + lastName);
}
var john = {
    name: "John",
    lastName: "Billy"
}