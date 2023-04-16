var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response){
    var sql = 'CREATE TABLE IF NOT EXISTS `ligasteinberga-users` (first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))' 

    var sql = `ALTER TABLE \`ligasteinberga-users\` ADD (last_name VARCHAR(255))`
   
    var sql = `CREATE TABLE IF NOT EXISTS \`ligasteinberga-comments\` (
       comment VARCHAR(255), 
       user_id INT, 
        id INT NOT NULL AUTO_INCREMENT, 
        PRIMARY KEY (id)
    )` 

        var sql = `ALTER TABLE \`ligasteinberga-comments\` MODIFY COLUMN user_id INT NOT NULL`

        var sql = `INSERT INTO \`ligasteinberga-comments\` (user_id, comment)
        VALUES (1, "YEAH THIS IS A COOL COMMENT"), (1, "OTHER COMMENT"), (2, "USER TWO")
        `
        var sql = 'SELECT * FROM `ligasteinberga-comments`'

        var sql = 'UPDATE `ligasteinberga-comments` SET comment="some new value" WHERE user_id=1'

        var sql = 'DELETE FROM `ligasteinberga-comments` WHERE id=1'

        var sql = 'SELECT * FROM `ligasteinberga-comments`'
        
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