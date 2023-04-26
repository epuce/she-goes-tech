var express = require('express')
var router = express.Router()
var userController = require('../controllers/user.controller')

router.get('', userController.list)
router.get('/:id', userController.findUser)
router.delete('/:id', userController.delete)
router.put('/:id', userController.update)
router.post('', userController.save)

module.exports = router