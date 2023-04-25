var express = require('express')
var cors = require('cors')
var mysql = require('mysql')
var userRoutes = require('./routes/user.route')
var sqlRoutes = require('./routes/sql.route')

var app = new express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5174',
    origin: true,
}))

var router = express.Router()

router.get('*', function(reject, response) {
    console.log('Response was sent to the browser')
    response.send('You accessed the node server')
})

app.use('/api/users', userRoutes)
app.use('/api/sql', sqlRoutes)
app.use(router)

var db = mysql.createConnection({
    host: '104.248.125.41',
    user: 'user-she-goes-tech',
    password: 'password-she-goes-tech',
    database: 'she-goes-tech',
})

db.connect(function(error) {
    if(error) {
        console.log(error)
    } else {
        console.log('Connected to database')
    }
})

app.listen(8003, function() {
    console.log('Server is up on http://localhost:8003')
})

exports.db = db