### JavaScript Loops

* **for** loop
```JavaScript
// define the starting value
// set the condition for executing the loop
// set the step for the variable to be modified with
for (let i = 0; i < 3; i++) {
    console.log('Hello Nr' + i)
}
// This will console log:
// 'Hello Nr0'
// 'Hello Nr1'
// 'Hello Nr2'
```

* **while** loop
  
```JavaScript
// define the starting value outside the loop
// set the condition for executing the loop
// inside the loop function modify the starting value variable
var i = 3;
while (i > 0) {
    console.log('Hello Nr' + i)
    i--
}
// This will console log:
// 'Hello Nr3'
// 'Hello Nr2'
// 'Hello Nr1'
```

* **forEach** loop - can be applied only for arrays

```JavaScript
var array = [true, true, false, true];

array.forEach(function(value, index) {
    if (value) {
        console.log('The value at index ' +index+ ' is true')
    } else {
        console.log('The value at index ' +index+ ' is false')
    }
});

// This will console log:
// The value at index 0 is true
// The value at index 1 is true
// The value at index 2 is false
// The value at index 3 is true
```

* **map** loop - can be applied only for arrays (modifies it self)
```JavaScript
var array = [1, 2, 3, 4];

var sqrtArray = array.map(function(value) {
    return value**2 // modifies the number to the power of two
});

console.log(sqrtArray)
// This will console log:
// [1, 4, 9, 16]
```
<!-- TODO add links -->
* Other
  * for/in loop [link]()
  * for/of loop [link]()
  * reduce loop [link]()
  * filter action [link]()
  * find action [link]()
  * findIndex action [link]()
  * etc. 

### JavaScript functions
* Anonymous - no name to refer to
```JavaScript
// The function that is executed is an anonymous one
document.getElementsByTagName('body')[0].addEventListener('click', function() {
    console.log('you just did a click')
})
```
* Declared - there is a name to refer to
```JavaScript
// The function that is executed on the click and does not matter where in the fil it has been declared
function onClick() {
    console.log('you just did a click')
}

document.getElementsByTagName('body')[0].addEventListener('click', onClick)
```
* Declared and assigned to a variable - only introduced to the scope when declared

```JavaScript
// The declared function is not seen by the event listener as it is assigned to a variable later in the file
document.getElementsByTagName('body')[0].addEventListener('click', onClick) 

var onClick = function() {
    console.log('you just did a click')
}

// This event listener sees the function and can execute it
document.getElementsByTagName('body')[0].addEventListener('click', onClick)
```

* ES6 arrow functions (same, but different, but still the same)
```JavaScript
let customFn = () => {
    // Do something
}
```

#### Function parameters
* We can pass parameters to function to change the conditions how to execute the function
  
```JavaScript
function sayHelloTo(name) {
    alert('Hello ' + name)
}

sayHelloTo('Edmunds');
// This will show an alert window with text:
// Hello Edmunds

// Passing multiple parameters
function witchNumberIsBigger(a, b) {
    if (a > b) {
        console.log('First passed number is bigger')
    } else {
        console.log('Second passed number is bigger')
    }
}

// WHAT HAPPENS IF WE PASS TWO EQUAL NUMBERS?

// If you don't know how many parameters you'll need
const monthlyBill = function(amount, ...theRest) {
    let totalBill = amount;

    theRest.forEach((value) => {
        totalBill += value;
    })

    return totalBill;
}
monthlyBill(10.50, 3.70, 20) // Return 34.2
monthlyBill(10.50, 3.70, 20, 7.5, 23.55) // Return 65.25

// Reading parameters from object
let myData = (params) => {
    const {name, surname, isActive} = params;

    console.log(name)
    console.log(surname)
    console.log(isActive)
}

myData({name: 'Ed', surname: 'Pūce', isActive:true});
// This will console log:
// Ed
// Pūce
// true
```

### JavaScript prototypes - group of properties and actions that can be executed on the corresponding type

* Built in
  * Object
  * Array
  * Function
  * Number
  * Date

* Create your own
```JavaScript
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

    this.getPassword = function() {
        console.log(this.password);
    }
}

let userNr1 = new User("Ed", "edm.puce@gmail.com", "qwerty");

userNr1.getPassword();
// This will console log the password: qwerty


// Extend User class allows us to implement all the same things that are there
function Admin() {
    User.apply(this, arguments);

    this.isAdmin = true;
    
    this.notifyAdmin = () => {
        console.log("Hey " + this.username, " you " + this.isAdmin ? "" : "don't " + "have admin tights");
    }
}
```

### Checkup
1. create a loop that prints every second number starting from 10 and ending with 20
2. loop thru an array and print out it's content
3. modify array of numbers by multiplying the numbers by itself
4. Declare a function that can be called even if it's defined after it is called
5. define a function that can be called only after it has been declared
6. create an arrow function with two or more parameters
7. create a function with unknown amount of parameters
8. create a function that accepts object as an parameters and reads assigns it's key/value pairs to function variables
9. Use two of built in prototype functions
10. Create your own prototype
    1. create new instance
    2. call a function from it 