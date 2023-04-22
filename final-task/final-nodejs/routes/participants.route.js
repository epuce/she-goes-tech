var express = require("express");
var router = express.Router();
var participantsController = require("../controllers/participants.controller");

// /api/participants -> GET / gets a list of all users
router.get("", participantsController.list);

// /api/participants -> /:id -> GET
router.get("/:id", participantsController.findParticipant);

// /api/participants -> /:id -> DELETE
router.delete("/:id", participantsController.delete);

// /api/participants -> /:id -> PUT // Updates info
router.put("/:id", participantsController.update);

// /api/participants -> POST //Saves new participant
router.post("", participantsController.save);

module.exports = router;
