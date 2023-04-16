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
  var sql = "SELECT * FROM `ligasteinberga-comments`";
  runSql(sql, response);
};

exports.findUser = function (request, response) {
  var sql =
    "SELECT * FROM `ligasteinberga-comments` WHERE id=" + request.params.id;
  runSql(sql, response);
};

exports.delete = function (request, response) {
  var sql =
    "DELETE FROM `ligasteinberga-comments` WHERE id=" + request.params.id;
  runSql(sql, response);
};

exports.update = function (request, response) {
  var { comment, user_id } = request.body;
  var changeValues = '';
  
  //if parameter is not provided, it not gonna be overwriten, thats why we use these ifs
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
    `UPDATE \`ligasteinberga-comments\` 
    SET ` +
    changeValues +
    `
    WHERE id=` +
    request.params.id;

  runSql(sql, response);
};

exports.save = function (request, response) {
  var { comment, user_id } = request.body;

  var sql =
    'INSERT INTO `ligasteinberga-comments` (comment, user_id) VALUES("' +
    comment +
    '", "' +
    user_id +
    '")';

  runSql(sql, response);
};
