var money = 0;

if (money > 0) {
    alert("You have " + money + "$")
} else {
    alert("You have no money")
}

var animal = "spider";

switch(animal) {
    case "dog":
        alert("Dog says wooof")
        break
    case "cat":
        alert("Cat says mooow")
        break
    case "cow":
        alert("Cow says moo")
        break
    default:
        alert("This animal does not speak")
}

10 > 5 && 10 > 0
true || false

if (10 > 5 && 10 > 0) {
    alert("10 is bigger than 5 AND 0")
} else if (true || false) {
    alert("If one is true, the whole block is true")
}
