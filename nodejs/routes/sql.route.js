var express = require ('express')
var router = express.Router()
var app = require('../app')

/*through this link we are gone execute sql comands, that we will execute eher*/
/* var sql is written in sql*/
router.get('', function(request, response){
    
    var sql = 'CREATE TABLE IF NOT EXISTS `IevaZR-users` (first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))'
    
    /*add a new column to the table*/
    var sql = 'ALTER TABLE `IevaZR-users` ADD (last_name VARCHAR(255))'

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