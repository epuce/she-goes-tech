var user={
    name: "Alina",
    email: "test@aina.com"
}

var user2={
    name: "Jon",
    email: "te45645st@gmail.com"
}
Object.assign(user,user2);
Math.floor(1.7);
Math.ceil(2,3);

function User(name, age) {
    this.name = name
    this.age = age

    this.greetings = function() {
        return "Hi, my name is" + this.name
    }

    this.isBornIn = function() {
        return "I was born in" + this.isBornIn
    } 

      
}