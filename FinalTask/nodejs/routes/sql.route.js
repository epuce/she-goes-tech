var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response) {
    var sql = `CREATE TABLE IF NOT EXISTS \`moharso-subscribers\` (
        username VARCHAR(255), 
        email VARCHAR(255), 
        id INT NOT NULL AUTO_INCREMENT, 
        PRIMARY KEY (id)
        )`

    var sql = `ALTER TABLE \`moharso-subscribers\` ADD (
        subscribe TINYINT(1),
        cycle VARCHAR(255)
    )`

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