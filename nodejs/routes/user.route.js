var express = require('express')
var router = express.Router()
var app = require('../app')

function runSql(sql, response){
    app.db.query(sql, function(error, data){
        var returnData = {}

        if(error) {
            returnData.error = error
        } else {
            returnData.data = data
        }

        response.send(JSON.stringify(returnData))
    })
}

/*
we need to create new routes / APIs:
/api/users -> GET
/api/users/:id -> GET
/api/users/:id -> DELETE
/api/users/:id -> PUT
/api/users -> POST
*/

// /api/users -> GET
router.get('', function(_, response){
    var sql = 'SELECT id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name FROM `IevaZR-users`'
    
    runSql(sql, response)
})
//we could also use * to return everything available instead of id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name

// /api/users/:id -> GET
router.get('/:id', function(request, response){
    var sql = 'SELECT * FROM `IevaZR-users` WHERE id='+request.params.id

    runSql(sql, response)
})
//the part after the : is dynamic

// /api/users/:id -> DELETE
router.delete('/:id', function(request, response){
    var sql = 'DELETE FROM `IevaZR-users` WHERE id='+request.params.id
    
    runSql(sql, response)
})

///api/users/:id -> PUT
router.put('/:id', function(request, response){
    var{first_name, last_name, email} = request.body;
    
    var sql = 'UPDATE `IevaZR-users` SET first_name="'+first_name+'", last_name="'+last_name+'", email="'+email+'" WHERE id='+request.params.id
    runSql(sql, response)
})

///api/users -> POST
router.post('', function(request, response){

    var first_name = request.body.first_name
    var last_name = request.body.last_name
    var email = request.body.email

    /*or the same in one line
    var {first_name, last_name, email} = request.body*/

    var sql = 'INSERT INTO `IevaZR-users` (first_name, last_name, email) VALUES("'+first_name+'", "'+last_name+'", "'+email+'")'

    app.db.query(sql, function(error, data){
        var returnData = {}

        if(error) {
            returnData.error = error
        } else {
            returnData.data = data
        }

        response.send(JSON.stringify(returnData))
    })
})

module.exports = router