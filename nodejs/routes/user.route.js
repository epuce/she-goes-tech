var express = require('express')
var router = express.Router()
var app = require('../app')

function runSql(sql, response) {
    app.db.query(sql, function(error, data) {
        var returnData = {}

        if (error) {
            returnData.error = error
        } else {
            returnData.data = data
        }
        
        response.send(JSON.stringify(returnData))
    })
}

// /api/users -->GET
router.get('', function(_, response) {
    var sql = 'SELECT id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name FROM `ligasteinberga-users`'

    runSql(sql, response)
})

// /api/users/:id -->GET
router.get('/:id', function(request, response) {
    var sql = 'SELECT * FROM `ligasteinberga-users` WHERE id='+request.params.id

    runSql(sql, response)
})

// /api/users/:id ---> DELETE
router.delete('/:id', function(request, response) {
    var sql = 'DELETE FROM `ligasteinberga-users` WHERE id='+request.params.id
    runSql(sql, response)
} )

// /api/users/:id -->PUT
router.put('/:id', function(request, response) {
    var {first_name, last_name, email} = request.body;
    var sql = 'UPDATE `ligasteinberga-users` SET first_name="'+first_name+'", last_name="'+last_name+'", email="'+email+'" WHERE id='+request.params.id;
    runSql(sql, response)

} )

// /api/users -->POST
router.post('', function(request, response) {
    var {first_name, last_name, email} = request.body;
    var sql = 'INSERT INTO `ligasteinberga-users` (first_name, last_name, email) VALUES("'+first_name+'", "'+last_name+'", "'+email+'")';

    app.db.query(sql, function(error, data) {
        var returnData = {}

        if (error) {
            returnData.error = error
        } else {
            returnData.data = data
        }
        
        response.send(JSON.stringify(returnData))
    })  
    
} )

module.exports = router
