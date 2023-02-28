[1, 2, 3, 4, 5].map(function(num) {
    console.log (num**2)
})

var howAreYou = function (name) {
    console.log ("How are you, " + name + "?")
}

function sum (num1, num2) {
    return num1 + num2
}

var sumNumbers = function (num1, ...otherNumbers) {
    var numberSum = otherNumbers.reduce(function(acc, numbers) {
        return acc + numbers
    }, num1)

    console.log(numberSum)
}

var user1 = {
    name: "Anne",
    surname: "Bardot"
}

var user2 = {
    name: "John",
    surname: "Malkovich"
}

function greetUser(name) {
    var {name, surname} = name;
    console.log("Hello, " + name + " " + surname + "!")
}
