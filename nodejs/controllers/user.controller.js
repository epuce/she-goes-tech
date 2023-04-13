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
// we want to retrieve the list
exports.list = function (request, response) {
  var sql = "SELECT * FROM `neringa1991-users`";

  runSql(sql, response);
};
// we use prefix find when we don't know if the user exist or not. with "get"
exports.findUser = function (request, response) {
  var sql = "SELECT * FROM `neringa1991-users` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.delete = function (request, response) {
  var sql = "DELETE FROM `neringa1991-users` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.update = function (request, response) {
  var {first_name, last_name, email} = request.body;

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

  runSql(sql, response);
};
exports.save = function (request, response) {
  var {first_name, last_name, email} = request.body;

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
  runSql(sql, response);
};
