var car = {
    model: "BMW",
    age: 5
}


var carNr1 = {
    model: "Tesla",
    color: "white",
}

Object.assign(car, carNr1)

function Car(model, color, age) {
    this.model = model
    this.color = color
    this.age = age

    this.carColor = function() {
        return "All my cars I like to be " + this.color
    }

    this.yearsMade = function () {
        var thisYear = new Date().getFullYear() - this.age
        return this.model + " was made in " + thisYear
}
}

var carNr1 = new Car("BMW", "white", 5);
carNr1.carColor();
carNr1.yearsMade();

function FavCar(){
    Car.apply(this, arguments)

    this.isFavCar = true;

    this.carColor = function(){
        return this.color + " is my happy color"
    }

}

var favCar1 = new FavCar ("Audi", "black")
favCar1.carColor()