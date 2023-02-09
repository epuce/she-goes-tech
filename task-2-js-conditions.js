let money = 1;
(money>0) ? console.log(`You have ${money}$`) : console.log("You have no money");


let animal = "dog";
switch (animal) {
    case "cat":
        console.log (`${animal} says meow`);
    break;
    case "dog":
        console.log (`${animal} says woof`);
    break;
    default:
        console.log("I don't know what kind of animal this is");
};

let numberOfBreadSlices = 1;
let numberOfHamSlices = 1;
numberOfBreadSlices>0 && numberOfHamSlices>0 ? console.log ('You can make a sandwich!') : console.log("No sandwich for you");

let numberOfWaterGlasses = 1;
let numberOfColaGlasses = 1;
numberOfWaterGlasses>0 || numberOfColaGlasses>0 ? console.log ('You have something to drink') : console.log("There is no drink for you");