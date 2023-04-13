var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response) {
    var sql = `CREATE TABLE IF NOT EXISTS \`edmunds.puce-users\` (
        first_name VARCHAR(255),
        email VARCHAR(255),
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )`

    var sql = `ALTER TABLE \`edmunds.puce-users\` ADD (
        last_name VARCHAR(255)
    )`

    var sql = `CREATE TABLE IF NOT EXISTS \`edmunds.puce-comments\` (
        comment TEXT,
        user_id INT,
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )`

    var sql = `ALTER TABLE \`edmunds.puce-comments\` MODIFY COLUMN user_id INT NOT NULL`

    var sql = `INSERT INTO \`edmunds.puce-comments\` (user_id, comment)
        VALUES
        (1, "Yea this is a cool comment"),
        (1, "Some other comment"),
        (2, "User two comment")
    `

    var sql = 'SELECT * FROM `edmunds.puce-comments`'

    // var sql = 'SELECT comment, user_id FROM `edmunds.puce-comments`'

    var sql = `UPDATE \`edmunds.puce-comments\`
        SET comment="Some new value"
        WHERE user_id=1
    `

    var sql = 'DELETE FROM `edmunds.puce-comments` WHERE id=1'

    var sql = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'edmunds.puce-users'"

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