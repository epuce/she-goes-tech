# ES5 VS ES6

- The new standard of ES6 was introduced in 2015

### variables
```JS
// ES5
var num = 1;

// ES6
let num1 = 1;
const num2 = 2;
```

### objects - variables as object key => value
```JS
var todo = 'Clean the house';
var isDone = false;

// ES5
var todoItem = { todo: todo, isDone: isDone};

// ES6
let todoItem = { todo, isDone };
```

### objects - spread operator
```JS
var user = {
    firstName: "Ed",
    lastName: "Shell"
}
var extraData = {
    age: 99,
    email: 'text@text.com'
}

// ES5
Object.assign(user, extraData)

// ES6
user = {
    ...user,
    ...extraData
}
```

### string concatenation
```JS
var age = 99;

// ES5
"I am " + age + " years old"

// ES6
`I am ${age} years old`
```

### arrow functions
```JS
function iLoveDogs() {
    console.log('I love dogs')
}

var iLoveCats = () => {
    console.log('I love cats')
} 
```

### async/await
```JS
// ES5
var data = [];
fetch('url')
.then(function(response1) => {
    return response1.json()
})
.then((response2) => {
    data = response2;
})

// ES6
var response1 = await fetch('url')
var data = await response1.json()
```

