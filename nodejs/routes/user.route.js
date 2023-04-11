var express = require('express')
var router = express.Router()
var userController = require('../controllers/user.controller')

/*
we need to create new routes / APIs:
/api/users -> GET
/api/users/:id -> GET
/api/users/:id -> DELETE
/api/users/:id -> PUT
/api/users -> POST
*/

// /api/users -> GET
//router.get('', function(_, response){
    // var sql = 'SELECT id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name FROM `IevaZR-users`'
    // runSql(sql, response)
//})
// we change this function above with this one and moved the above one to user.controller.js
router.get('', userController.list)
//we could also use * to return everything available instead of id, first_name AS name, CONCAT(first_name, " ", last_name) AS full_name

// /api/users/:id -> GET
router.get('/:id', userController.findUser)
// we did the some with this function as with the above function - moved it to user.controller.js
//the part after the : is dynamic

// /api/users/:id -> DELETE
router.delete('/:id', userController.delete)
//the same as above

///api/users/:id -> PUT
router.put('/:id', userController.update)

///api/users -> POST
router.post('', userController.save)

module.exports = router