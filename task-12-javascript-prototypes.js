//Use two of built in prototype functions
const now = new Date ()
console.log(now);

["Goda", "Ieva", "Lukas"].forEach(function (name) {
  console.log(`Hello, ${name}`);
});

//Create your own prototype: create new instance and call a function from it

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.age = function () {
        return 2023-this.birthYear;
    }
}

const Thomas = new Person ("Thomas", 1992);
Thomas.age();

//Create an other prototype that extends the previous one: Overwrite an existing functions

const IntroducePerson = function () {
    Person.apply(this, arguments);
    this.introduction = function (){
        console.log(`${this.firstName} was born in ${this.birthYear}`)
}
}
const Goda = new IntroducePerson("Goda", 1993);

Goda.age();
Goda.introduction()


