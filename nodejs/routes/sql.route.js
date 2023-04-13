var express = require('express')
var router = express.Router()
var app = require('../app')


router.get('', function(request, response) {
    var sql = `CREATE TABLE IF NOT EXISTS \`KristePe-users\` (
        first_name VARCHAR(255),
        email VARCHAR(255),
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(id)
    )`

    // var sql = `ALTER TABLE \`KristePe-users\` ADD (
    //     last_name VARCHAR(255)
    // )`


    var sql = `CREATE TABLE IF NOT EXISTS \`KristePe-comments\` (
        comment VARCHAR(255),
        user_id INT,
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(id)
    )`

    var sql = `ALTER TABLE \`KristePe-comments\` MODIFY COLUMN user_id INT NOT NULL`

    var sql = `INSERT INTO \`KristePe-comments\` (user_id, comment)
    VALUES
    (1, "My first cooment"), 
    (1, "Other comment"), 
    (2, "One more")
    `
    
var sql = `SELECT * FROM \`KristePe-comments\``

// var sql = `SELECT comment, user_id FROM \`KristePe-comments\``


var sql = `UPDATE \`KristePe-comments\`
SET comment="One new comment"
WHERE user_id=1
`

var sql = `DELETE FROM \`KristePe-comments\` WHERE id=1`


var sql = 

    app.db.query(sql, function(error, data) {
        var responseData = {}

        if (error) {
            responseData.error = error
        } else {
            responseData.data = data
        }

        response.send(JSON.stringify(responseData))
    })    
})

module.exports = router;