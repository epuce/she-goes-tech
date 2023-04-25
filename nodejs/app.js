// require is the package which we will use and express is the package which we have to import to our file
var express = require("express");

//cross-origin resource sharing.
var cors = require("cors");
var mysql = require("mysql");
var userRoutes = require("./routes/user.route");
var commentRoutes = require("./routes/comments.route");
var landingPageRoutes = require("./routes/landingPage.route");
var sqlRoutes = require("./routes/sql.route");

// we create a new server with this command:
var app = new express();

// when we are sending the data back to the server we are using JSON format, alos we are getting the JSON and this is what the below code means
app.use(express.json());

// this is for security reasons. We want to allow communicate two servers of vue app and nodejs server r.g., 8002 port server and 8084 port server
app.use(
  cors({
    // we add vue app address
    //we can specify regex for the different URLs to accept the same server
    origin: "http://localhost:8080",
    origin: true,
  })
);

var router = express.Router();

// to send some data to vue.app
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

// gloueing together what is coming from routes file, the beginning of url will be /api/users
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/landingPage", landingPageRoutes);
app.use("/api/sql", sqlRoutes);

// our app will use the router in all the cases that will be performed. First argument of * means in what case (wild card value)
app.use(router);

// we need to create a new database connection, trigger it and allow it to be used. Finding the right door
var db = mysql.createConnection({
  host: "104.248.125.41",
  user: "user-she-goes-tech",
  password: "password-she-goes-tech",
  database: "she-goes-tech",
});

// all of us will connect to the same public database, each of us will create separate database table and store your own data there. We find the correct door and key

// Unlocking the door
db.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to database");
  }
});

// we start our server. function is for what we will do once successful. We specify the port of 8002
app.listen(8002, function () {
  // now console will be the terminal, not the browser as before
  console.log("Server is up on http://localhost:8002");
});

// this database we created db we are exporting with the same name
exports.db = db;
