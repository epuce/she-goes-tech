for (var i=10; i<=20; i=i+2) {
    console.log(i)
}

var names = ["John", "Jane", "Jim", "Jennifer", "Jack"];

names.forEach(function(name) {
    console.log(name)
}
)
/* another option how to write the same thing
["John", "Jane", "Jim", "Jennifer", "Jack"].forEach(function(name) {
    console.log(name)
}
)*/

[12, 23, 34, 55, 37, 78].map(function(num) {
    return num**2
})

var array = [];

while(array.length<5) {
    array.push(Math.random())
}