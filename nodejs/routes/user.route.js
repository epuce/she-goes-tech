// we will specify our routes
var express = require("express");
var router = express.Router();
var app = require("../app");

function runSql(sql, response) {
  app.db.query(sql, function (error, data) {
    var returnData = {};

    if (error) {
      returnData.error = error;
    } else {
      returnData.data = data;
    }

    response.send(JSON.stringify(returnData));
  });
}

// here we need to specify ids and the methods
// /api/users-->with GET method
// to read something
router.get("", function (_, response) {
  // * means we select the all the columns in the table we created
  var sql = "SELECT * FROM `neringa1991-users`";
  var sql = "SELECT * FROM `neringa1991-comments`";
  // below will allow to get only id and first_name
  // var sql = "SELECT id, first_name FROM `neringa1991-users`";

  // returned object key will be changed from first_name to name
  // var sql = "SELECT id, first_name AS name FROM `neringa1991-users`";

  // we can concatinate two columns values and return one column full_name with concatinated value
  // var sql =
  //   'SELECT id, first_name AS name, CONCAT (first_name, " ",last_name) as full_name FROM `neringa1991-users`';

  runSql(sql, response);
});

// /api/users/:id-->with GET
// we need request beause we will read an id
router.get("/:id", function (request, response) {
  var sql = "SELECT * FROM `neringa1991-users` WHERE id=" + request.params.id;
  var sql =
    "SELECT * FROM `neringa1991-comments` WHERE id=" + request.params.id;
  runSql(sql, response);
});

// /api/users/:id-->DELETE method
// to delete something
router.delete("/:id", function (request, response) {
  // if there was an user with ID and it was removed, that ID will not be given to any other user we will add in the future. Even if we would clean all the table, in the memory IDs would remain and wouldn't be used
  var sql = "DELETE FROM `neringa1991-users` WHERE id=" + request.params.id;
  var sql = "DELETE FROM `neringa1991-comments` WHERE id=" + request.params.id;

  runSql(sql, response);
});

// /api/users/:id-->PUT
// to update something
router.put("/:id", function (request, response) {
  var {first_name, last_name, email} = request.body;
  var {comment, user_id} = request.body;
  // we can specify only a few keys, don't need to update the whole user

  var sql =
    `UPDATE \`neringa1991-users\` 
    SET first_name="` +
    first_name +
    `", last_name="` +
    last_name +
    `", email="` +
    email +
    `" 
    WHERE id=` +
    request.params.id;

  var sql =
    `UPDATE \`neringa1991-comments\` 
    SET comment="` +
    comment +
    `", user_id="` +
    user_id +
    `"
    WHERE id=` +
    request.params.id;

  runSql(sql, response);
});

// /api/users -> POST
// to create something e.g., data in empty table
router.post("", function (request, response) {
  // var first_name = request.body.first_name;
  // var last_name = request.body.last_name;
  // var email = request.body.email;

  // the below one is exactly the same as the above 3 lines
  var {first_name, last_name, email} = request.body;
  var {comment, user_id} = request.body;
  // script to add data
  var sql =
    `INSERT INTO \`neringa1991-users\`
        (first_name, last_name, email)
        VALUES("` +
    first_name +
    `","` +
    last_name +
    `","` +
    email +
    `")
    `;

  var sql =
    `INSERT INTO \`neringa1991-comments\`
        (comment, user_id)
        VALUES("` +
    comment +
    `","` +
    user_id +
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
