//Use two of built in prototype functions
var userLinda = {
    name: "Linda",
    email: "linda@test.com",
}

var userAnna = {
    name: "Anna",
    age: 20,
}

Object.assign(user, userAnna)

// Use two of built in prototype functions
Math.floor(1.7)

/*2. Create your own prototype
    1. create new instance
    2. call a function from it
*/

function User(name, age) {
    this.name = name
    this.age = age

    this.sayHi = function() {
        return "Hello, may name is " + this.name
    }

    this.iWasBornIn = function() {
        var thisYear = new Date().getFullYear()

        if (thisYear - this.age > 2000) {
            return "I was born after year 2000"
        } else {
            return "I was born before year 2000"
        }
    }
}

/* 3. Create an other prototype that extends the previous one
    1. Overwrite an existing functions
    2. Create a new instance and call the function that was declared in the parent prototype and the one that was newly created
*/

var user1 = new User('Ed', 65);
user.sayHi();
user.iWasBornIn()

function Admin() {
    User.apply(this, arguments)

    this.isAdmin = true;

    this.sayHi = function() {
        return "I don't like people"
    }

}

var admin1 = new Admin('Ed', 65);
admin1.sayHi();
admin1.iWasBornIn()