const money = 10;
const animal = "cat";

if (money > 0) {
  console.log(`You have ${money}$`);
} else {
  console.log("You have no money");
}

switch (animal) {
  case "cat":
    console.log(`${animal} says meowww`);
    break;
  case "dog":
    console.log(`${animal} says auuu`);
    break;
  default:
    console.log("There's no such sound");
    break;
}

5 > 1 && 6 > 3
  ? console.log("That's correct")
  : console.log("That's not correct");
0 > 1 || 2 > 3
  ? console.log("That's correct")
  : console.log("That's not correct");
