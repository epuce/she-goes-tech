// Write a if/else condition where if variable money is bigger than 0 we print out You have *money*$ else print out You have no money

var money = 200;

if (money > 0) {
    console.log("You have " + money + "$");
} else {
    console.log("You have no money")
}

// write a switch where the passed parameter is animal and based on the value we return *animal name* say *animal noise*

var myPet = "dog";

switch (myPet) {
    case "dog":
        console.log("Dog says woof");
        break;
    case "cat":
        console.log("Cat says moow");
        break;
    case "bird":
        console.log("Bird says tweet");
        break;
    default:
        console.log("This animal does not speak");
        break;
}

// Write a condition that uses the AND symbol

var age = 27;
var money = 20;
var legalAge = 21;
var price = 5;

if (age >= legalAge && money >= price) {
    console.log("It's legal for you to buy it and you have enough money for it.");
} else {
    console.log("You can't buy it.");
}

// Write a condition that uses the OR symbol

var atHome = true;
var atWork = false;

if (atHome == true || atWork == true){
    console.log("Go for a walk!");
} else {
    console.log("Are you walking?");
}
