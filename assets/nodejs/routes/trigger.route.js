const express = require('express');
const router = express.Router();
const triggerController = require('../controllers/trigger.controller'); 

router.post('', triggerController.trigger);

module.exports = router;
