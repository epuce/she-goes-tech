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
### Checkup

### add a new file named task-9.js where all these actions will be performed

1. Declare a function that can be called even if it's defined after it is called
2. define a function that can be called only after it has been declared
3. create an arrow function with two or more parameters
4. create a function with unknown amount of parameters
5. create a function that accepts object as an parameters and assigns it's key/value pairs to function variables