/*Use two of built in prototype functions*/

var randomNumber = Math.random() * 100;
var roundedNumber = Math.round(randomNumber);
console.log(roundedNumber);

Object.assign(user, userJim) /* to merge users. first one is the user that is merged into. outcome for user - ame: 'Jim', email: 'test@test.com', age: 111, for userJim - stays the same*/

/*Create your own prototype*/

function Employee (name, age, salary, workdays) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.workdays = workdays;

    this.sayHello = function () {
        return "Hello " + name
    }
  }

  /*create new instance*/

  var employeeJohn = new Employee ("John", 30, 1500, ["Monday", "Thursday", "Friday"])

  /*call a function from it*/

  employeeJohn.sayHello()

  /*Create an other prototype that extends the previous one*/

  function Salesman () {
    Employee.apply(this, arguments) 
    this.occupation = "salesman"

    this.sayHello = function () {
        return "Welcome" + this.name
    }
    this.announceOccupation = function () {
        return "You are a " + this.occupation
    }
}

/*Create a new instance and call the function that was declared in the parent prototype and the one that was newly created*/

var salesmanBob = new Salesman ("Bob", 50, 2000, ["Tuesday", "Sunday"])

salesmanBob.sayHello()
salesmanBob.announceOccupation()


/* other examples */
var user = {
    name: "Ed",
    email: "test@test.com"
}

var userJim = {
    name: "Jim",
    age: 111
}

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