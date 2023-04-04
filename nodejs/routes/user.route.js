var express = require('express')
var router = express.Router()

// /api/users -> GET
router.get('', function (_, response) {
    response.send("Will send user list")
})
// /api/users -> /:id -> GET .... here : means it is a dynamic value
router.get('/:id', function(request, response) {
    response.send("Will send user with id: " + request.params.id)
})
// /api/users -> /:id -> DELETE
// /api/users -> /:id -> PUT
// /api/users -> POST

module.exports = router
