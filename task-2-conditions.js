//Write a if/else condition where if variable money is bigger than 0 we print out You have *money*$ else print out You have no money
let money = 100;
if (money > 0) {
    alert ("You have *money*$");
    console.log("You have *money*$");
} else {
    alert ("You have no money")
    console.log("You have no money")     
};



//write a switch where the passed parameter is animal and based on the value we return *animal name* say *animal noise*
var animal = "dog";
switch(animal) {
    case "dog":
    console.log("Dog says woof");
    break;
    case "cat":
    console.log("Cat says meow");
    break;
    case "cow":
    console.log ("Cow says moo");
    break;
    default:
    console.log ("There is an unrecognizable sound");
    break;
};

//Write a condition that uses the AND symbol
var a = 5; 
var b = 10;
(a != b) && (a < b);



//Write a condition that uses the OR symbol
var balticCountry =  "Lithuania";
if (balticCountry === "Lithuania" || balticCountry === "Latvia" || balticCountry === "Estonia"){
    console.log("Let's visit Baltics!");
} else {
    console.log("Let's visit some other country!");
}
