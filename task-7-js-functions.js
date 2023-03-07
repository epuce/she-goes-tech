//Create a setup where an anonymous function is called
[1,2,3].forEach(function() {

})

//Create a setup where a declared function is called
function type() {
  console.log("your text") ;
}
var type = function() {
  console.log("your text")
}

type()

//create a function where two numbers are summed up
var sum = function(a, b) {
  console.log("the sum of these numbers is " + (a+b))
}

sum(15, 24)

//create a function with unknown amount of param.where all of them are summed up. here MS=membership
function expenses(MS, ...theRest) {
  return theRest.reduce(function(acc, MS) {
      return acc+MS
  } , MS)
}

function sumOfAll(...params) {
  var sum = 0
  params.forEach(function(num) {
      sum = sum + num;
  })
console.log("this is a" + sum)
}

//create a function that accepts object as a parameter and assigns it`s key/value pairs to function variables

var waveAt = function(user) {
  var {name, lastName} = user;
  console.log("hi " + name + lastName);
}
waveAt({name: "Sam" , lastName: "Johns"});


var Ed = {
  name: "Sam",
  lastName: "Johns"
}

waveAt(Sam)