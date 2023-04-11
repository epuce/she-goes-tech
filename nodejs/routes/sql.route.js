var express = require ('express')
var router = express.Router()
var app = require('../app')

/*through this link we are gone execute sql comands, that we will execute eher*/
/* var sql is written in sql*/
router.get('', function(request, response){
    
    var sql = 'CREATE TABLE IF NOT EXISTS `IevaZR-users` (first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))'
    
    /*add a new column to the table*/
    var sql = 'ALTER TABLE `IevaZR-users` ADD (last_name VARCHAR(255))'

    var sql = 'CREATE TABLE IF NOT EXISTS `IevaZR-comments` (comment TEXT, user_id INT, id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))'
    //type TEXT can store up to 2KB of memory usage, type INT - number

    var sql = 'ALTER TABLE `IevaZR-comments` MODIFY COLUMN user_id INT NOT NULL'

    var sql = 'INSERT INTO `IevaZR-comments` (user_id, comment) VALUES (1, "This is a cool comment"), (1, "Some other comment"), (2, "User two comment")'

    var sql = 'SELECT * FROM `IevaZR-comments`'

    var sql = 'UPDATE `IevaZR-comments` SET comment="New comment" WHERE user_id=1'

    var sql = 'DELETE FROM `IevaZR-comments` WHERE user_id=2'

    app.db.query(sql, function(error, data) {
        var responseData = {}

        if(error) {
            responseData.error = error
        } else {
            responseData.data = data
        }
        response.send(JSON.stringify(responseData))
    })
    
})

module.exports = router;