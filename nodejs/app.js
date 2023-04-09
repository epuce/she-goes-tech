var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var userRoutes = require('./routes/user.route');

var app = new express();
app.use(express.json())
// app.use(cors());

var router = express.Router();

router.get('*', function(reject, response) {
    console.log('Response was sent to the browser');
    response.send("You accessed the node server");
})

app.use('/api/users', userRoutes);
app.use(router);

var db = mysql.createConnection({
    host: '104.248.125.41',
    user: 'user-she-goes-tech',
    password: 'password-she-goes-tech',
    database: 'she-goes-tech'
})

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to database")
    }
})

app.listen(8002, () => {
    console.log('Server is up on http://localhost:8002')
})

exports.db = db;