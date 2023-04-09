console.log(Math.random());
console.log(Date());

function user(age, location, gender) {
  this.age = age;
  this.location = location;
  this.gender = gender;

  this.userInfo = function () {
    return "I'm " + this.age + " years old and I'm from " + this.location;
  };
}

var user1 = new user(22, "Vilnius", "female");

user1.userInfo();