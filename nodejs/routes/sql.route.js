var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function (request, response) {
    var sql = 'CREATE TABLE IF NOT EXISTS `buraityte-users` (first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))'

    var sql = `ALTER TABLE \`buraityte-users\` ADD (
        last_name VARCHAR(255)
    )`

    // var sql = 'CREATE TABLE IF NOT EXISTS `buraityte-comments` (id INT NOT NULL AUTO_INCREMENT, comment TEXT, user_id INT, PRIMARY KEY (id))'


    var sql = `CREATE TABLE IF NOT EXISTS \`buraityte-comments\` (
        comment TEXT,
        user_id INT,
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )`


    var sql = `INSERT INTO \`buraityte-comments\` (user_id, comment)
        VALUES
        (1, "Yea this is a cool comment"),
        (1, "Some other comment"),
        (2, "User two comment")
    `

    var sql = 'SELECT * FROM `buraityte-comments`'

    // var sql = `UPDATE \`buraityte-comments\`
    //     SET comment="Some new value"
    //     WHERE user_id=1
    // `

    // var sql = 'DELETE FROM `buraityte-comments` WHERE id=1'

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