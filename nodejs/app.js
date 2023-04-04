// require is the package which we will use and express is the package which we have to import to our file
var express = require("express");

//cross-origin sharing.
var cors = require("cors");
var mysql = require("mysql");
var userRoutes = require("./routes/user.route");
// we create a new server with this command:
var app = new express();

app.use(express.json());

// this is for security reasons. We want to allow communicate two servers of vue app and nodejs server
// app.use(cors);

var router = express.Router();

// router.get("/api/users", function (r, response) {
//   // to send data back
//   var users = [
//     {
//       id: 1, //this must be unique
//       avatar:
//         "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
//       name: "Jim Jimmies",
//       // isSelected: false,
//     },
//     {
//       id: 7,
//       avatar: "https://www.w3schools.com/howto/img_avatar.png",
//       name: "Jack Jimmies",
//       // isSelected: true,
//     },
//     {
//       id: 10,
//       avatar: "https://www.w3schools.com/howto/img_avatar2.png",
//       name: "Jamson Jimmies",
//       // isSelected: false,
//     },
//     {
//       id: 2,
//       avatar:
//         "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
//       name: "Andy",
//       // isSelected: false,
//     },
//     {
//       id: 5,
//       avatar: "https://www.w3schools.com/howto/img_avatar.png",
//       name: "Johnie Jimmies",
//       // isSelected: false,
//     },
//   ];
//   response.send(JSON.stringify(users));
// });

// we will get some kind of response which will be handled inside the function
router.get("*", function (reject, response) {
  // we should see this in the console
  console.log("Response was sent to the browser");
  // we should see this response in the browser
  response.send("You access the node server");
});

// gloueing together that's is coming from routes file, the beginning of url will be /api/users
app.use("/api/users", userRoutes);
// our app will use the router in all the cases that will be performed. First argument of * means in what case (wild card value)
app.use(router);

// we need to create a new database connection, trigger it and allow it to be used
var db = mysql.createConnection({
  // all of us will connect to the same database, each of us will create separate database table and store the data there
  host: "104.248.125.41",
  user: "user-she-goes-tech",
  password: "password-she-goes-tech",
  database: "she-goes-tech",
});

db.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to database");
  }
});

// we start our server. function is for what we will do once successful
app.listen(8002, function () {
  // now console will be the terminal, not the browser as before
  console.log("Served is up on http://localhost:8002");
});

// this database we created db we are exporting with the same name
exports.db = db;
