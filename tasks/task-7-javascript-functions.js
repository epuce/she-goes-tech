//task-1
var names = ['Zita', 'Dita', 'Lita'];

names.forEach(function() {
    console.log('Hello ' + names + ' ')
});

//task-2
function sayHello () {
    console.log('Hello!')
};

sayHello();

//task-3
var a = 3;
var b = 6;
function sum (a, b) {
    console.log (a + b)
};

sum(a, b);

//task-4
const sumNumbers = function(number, ...theRest) {
    var sum = theRest.reduce((acc, value) => {
        return acc += value;
    }, number)

    console.log(sum);
}

sumNumbers(1, 4, 6, 4);

//task-5
var user = {name: 'Koko', surname: 'Via', age: 60};
var Users = (data) => {
    const {name, surname, age} = data;

    console.log(name)
    console.log(surname)
    console.log(age)
}

Users(user);