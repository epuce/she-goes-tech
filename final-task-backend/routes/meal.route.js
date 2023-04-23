var express = require('express');
var router = express.Router();
var app = require('../app');
var mealController = require('../controllers/meal.controller')

// /api/users -> GET
router.get('', mealController.list);
//  /api/users -> /:id -> GET
router.get('/:id', mealController.findMeal);
// /api/users -> /:id -> DELETE
    router.delete('/:id', mealController.delete)
// /api/users -> /:id -> PUT
router.put('/:id', mealController.update);
// /api/users -> POST
router.post('', mealController.save);

module.exports = router