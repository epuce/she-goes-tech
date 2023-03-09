//task-1 --> built in prototype functions
var randomNumber = Math.random();

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.length);

//task-2 --> Create your own prototype
function Dish (name, duration, complexityLevel, listOfIngredients) {
    this.name = name;
    this.duration = duration;
    this.complexityLevel = complexityLevel;
    this.listOfIngredients = listOfIngredients;

    this.nameTheDish = function() {
        return 'This is a ' + this.name;
    }

}

var soup = new Dish ('mashroom soup', '20min', 3, ['mashrooms', 'cheese', 'ham']);
soup.nameTheDish();

//task-3 --> Create an other prototype that extends the previous one
function Vegan () {
    Dish.apply(this, arguments);
    this.Vegan = true;
}

var vegan = new Vegan(['mashrooms', 'cheese'], 7);