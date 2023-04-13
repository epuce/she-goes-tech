var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response) {
    var sql = `CREATE TABLE IF NOT EXISTS \`moharso-users\` (
        first_name VARCHAR(255), 
        email VARCHAR(255), 
        id INT NOT NULL AUTO_INCREMENT, 
        PRIMARY KEY (id)
        )`

    var sql = `ALTER TABLE \`moharso-users\` ADD  (
        last_name VARCHAR(255)
    )`

    var sql = `CREATE TABLE IF NOT EXISTS \`moharso-comments\` (
        id INT NOT NULL AUTO_INCREMENT, 
        comment VARCHAR (800), 
        user_id VARCHAR(255), 
        PRIMARY KEY (id))`

    var sql = `INSERT INTO \`moharso-comments\` (user_id, comment) 
    VALUES 
    (1, "comm"), 
    (2, "sec comm"), 
    (3, "thr comm")
    `

    var sql = `SELECT * FROM \`moharso-comments\``

    var sql = `UPDATE \`moharso-comments\` SET comment="New comm", user_id="55" WHERE id=1`

    var sql = `DELETE FROM \`moharso-comments\` WHERE id=3`

    
    

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