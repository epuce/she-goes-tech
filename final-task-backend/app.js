var express = require('express');
var app = new express();
var cors = require('cors');
var mysql = require('mysql');
var mealRoutes = require('./routes/meal.route');
var sqlRoutes = require('./routes/sql.route');

app.use(express.json());
app.use(cors({
    origin:'http://localhost:8080',
    origin: true,
}));

var router = express.Router()

router.get('*', (reject, response) =>{
    console.log("Response was sent to the browser")
    response.send("You accessed the node server")
})

app.use('/api/sql', sqlRoutes);
app.use('/api/meals', mealRoutes);
app.use(router);


var db = mysql.createConnection({
    host: '104.248.125.41',
    user: 'user-she-goes-tech',
    password: 'password-she-goes-tech',
    database: 'she-goes-tech',
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Connected to database")
    }
})
app.listen(8002, () =>{
    console.log('Server is up on http://localhost:8002')
})

exports.db = db;