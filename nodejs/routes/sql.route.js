var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function (request, response) {
    var sql = 'CREATE TABLE IF NOT EXISTS `buraityte-users` (first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))'

    var sql = `ALTER TABLE \`buraityte-users\` ADD (
        last_name VARCHAR(255)
    )`
    
    pp.db.query(sql, function(error, data) {
        var responseData = {}

        if (error) {
            responseData.error = error
        } else {
            responseData.data = data
        }

        response.send(JSON.stringify(responseData))
    })    
})

// through this link we will trigger SQL commands. SQL helps communicate with the database
// SQL is in all capitals
// if we want to make sql multiline, we use `` instead of ''
module.exports = router; 