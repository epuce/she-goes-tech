var express = require('express');
var router = express.Router();
var app = require('../app');
var commentController = require('../controllers/comment.controller')

router.get('', (request, response)=>{
    var sql = `CREATE TABLE IF NOT EXISTS \`VaidaLinkuviene-users\` (first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))`

    var sql = `ALTER TABLE \`VaidaLinkuviene-users\` ADD (last_name VARCHAR(255))`
    
    var sql = `CREATE TABLE IF NOT EXISTS \`VaidaLinkuviene-comments\` 
    (id INT NOT NULL AUTO_INCREMENT, 
        user_id INT, 
        comment TEXT,
        PRIMARY KEY (id)
    )`

    var sql = "INSERT INTO `VaidaLinkuviene-comments` (comment, user_id) VALUES ('Comment for user 1', 1), ('Other comment for user 1', 1), ('Comment for user 2', 2)"

    var sql = "SELECT * FROM `VaidaLinkuviene-comments`"

    var sql = "UPDATE `VaidaLinkuviene-comments` SET comment='Updated comment for user 1' WHERE id=2"

    var sql = "DELETE FROM `VaidaLinkuviene-comments` WHERE user_id=1"
    
    app.db.query(sql, (error, data) =>{
        var responseData ={}

        if(error){
            responseData.error =error;
        }else{
            responseData.data = data;
        }
        response.send(JSON.stringify(responseData))
    })
})

module.exports = router;