var express = require ('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response){

    var sql = 'CREATE TABLE IF NOT EXISTS `IevaZR-users-final-task`(username VARCHAR(255), email VARCHAR(255), special_offers TEXT, offer_cycle TEXT, id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))'

    var sql = 'INSERT INTO `IevaZR-users-final-task` (id, username, email) VALUES (1, "test1", "test@inbox.lv"), (2, "Test2", "test@test.com"), (3, "User", "e-pasts")'

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