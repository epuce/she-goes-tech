var express = require('express')
var router = express.Router()
var app = require('../app')
var subscribersController = require('../controllers/subscribers.controller')

// /api.users/ -> GET
router.get('', subscribersController.list)
// /api/users/ -> :id -> GET
router.get('/:id', subscribersController.findUser)
// /api/users/ -> :id -> DELETE
router.delete('/:id', subscribersController.delete)
// /api/users/ -> :id -> PUT
router.put('/:id', subscribersController.update)
// /api/users/ -> POST
router.post('', subscribersController.save)

module.exports = router