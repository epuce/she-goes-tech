var express = require("express");
var cors = require("cors")
var mysql = require("mysql")
var userRoutes = require('./routes/user.route')
var app = new express();
app.use(express.json())
// app.use(cors)

var router = express.Router();

router.get("/api/users", function (r, response) {
  var users = [
    {
      id: 1,
      avatar:
        "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
      name: "Jim Jimies",
    },
    {
      id: 2,
      avatar:
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
      name: "Jack Jimies",
    },
    {
      id: 3,
      avatar:
        "https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png",
      name: "Jil Jimies",
    },
    {
      id: 4,
      avatar:
        "https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png",
      name: "Andy Jimies",
    },
    {
      id: 5,
      avatar: "https://img.freepik.com/free-icon/man_318-157501.jpg",
      name: "Johnie Jimies",
    },
  ];
  response.send(JSON.stringify(users));
})

router.get("*", function (reject, response) {
    console.log("Response was send to the browser")
    response.send("You accessed node server");
  });

  app.use('/api/users', userRoutes)
app.use(router);

var db = mysql.createConnection({
    host: '104.248.125.41',
    user: 'user-she-goes-tech',
    password: 'password-she-goes-tech',
    database: 'she-goes-tech',
})
db.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Connected to database")
    }
})

app.listen(8002, function () {
  console.log("Server is up on http://localhost:8002");
});

exports.db = db