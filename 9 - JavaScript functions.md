### JavaScript functions
* Anonymous - no name to refer to
```JavaScript
// The function that is executed is an anonymous one
[1,2,3].forEach(function() {
    console.log('Yay it works')
})
```
* Declared - there is a name to refer to
```JavaScript
// The function that is executed on the click and does not matter where in the fil it has been declared
function printNumber(num) {
    console.log('Yay it works')
}

[1,2,3].forEach(printNumber)
```
* Declared and assigned to a variable - only introduced to the scope when declared

#### Function parameters
* We can pass parameters to function to change the conditions how to execute the function
  
```JavaScript
function sayHelloTo(name) {
    alert('Hello ' + name)
}

sayHelloTo('Ed');
// This will show an alert window with text:
// Hello Ed

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
    var totalBill = theRest.reduce((acc, value) => {
        return acc += value;
    }, amount)

    return totalBill;
}
monthlyBill(10.50, 3.70, 20) // Return 34.2
monthlyBill(10.50, 3.70, 20, 7.5, 23.55) // Return 65.25

// Reading parameters from object
var myData = (params) => {
    const {name, surname, isActive} = params;

    console.log(name)
    console.log(surname)
    console.log(isActive)
}

myData({name: 'Ed', surname: 'Bravo', isActive: true});
// This will console log:
// Ed
// Bravo
// true
```
### Checkup

### add a new file named task-7-javascript-functions.js where all these actions will be performed

1. Create a setup where an anonymous function is called
2. Create a setup where a declared function is called
3. Create a function where two number are summed up 
3. Create a function with unknown amount of parameters where all of them are summed up
4. Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables