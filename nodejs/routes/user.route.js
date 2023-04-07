var express = require('express')
var router = express.Router()
var app = require('../app')

// /api/users -> GET
router.get('', function(_, response) {
    response.send("Will send user list")
})
// /api/users -> /:id -> GET
router.get('/:id', function(request, response) {
    response.send("Will send an user with id: " + request.params.id)
})
// /api/users -> /:id -> DELETE
router.delete('/:id', function(request, response) {
    response.send("Will delete user with id: " + request.params.id)
})
// /api/users -> /:id -> PUT
router.put('/:id', function(request, response) {
    response.send("Will update user with id: " + request.params.id + ". With data:" + JSON.stringify(request.body))
})
// /api/users -> POST
router.post('', function(request, response) {
    var fist_name = request.body.first_name
    var last_name = request.body.last_name
    var email = request.body.email

    var {first_name, last_name, email} = request.body;

    var sql = `
        INSERT INTO \`KristePe-users\`
        (first_name, last_name, email)
        VALUES("`+first_name+`","`+last_name+`","`+email+`")
    `

    app.db.query(sql, function(error, data) {
        var returnData = {}

        if (error) {
            returnData.error = error
        } else {
            returnData.data = data
        }

        response.send(JSON.stringify(returnData))
    })
})

module.exports = router