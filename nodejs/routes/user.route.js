// we will specify our routes
var express = require("express");
var router = express.Router();

// here we need to specify ids and the methods
// /api/users-->with GET method
router.get("", function (_, response) {
  var sql =
    'SELECT id, first_name AS name, CONCAT(first_name, "", last_name) AS full_name FROM `neringa-nedzinskiene`';
  runSql(sql, response);
});
// /api/users/:id-->with GET
router.get("/:id", function (request, response) {
  var sql =
    "SELECT*FROM `neringa-nedzinskiene-users` where id=" + request.params.id;

  runSql(sql, response);
});

// /api/users/:id-->DELETE method
router.delete("/:id", function (request, response) {
  var sql =
    "DELETE FROM `neringa-nedzinskiene-users` WHERE id=" + request.params.id;
  runSql(sql, response);
});

// router.delete("/:id", function (request, response) {
//   response.send(
//     "Will update user with id:  " +
//       request.params.id +
//       ". With data:" +
//       JSON.stringify(request.body)
//   );
// });
// /api/users/:id-->PUT

router.put("/:id", function (request, response) {
  // response.send(
  //   "Will update user with id: " +
  //     request.params.id +
  //     ". With data:" +
  //     JSON.stringify(request.body)
  // );
  var {first_name, last_name, email} = request.body;
  var sql =
    `UPDATE \'neringa-nedzinskiene-users\' SET first_name="` +
    first_name +
    `", last_name="` +
    last_name +
    `", email="` +
    email +
    `" WHERE id=` +
    request.params.id;

  runSql(sql, response);
});
// /api/users -> POST
router.post("", function (request, response) {
  var first_name = request.body.first_name;
  var last_name = request.body.last_name;
  var email = request.body.email;

  var {first_name, last_name, email} = request.body;

  var sql =
    `
        INSERT INTO \`edmunds.puce-users\`
        (first_name, last_name, email)
        VALUES("` +
    first_name +
    `","` +
    last_name +
    `","` +
    email +
    `")
    `;

  app.db.query(sql, function (error, data) {
    var returnData = {};

    if (error) {
      returnData.error = error;
    } else {
      returnData.data = data;
    }

    response.send(JSON.stringify(returnData));
  });
});
// /api/users-->POST

module.exports = router;
