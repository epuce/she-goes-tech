var express = require('express');
var router = express.Router();
var app = require('../app');

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

    var sql = `CREATE TABLE IF NOT EXISTS \`VaidaLinkuviene-meals\` 
    (name VARCHAR(255), 
    description TEXT, 
    price INT, 
    allergens TEXT, 
    category_id INT,
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY(id)
    )`

    var sql = `CREATE TABLE IF NOT EXISTS \`VaidaLinkuviene-categories\` 
    (category VARCHAR(255), 
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY(id)
    )`

    
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