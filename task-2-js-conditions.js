let money = 1;
(money>0) ? alert(`You have ${money}$`) : alert("You have no money");


let animal = "mouse";
switch (animal) {
    case "cat":
        alert(`cat says meow`);
    break;
    case "dog":
        alert(`dog says woof`);
    break;
    default:
        alert("I don't know what this animal says");
    break;
};

let numberOfBreadSlices = 1;
let numberOfHamSlices = 1;
numberOfBreadSlices>0 && numberOfHamSlices>0 ? alert('You can make a sandwich!') : alert("No sandwich for you");

let numberOfWaterGlasses = 1;
let numberOfColaGlasses = 1;
numberOfWaterGlasses>0 || numberOfColaGlasses>0 ? alert('You have something to drink') : alert("There is no drink for you");