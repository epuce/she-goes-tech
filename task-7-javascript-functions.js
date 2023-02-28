["Tom", "Tim", "Ted"].forEach(function() {
    
})

function name() {
    console.log("name")
}


function SumOf(a, b) {
    console.log (a+b)
}

function foodBill (main, ...other) {
    return other.reduce (function (acc, main) {
        return acc + main 
    }, main)
    }



