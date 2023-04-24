### JavaScript prototypes - group of properties and actions that can be executed on the corresponding type

* Built in
  * Object
  * Array
  * Function
  * Number
  * Date

* Create your own
```JavaScript
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

    this.getPassword = function() {
        console.log(this.password);
    }
}

let userNr1 = new User("Ed", "edm.puce@gmail.com", "qwerty");

userNr1.getPassword();
// This will console log the password: qwerty


// Extend User class allows us to implement all the same things that are there
function Admin() {
    User.apply(this, arguments);

    this.isAdmin = true;
    
    this.notifyAdmin = () => {
        console.log("Hey " + this.username, " you " + this.isAdmin ? "" : "don't " + "have admin tights");
    }
}
```

### Checkup

### add a new file named task-12.js where all these actions will be performed

1. Use two of built in prototype functions
2. Create your own prototype
    1. create new instance
    2. call a function from it
3. Create an other prototype that extends the previous one
    1. Overwrite an existing functions
    2. Create a new instance and call the function that was declared in the parent prototype and the one that was newly created