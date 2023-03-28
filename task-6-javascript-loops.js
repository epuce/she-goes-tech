for (var i=10; i<=20; i=i+2) {
    console.log(i)
}

var list = [10, 20, 30, 40, 50];
list.forEach(function(char) {
  console.log(char)
})

[2, 4, 6, 8, 10].map(function(num) {
    return num**2
})

var array = [];
while(array.length<5) {
    array.push(Math.random())
}