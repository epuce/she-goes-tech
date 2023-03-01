for (var i=10; i<=20; i=i+2) {
    console.log(i)
}

var list = ['ā', 'b', 'č', 'd', 'ē'];

list.forEach(function(char) {
    console.log(char)
})

['ā', 'b', 'č', 'd', 'ē'].forEach(function(char) {
    console.log(char)
})

[11,12,13,14,15].map(function(num) {
    return num**2
})

var array = [];

while(array.length<5) {
    array.push(Math.random())
}