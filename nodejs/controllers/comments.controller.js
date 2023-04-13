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

exports.list = function (request, response) {
  var sql = "SELECT * FROM `viola.pumpure-comments`";

  runSql(sql, response);
};

exports.findUser = function (request, response) {
  var sql =
    "SELECT * FROM `viola.pumpure-comments` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.delete = function (request, response) {
  var sql =
    "DELETE FROM `viola.pumpure-comments` WHERE id=" + request.params.id;
  runSql(sql, response);
};

exports.update = function (request, response) {
  var { comment, user_id } = request.body;

  var changeValues = "";

  if (comment) {
    changeValues += `comment="` + comment + `"`;
  }
  if (user_id) {
    changeValues += `user_id="` + user_id + `"`;
  }

  if (changeValues.length === 0) {
    response.send(
      JSON.stringify({
        error: "You have to provide at least one valid value",
      })
    );
  }

  var sql =
    `UPDATE \`viola.pumpure-comments\` 
    SET ` +
    changeValues +
    `
    WHERE id=` +
    request.params.id;

  runSql(sql, response);
};

// TODO: change to have the correct logic
exports.save = function (request, response) {
  var { comment, user_id } = request.body;

  var sql =
    `
        INSERT INTO \`viola.pumpure-comments\`
        (comment, user_id)
        VALUES("` +
    comment +
    `","` +
    user_id +
    `")
    `;

  runSql(sql, response);
};
