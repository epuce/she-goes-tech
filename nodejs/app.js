/*technicaly with these functions we did the same as vue does when preparing a server*/
/*we will use quitea lot conosle.log, but in this case the console will be the terminal*/
/*the we boot our node server by typing in the console:
nodemon app.js
or nodemon.cmd app.js
if that function doesn't work then we will not use it, but on any change that we make, we need to manually restart the server*/
/*if previous nodemon app.js didn't work, we just write node app.js*/
/* the if we see a message Server is up on http://localhost:8002, then everything is working*/

var express = require('express')
/*require is one package that we installed and express in another one that we import in this file*/

var cors = require('cors')
/*we import cors package*/

var mysql = require('mysql')
/*we import mysql package*/
var userRoutes = require('./routes/user.route')
var sqlRoutes = require('./routes/sql.route')

var app = new express()
/*we create a new server with this command*/

app.use(express.json())
//app.use(cors)
/*commenting out just for a while*/


var router = express.Router()

// router.get('/api/users', function(r, response){
//     var users = [
//         {
//           avatar:
//             "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
//           name: "Jam Jimmies",
//           id: 1,
//         },
//         {
//           avatar:
//             "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
//           name: "Jack Jimmies",
//           id: 7,
//         },
//         {
//           avatar:
//             "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
//           name: "Jamson Jimmies",
//           id: 10,
//         },
//         {
//           avatar: "https://www.w3schools.com/howto/img_avatar2.png",
//           name: "Andy",
//           id: 2,
//         },
//         {
//           avatar: "https://www.w3schools.com/w3images/avatar2.png",
//           name: "Johnie Jimmies",
//           id: 5,
//         },
//       ];

//       response.send(JSON.stringify(users))
// })
/* we can delete this, whe we have the information in the file user.route.js*/

router.get('*', function(reject, response){
    console.log('Response was sent to the broswer')
    response.send('You accessed the node server')
})

/*now if we go to http://localhost:8002/api/users, we see the users object*/

app.use('/api/users', userRoutes)
app.use('/api/sql', sqlRoutes)
/*we specify where we will use router. in app we will use router in all calls that will be perfomed*/
app.use(router)

/*we connect to our database, create new database connection. it is a function, which accept parameter as an object*/
var db = mysql.createConnection({
    host: '104.248.125.41',
    user: 'user-she-goes-tech',
    password: 'password-she-goes-tech',
    database: 'she-goes-tech',
})

/*triggering the connection*/
db.connect(function(error){
    if(error) {
        console.log(error)
    } else {
        console.log('Connected to database')
    }
})

/*we will work with the same database, but table where we store the data will be unique for each of us*/


/*the we specify in which port the server will run. first parameter is port, the second one is function when successfull*/
app.listen(8002, function(){
    console.log('Server is up on http://localhost:8002')
})

exports.db = db
/*we are exporting db with the same name db*/

/* after that we created two new folders in nodejs - routes and controllers
in routes - a new file - use.route.js*/