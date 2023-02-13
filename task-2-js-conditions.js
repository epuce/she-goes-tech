var money = 500;

if (money > 0) {
    alert ("You have money")
} else {
    alert ("You have no money")
}

var animal = "cat";

switch(animal) {
    case "dog":
        alert ("Dog says woof!")
        break;
    case "cat":
        alert ("Cat says meow!")
        break;
    default:
        alert ("You are not an animal")
        break;
}

var age = 18;
var userName = "John";

if (age >= 18 && userName === "John") {
    alert ("Welcome")
} else if (age <= 18 || userName !== "John") {
    alert ("Are you realy welcome?")
} else {
    alert ("Go away!")
}