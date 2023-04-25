var express = require('express');
var router = express.Router();
var app = require('../app');

router.get('', (request, response)=>{

    var sql = `CREATE TABLE IF NOT EXISTS \`VaidaLinkuviene-meals\` 
    (name VARCHAR(255), 
    description TEXT, 
    price INT, 
    allergens TEXT, 
    category_id INT,
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY(id)
    )`

    var sql = `ALTER TABLE \`VaidaLinkuviene-meals\` MODIFY COLUMN price DOUBLE NOT NULL`

    
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