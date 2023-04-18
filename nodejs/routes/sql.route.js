var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response) {
    var sql = `CREATE TABLE IF NOT EXISTS \`lindalejiete-users\` (
        first_name VARCHAR(255),
        email VARCHAR(255),
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )`

    var sql = `ALTER TABLE \`lindalejiete-users\` ADD (
        last_name VARCHAR(255)
    )` 

    var sql = `CREATE TABLE IF NOT EXISTS \`lindalejiete-comments\` (
        comment TEXT,
        user_id INT,
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )`

    var sql = `ALTER TABLE \`lindalejiete-comments\` MODIFY COLUMN user_id INT NOT NULL`

    var sql = `
            INSERT INTO \`lindalejiete-comments\`
            (comments, user_id)
            VALUES
            ("comment 1", 1),
            ("comment 2", 2),
            ("comment 3", 2) 
        `

    var sql = 'SELECT * FROM `lindalejiete-comments`'

    var sql = `UPDATE \`lindalejiete-comments\`
        SET comments="ne comment 2"
        WHERE user_id=2
        `

    var sql = 'DELETE FROM `lindalejiete-comments` WHERE user_id=1'
    

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