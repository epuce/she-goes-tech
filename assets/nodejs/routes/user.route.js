const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); 

router.post('/add', userController.add);

router.get('/list', userController.list);

module.exports = router;
