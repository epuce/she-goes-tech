new Date().toISOString()
Object.values({name: "Ed", password: "test", profession: "farmer"})

function Animal() {

    this.whoAmI = () => {
        console.log("I am an animal")
    }

    this.sayHi = () => {
        console.log("Hi")
    } 
}

var someAnimal = new Animal();
someAnimal.sayHi()

function Cat() {
    Animal.apply(this, arguments);

    this.sayHi = () => {
        console.log("Hi, I am a cat")
    }
}

var someCat = new Cat();
someCat.sayHi();
someCat.whoAmI();
