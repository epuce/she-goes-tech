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

exports.findUser = function (request, response) {
  var sql = "SELECT * FROM `neringa1991-offers` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.list = function (request, response) {
  var sql = "SELECT * FROM `neringa1991-offers`";

  runSql(sql, response);
};

exports.delete = function (request, response) {
  var sql = "DELETE FROM `neringa1991-offers` WHERE id=" + request.params.id;

  runSql(sql, response);
};

exports.update = function (request, response) {
  var {user_name, email, special_offers, offer_cycle} = request.body;

  var sql =
    `UPDATE \`neringa1991-offers\`
    SET user_name="` +
    user_name +
    `", email="` +
    email +
    `", special_offers="` +
    special_offers +
    `", offer_cycle="` +
    offer_cycle +
    `", 
    WHERE id=` +
    request.params.id;

  runSql(sql, response);
};
exports.save = function (request, response) {
  var {user_name, email, special_offers, offer_cycle} = request.body;

  var sql =
    `INSERT INTO \`neringa1991-offers\`
          (user_name, email, special_offers, offer_cycle)
          VALUES("` +
    user_name +
    `","` +
    email +
    `","` +
    special_offers +
    `","` +
    offer_cycle +
    `")
      `;
  runSql(sql, response);
};
