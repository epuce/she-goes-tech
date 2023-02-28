[1,2,3].forEach(function() {
    console.log("Following numbers")
})

function Myname (name){
    console.log("My name is "+ name)
}

function theSum (a, b){
    return a+b;
}


const theSumAll = function(amount, ...theRest) {
    var total = theRest.reduce((acc, value) => {
        return acc += value;
    }, amount)
}
return total;


function sumOfAll(...params){
    var sum =0;

    params.forEach(function(num)){
        sum= sum + sum;
    }
}

var user = {
    name: "Alina",
    surname: "Lucane",
}

var sayHiTo= function(user) {
    var {name, surname} = user;

    console.log("Hi "+ name + " "+ surname);
}
