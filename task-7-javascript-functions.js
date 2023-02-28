["Tom", "Tim", "Ted"].forEach(function() {
    console.log("Hallo")
})

...

function SumOf(a, b) {
    console.log (a+b)
}

function foodBill (main, ...other) {
    return other.reduce (function (acc, main) {
        return acc + main 
    }, main)
    }

    