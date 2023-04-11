var express = require('express');
var router = express.Router();
var app = require('../app')

function runSql(sql, response){
    app.db.query(sql, (error, data)=>{
        var returnData ={}
        if(error){
            returnData.error = error;
        }else{
            returnData.data = data
        }
        response.send(JSON.stringify(returnData))
    })
}

// /api/users -> GET
router.get('', (_, response)=>{
    var sql = 'SELECT id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name FROM `VaidaLinkuviene-users`'
    runSql(sql, response)
})
//  /api/users -> /:id -> GET
router.get('/:id', (request, response) => {
    var sql = 'SELECT * FROM `VaidaLinkuviene-users` WHERE id='+request.params.id
    runSql(sql, response)
})
// /api/users -> /:id -> DELETE
    router.delete('/:id', (request, response)=>{
        var sql = 'DELETE FROM `VaidaLinkuviene-users` WHERE id=' +request.params.id;
        runSql(sql, response)
    })
// /api/users -> /:id -> PUT
router.put('/:id', (request, response)=>{
    var{first_name, last_name, email} = request.body;

    var changeValues='';
    if(first_name){
        changeValues += `first_name="`+first_name+`"`
    }
    if(last_name){
        changeValues += `last_name="`+last_name+`"`
    }
    if(email){
        changeValues += `email="`+email+`"`
    }

    var sql = `UPDATE \`VaidaLinkuviene-users\` 
    SET first_name="`+first_name+`", last_name="`+last_name+`", email="`+email+`" WHERE id=`+request.params.id;
    runSql(sql, response)
})
// /api/users -> POST
router.post('', (request, response)=>{
    var first_name = request.body.first_name;
    var last_name = request.body.last_name;
    var email = request.body.email;
    // var {first_name, last_name, email} = request.body ;

    var sql = `INSERT INTO \`VaidaLinkuviene-users\` (first_name, last_name, email)   VALUES(" `+first_name+`", "`+last_name+`", "`+email+`")`

    app.db.query(sql, (error, data)=>{
        var returnData ={}
        if(error){
        }else{
            returnData.data = data
        }
        response.send(JSON.stringify(returnData))
    })

})

module.exports = router