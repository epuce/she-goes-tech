// Create a setup where an anonymous function is called
["mom", "dad", "son"].forEach(function (name) {
  console.log(`Family member ${name}`);
});

// Create a setup where a declared function is called
function familyMember(name) {
  console.log(`Family member ${name}`);
}
familyMember("mom");

// Create a function where two number are summed up
function theSumOf(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (!isNaN(a) && !isNaN(b)) {
    console.log(a + b);
  } else {
    console.log("invalid input");
  }
}
theSumOf([], "1.12");

// Create a function with unknown amount of parameters where all of them are summed up

function monthlySum(number, ...numbers) {
  let total = numbers.reduce((acc, value) => {
    return (acc += value);
  }, number);
  return total;
}

const value = monthlySum(1, 1, 1, 1);
console.log(value);

// Create a function that accepts object as an parameters and assigns it's key/value pairs to function variables
var daina = {
  name: "Daina",
  occupation: "teacher",
  age: 54,
};
var gytis = {
  name: "Gytis",
  occupation: "farmer",
  age: 55,
};

function parseUser(member) {
  var {name, occupation, age} = member; //we are extracting object keys as variables
  console.log(`${name} is working as a ${occupation} and is ${age}`);
}
parseUser(daina);
