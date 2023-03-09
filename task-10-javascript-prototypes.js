/*Use two of built in prototype functions*/

var randomNumber = Math.random() * 100;
var roundedNumber = Math.round(randomNumber);
console.log(roundedNumber);

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

    this.announceOccupation = function () {
        return "You are a " + this.occupation
    }
}

/*Create a new instance and call the function that was declared in the parent prototype and the one that was newly created*/

var salesmanBob = new Salesman ("Bob", 50, 2000, ["Tuesday", "Sunday"])

salesmanBob.sayHello()
salesmanBob.announceOccupation()