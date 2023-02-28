// Task1

var arr = ['a', 'b', 'c'];
arr.forEach(function(){
    console.log("Laba diena")
})

// Task2

function greeting(){
    console.log("Ahoy");
}

greeting();

// Task3
function sumOfNumbers(a, b){
    return a+b;
}

sumOfNumbers(1, 2);

// Task4
function sumUp( ...theRest){
    var sum = theRest.reduce(function(acc, value){
        return acc + value;
    }, 0)

    return sum;
}

sumUp(10,20,30,50,60,70);

function sumOfAll(...params){
    var sum=0;
    params.forEach(function(num){
        sum = sum +num;
    })
    console.log(sum)
}




// Task5
var vaida={
    name: 'Vaida',
    age:34,
    country: "Lithuania"
}

var myData = (params) => {

    const {name, age, country} = params;

    console.log(name, age, country)
}
myData(vaida);



