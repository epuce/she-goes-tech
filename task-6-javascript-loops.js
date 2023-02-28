var linda = 10;
while (linda<=20) {
    console.log (linda)
    linda=linda+2
}

var list = [1,2,3,4,5];
list.forEach (function(value) {
    console.log (value)
})

list.map (function(value) {
    return value*value
})

var empty = [];
for (let i=0; i<5; i++) {
    empty.push(5*i)
}
