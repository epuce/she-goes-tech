var money = 10; 
if (money > 0) {
    alert ("You have *money*$")
    } else {
    alert ("You have no money")
};

var animal = "Sheep";
switch(animal) {
    case "Cow": 
       alert ("Cow says Moo")
        break;  
    case "Dog": 
        alert ("Dog says Woof")
        break;
  case "Cat": 
        alert ("Cat says Mew")
        break;
    case "Sheep":
        alert ("Sheep says Baa")
        break;
    case "Pig": 
        alert ("Pig says Oink")
        break;
    default: alert ("This animal is refusing to speak to you")
        break;
};

var name = "Matt"
var favColor = "Blue"
if (name == "Matt" && favColor == "Blue"){
    alert("Matt's fav color is blue - both correct ") 
}     else if (name == "Mat" || favColor =="Blue") {
    alert ("Either the name or the fav color is correct")
} else {
    alert ("The name and the color was wrong")
}