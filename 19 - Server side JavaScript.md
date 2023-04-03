### Installing needed packages
- Create a new folder that will hold all the server side structure
- Within that folder run 
    - `npm i nodemon -g`
    - `npm i cors express mysql require`
- Create the server entry point file `app.js`
- Start the node server `nodeman app.js`
    - We use nodeman instead of node so that the server live updates when we do any changes to the files 
```JavaScript
// app.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const userRoutes = require('./routes/user.route');

const app = new express();
app.use(express.json())
app.use(cors());

const router = express.Router();

router.get('', (reject, response) => {
    console.log('Response was sent to the browser');
    response.send("Requested route does not exist");
})

app.use('/api/users', userRoutes);
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
```

```JavaScript
// route example, file: ./routes/user.route.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); 

router.post('/add', userController.add);

router.get('/list', userController.list);

module.exports = router;
```

```JavaScript
// controller example, file" ./controllers/user.controller.js
const app = require('../app');

exports.add = (request, response) => {
    // Would need to add server side validation
    const data = request.body;
    const sql = 'INSERT INTO users (username, email) VALUES("'+ data.username +'", "'+ data.email + '")';

    app.db.query(sql, (error) => {
        const responseData = {};

        if (error) {
            responseData.error = error;
        }

        response.send(JSON.stringify(responseData))
    })
}

exports.list = (request, response) => {
    const sql = `SELECT * FROM users`;
    app.db.query(sql, (error, result) => {
        response.send(JSON.stringify(result))
    })
}
```