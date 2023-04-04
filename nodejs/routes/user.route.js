// we will specify our routes
var express = require("express");
var router = express.Router();

// here we need to specify ids and the methods
// /api/users-->with GET method
router.get("", function (_, response) {
  response.send("Will send user list");
});
// /api/users/:id-->with GET
router.get("/:id", function (request, response) {
  response.send("Will send an user with id: " + request.params.id);
});
// /api/users/:id-->DELETE method
// /api/users/:id-->PUT
// /api/users-->POST

module.exports = router;
