var sayHelloTo = function (name) {
    console.log("Hello " + name) /*simple function setup*/
}

/*sayHelloTo("Jim") -> prints Hello Jim*/

var sayHelloTo = function (name) {
    if (typeof name === "string") { /* here we check if the input is valid, in this case if it is a strin*/
    console.log("Hello " + name)
    } else {
        console.log ("Invalid input")
    }
}

["Ed", "Jix", "John"].forEach(sayHelloTo) /*combining functions*/

/* The outcome here is:
Hello Ed
Hello Jix
Hello John */

function theSumOf (a, b) {
    a = parseFloat(a); /*changing input to a number*/
    b = parseFloat(b);
    if (a !== NaN && b !==NaN) { /*making sure that both are valid numbers*/
    console.log(a+b)
    } else {
        console.log("Invalid input")
    }
}

/* in above function all of these will work:
theSumOf(1, 2)
theSumOf "1", 2) */

function monthlyBillSum(bill, ...otherBills) {
    console.log(bill, otherBills)
}

/* Rezultāti:

monthlyBillSum(100)
100 []

monthlyBillSum(100, 150, 250, 600)
100 [150, 250, 600]*/

function monthlyBillSum(bill, ...otherBills) {
    return otherBills.reduce(function(acc, bill) { /*we are returning the result, so that it can be used in other places*/
        return acc+bill
    }, bill)
}

/*another way of writing this*/

function monthlyBillSum(bill, ...otherBills) {
    var sum = otherBills.reduce(function(acc, bill) { /*we are returning the result, so that it can be used in other places*/
        return acc+bill
    }, bill)
    return sum;
}

/*or like this, but then we have to put in an array (see below)*/
function monthlyBillSum(bills) {
    return bills.reduce(function(acc, bill) {
        return acc+bill
    })
}

/*monthlyBillSum([100, 150, 250, 600]) <- array of numbers*/

/*or like this*/

function sumOfAll (...params) {
    var sum = 0;

    params.forEach(function(num) {
        sum = sum+num;
    })

    console.log(sum)
}

/*functions with objects*/
var jim = {
    name: "Jim",
    age: 55,
    favFood: "Pizza"
}

var john = {
    name: "John",
    age: 34,
    favFood: "Hot dogs"
}

function parseUser(user) {
    console.log("Hey " + user.name + ", happy birthday at your " + user.age + " birthday, here's some " + user.favFood + " for you")
}

parseUser(jim)
/* outcome -> Hey Jim, happy birthday at your 55 birthday, here's some Pizza for you*/

/*better way to write the previous function*/
function parseUser(user) {
    var {name, age, favFood} = user; /*extracting keys from the object and then using only these keys*/
    console.log("Hey " + name + ", happy birthday at your " + age + " birthday, here's some " + favFood + " for you")
}
/*then if we change the input parameter, we only have to change the parameter (in this case user) only in one place*/

function parseUser(user) {
    var {name, age, favFood: food} = user; /*in this case we are redefining the key favFood to food, and also using food in the further function*/
    console.log("Hey " + name + ", happy birthday at your " + age + " birthday, here's some " + food + " for you")
}