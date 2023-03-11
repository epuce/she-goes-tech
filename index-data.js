function Animal (name, age, foodList) {
    if (typeof name === 'string') {
        this.name = name 
    } else {
this.name = ""
    }
    this.age = 
    Number.isNaN(parseInt(age)) ? undefined : parseInt (age)
    this.foodList = Array.isArray(foodList) ? foodList : []

    this.sayHi = function(){
        return "Hi may name is " + this.name
    }
}





