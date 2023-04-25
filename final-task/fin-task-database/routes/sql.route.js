var express = require('express')
var router = express.Router()
var app = require('../app')
router.get('', function(request, response) {
    
    var sql = `CREATE TABLE IF NOT EXISTS \`kristiana.tatarcuka-final-task-users\` (
            id INT NOT NULL AUTO_INCREMENT, 
            PRIMARY KEY (id), 
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            email VARCHAR(255),
            sample_option VARCHAR(255),
            sample_product VARCHAR(255)
        )`
    //--> logic is not created yet -->
    //var sql = `ALTER TABLE \`kristiana.tatarcuka-final-task-users\` MODIFY COLUMN comment TEXT`

    // var sql = 'INSERT INTO `kristiana.tatarcuka-comments` (comment, user_id) 
    //     VALUES
    //     (" This is one comment ", 1),
    //     (" This is one another comment ", 2),
    //     (" This is the last one comment ", 3)
    // '

    app.db.query(sql, function(error, data) {
        var responseData = {}

        if (error) {
            responseData.error = error
        } else {
            responseData.data = data
        }

        response.send(JSON.stringify(responseData))
    })  
    
    //response.send("SQL path works")
})

module.exports = router;