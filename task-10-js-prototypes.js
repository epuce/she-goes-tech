
//  Use two of built in prototype functions
Math.random() 
Math.ceil()
Date.UTC ()


// Create your own prototype
function Participant(name, age, likeList) {
    if (typeof name ==='string') {
        this.name = name;
  } else {
      this.name =""
  }
    this.age = Number.isNaN(parseInt(age)) ? undefined : age //   this is if shorthand
    this.likeList = Array.isArray(likeList) ? likeList : []
this.sayThanks = function () {
    return "Hi, I'm " + this.name + "I like " + this.likeList
}
}
//     create new instance
var participantMatt = new Participant ("Matt", 21, ["Rock", "Metal"])

//     call a function from it
participantMatt.sayThanks
// Create an other prototype that extends the previous one

function Man () {
    Participan.apply(this, arguments)     // copy paste everything that is Animal and attach it to dog
    this.participantType = "man"    
}
function Woman () {
    Participan.apply(this, arguments)     // copy paste everything that is Animal and attach it to dog
    this.participantType = "Woman"    
}

var participantJulia = new Woman ("Julia", 25, ["Jazz", "Metal"])

var participantPeter = new Participant("Peter", 40, ["Pop"])

//     Create a new instance and call the function that was declared in the parent prototype and the one that was newly created

 
participantJulia
participantPeter


// Follow along

var user = {
    name:"Ed",
    email: "test@test.com"
}

var userJim = {
    name ="Jim",
    age: 100
}

Object.assign (user,userJim)

Math.floor(1.7)
Math.ceil(1.2)

function User(name, age) {
    this.name = name
    this.age = age

    this.sayHi = function () {
return "hello, my name is " +
    }
    this.IWasBornIn = function () {
        var thisYear = new Date().getFullYear()

        if (thisYear - this.age > 2000) {
            return "I was born after year 2000"
        } else {
          return "I was born before year 2000"
        }
    }
}


var user1 = new User("Ed", 65)
user1.sayHi ()
user1.IWasBornIn ()

function Admin () {
    User.apply(this, arguments)

    this.sayHi = function () {
        return "I don't like people" // overwriting an existing function
    }
}
var admin1 = new Admin ("Max", 43)

admin1.sayHi ()
admin1.IWasBornIn ()

