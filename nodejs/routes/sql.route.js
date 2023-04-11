var express = require('express')
var router = express.Router()
var app = require('../app')

router.get('', function(request, response){
    var sql = 'CREATE TABLE IF NOT EXISTS `godakond-users` (first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))'
    var sql = `ALTER TABLE \`godakond-users\` ADD (
        last_name VARCHAR(255)
    )`

    var sql = `CREATE TABLE IF NOT EXISTS \`godakond-comments\` (
        comment TEXT,
        user_id INT,
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )`

    var sql = `ALTER TABLE \`godakond-comments\` MODIFY COLUMN user_id INT NOT NULL`

    var sql = `INSERT INTO \`godakond-comments\` (user_id, comment)
        VALUES (1, "First comment"), (1, "Second comment"), (3, "Third comment")
        `
 
    var sql = 'SELECT * FROM `godakond-comments`'

    //var sql = 'SELECT comment, user_id FROM `godakond-comments`'

    var sql = `UPDATE \`godakond-comments\` 
        SET comment="New value"
        WHERE user_id=1
        `
    var sql = 'DELETE FROM `godakond-comments` WHERE id=1'

    app.db.query(sql,function(error,data){
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