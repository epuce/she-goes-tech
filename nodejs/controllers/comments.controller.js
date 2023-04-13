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
  var sql = "SELECT * FROM `neringa1991-comments`";

  runSql(sql, response);
};
// we use prefix find when we don't know if the user exist or not. with "get"
exports.findUser = function (request, response) {
  var sql =
    "SELECT * FROM `neringa1991-comments` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.delete = function (request, response) {
  var sql = "DELETE FROM `neringa1991-comments` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.update = function (request, response) {
  var {comment, user_id} = request.body;

  var changeValue = "";

  if (comment) {
    changeValue += `comment="` + comment + `"`;
  }
  if (user_id) {
    changeValue += `user_id="` + user_id + `"`;
  }
  if (changeValue.length === 0) {
    response.send(
      JSON.stringify({
        error: "You have to provide one valid value",
      })
    );
  }

  var sql =
    `UPDATE \`neringa1991-comments\`
    SET  ` +
    changeValue +
    `
    WHERE id=` +
    request.params.id;

  // var sql =
  //   `UPDATE \`neringa1991-comments\`
  //   SET comment="` +
  //   comment +
  //   `", user_id="` +
  //   user_id +
  //   `"
  //   WHERE id=` +
  //   request.params.id;

  runSql(sql, response);
};

exports.save = function (request, response) {
  var {comment, user_id} = request.body;

  var sql =
    `INSERT INTO \`neringa1991-comments\`
            (comment, user_id)
            VALUES("` +
    comment +
    `","` +
    user_id +
    `")
        `;
  runSql(sql, response);
};
