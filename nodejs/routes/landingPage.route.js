var express = require("express");
var router = express.Router();

var landingPageController = require("../controllers/landingPage.controller");

router.get("", landingPageController.list);

router.get("/:id", landingPageController.findUser);

router.delete("/:id", landingPageController.delete);

router.put("/:id", landingPageController.update);

router.post("", landingPageController.save);

module.exports = router;
