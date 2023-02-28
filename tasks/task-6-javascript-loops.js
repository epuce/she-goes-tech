
//1-task
for(let i=10; i<=20; i=i+2) {
    console.log(i);
}

//2-task
var myNextArray = [0, 15, 27, 89, 50];

for (let i=0; i< myNextArray.length; i++) {
    console.log(myNextArray[i]);
}

//3-task
var myMultiArray = myNextArray.map (function(value) {
    return value * value
});

console.log(myMultiArray);

//4-task
var myArray = [];

for (i=0; i <=5; i++) {
    myArray[i] = i;
};

console.log (myArray);
