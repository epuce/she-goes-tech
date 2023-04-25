var express = require('express')
var router = express.Router()
var userController = require('../controllers/user.controller')

// /api/users -> GET
router.get('', userController.list)

// /api/users -> /:id -> GET
router.get('/:id', userController.findUser)

// /api/users -> /:id -> DELETE
router.delete('/:id', userController.delete)

// /api/users -> /:id -> PUT
router.put('/:id', userController.update)

// /api/users -> POST
router.post('', userController.save)

module.exports = router