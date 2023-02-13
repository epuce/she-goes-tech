var money = 25;

if (money > 0) {
    console.log("You have" + money + " money")
}
else {
    console.log("You have no money")
}

var animal = "Cow"
switch(animal) {
    case "Cat":
        console.log("Cat says meow");
        break;
    case "Cow":
        console.log("Cow says moo");
        break;
}

var a = 1;
var b = -5;

if (a > 0 && b > 0) {
    console.log("Right")
} else {
    console.log("Wrong")
}

if (a > 0 || b > 0) {
    console.log("Right")
} else {
    console.log("Wrong")
}