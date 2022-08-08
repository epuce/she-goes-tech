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
  * for/in loop [link](https://www.w3schools.com/js/js_loop_forin.asp)
  * for/of loop [link](https://www.w3schools.com/js/js_loop_forin.asp)
  * reduce loop [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
  * filter action [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * find action [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
  * findIndex action [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  * etc. 

### Checkup
1. create a loop that prints every second number starting from 10 and ending with 20
2. loop thru an array of 5 values and print out it's content
3. modify array of 5 numbers by multiplying the numbers by itself
4. Create a loop that will add 5 values to an empty array on each loop
