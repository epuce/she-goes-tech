var user = {
    name: "Ed",
    email: "test@test.com"
}

var userJim = {
    name: "Jim",
    age: 111,
}

Object.assign(user, userJim)

Math.floor(1.7)

function User(name, age) {
    this.name = name
    this.age = age

    this.sayHi = function() {
        return "Hello, my name is" + this.name
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

var user1 = new User("Ed", 65);
user.sayHi();
user.iWasBornIn()

function Admin() {
    User.apply(this, arguments)

    this.isAdmin = true;

    this.sayHi = function() {
        return "I don't like people"
    }
}

var admin1 = new User("Ed", 65);
admin1.sayHi();
admin1.iWasBornIn()