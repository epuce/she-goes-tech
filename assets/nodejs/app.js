const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const userRoutes = require('./routes/user.route');
const triggerRoutes = require('./routes/trigger.route');

const app = new express();
app.use(express.json())
app.use(cors());

const router = express.Router();

router.get('', (reject, response) => {
    console.log('Response was sent to the browser');
    response.send("Requested route does not exist");
})

app.use('/api/users', userRoutes);
app.use('/api/trigger', triggerRoutes);
app.use('*', router);

const db = mysql.createConnection({
    host: '104.248.125.41',
    user: 'user-she-goes-tech',
    password: 'password-she-goes-tech',
    database: 'she-goes-tech'
})

db.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log("Connected to database")
    }
})

app.listen(8002, () => {
    console.log('Server is up on http://localhost:8002')
})

exports.db = db;