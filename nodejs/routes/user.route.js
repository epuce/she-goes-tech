var express = require('express')
var router = express.Router()

// api/users -> GET
router.get('', function(_, response){
    response.send("Will send user list")
})
// api/users/id -> /:id -> GET
router.get('/:id', function(request, response){
    response.send("Will send an user with id: " + request.params.id)
})
// api/users/id -> /:id -> DELETE
// api/users/id -> /:id -> PUT
// api/users -> POST

module.exports = router