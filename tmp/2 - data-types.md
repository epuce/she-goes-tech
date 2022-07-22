# JavaScript Data types

- All examples can be tested out in the browser console
- right click anywhere on any site, then click inspect
![img](img/browser-console.png)
- In console:
```js
typeof ""
// or
var name = "Ed";
typeof name;
```
- When checking, try to find something strange

## String
- Always within quotation marks or apostrophes
```js
const shortString = "some text" 
const longerString = 'some text other text' 
```
## Number
- Any number that does not fallow the string logic 
```js
const integer = 1
const floatingNumber = 1.009
const largeNumber = 1e2
```

## Boolean
- there are only two values that represent a positive or negative state
```js
const positive = true;
const negative = false;
```

## Array
- list of items
- Value of each key can be described with any other available type
- Each item has a row number where they are placed
- Arrays start at index 0
```js
const emptyArray = []
const arrayOfString = ["These", "are", "array", "elements"]
const mixedArray = [1,"string",true]
const multiDimensionArray = [["List", "one"], ["List", "tow"]]
```

## Object
- List of items that have a `key => value` pair mapping
- Value of each key can be described with any other available type
- Each value can be returned by it's name
```js
const obj = {name: "Edmunds", city: "Riga", loveIceCream: true}
```

## Special types
- `undefined` - describes a format when something is called, but there is no reference for it
- `null` - describes a format when something is called, the reference is there but empty
- `NaN` - describes a format where mathematical logic was applied to item that can't perform mathematical functions

## variable definition
- var
- const
- let
```js
// When using var we can redefine the same variable again with the same name
var text = "some text"
var text = "some other text"

// When using let we can assign new value to it, but can't redefine
let number = 1 
number = 2 

let number = 3 // Will result in an error

// When using const, we can't redefine or assign a new value to it
const thisIsTrue = true
thisIsTrue = true // Will result in an error
const thisIsTrue = // Will result in an error
```

## How to check if the data type is correct

# Data type checkup
- Create a new file task-2.js
- Add each previously stated data type item to the fil
- push the changes to your branch on github