var money = 200
if (money > 0) {
    alert ("You have " + money + "$")
}
else { alert("No money")}



var animal = "lion, cat, snake"
switch (animal) {
    case "snake":
        alert ("Snake says ShShSh")
        break;
        case "cat":
            alert ("Cat says nau")
            break;
            default:
            alert ("This unknown animal")
            break
}


var animal = "cat,dog"
switch (animal) {
    case "dog":
        alert ("dog says woof")
        break
        case "cat":
            alert ("Cat says nau")
            break;
            default:
                alert("nobody know")
                break
}


if (animal == "dog") {
    alert ("Dog says Woof")
} else if (animal == "cat") {
    alert ("Cat says nau ") 
} else {"Nobody Knows"}



"text" === "text" || 12 == "12"
