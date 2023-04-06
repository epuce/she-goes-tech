var express = require("express");
var router = express.Router();
var app = require("../app");

router.get("", function (request, response) {
  //we need to specify the column name and their restrictions (Max 255). First column is first_name. Default is for these columns to be empty. NOT NULL means not empty
  var sql =
    "CREATE TABLE IF NOT EXISTS `neringa-nedzinskiene-users`(first_name VARCHAR(255), email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))";

  // To add a new column to the table
  var sql = `ALTER TABLE \`neringa-nedzinskiene-users\` ADD (
        last_name VARCHAR(255)
    )`;

  app.db.query(sql, function (error, data) {
    var responseData = {};

    if (error) {
      responseData.error = error;
    } else {
      responseData.data = data;
    }
    response.send(JSON.stringify(responseData));
  });
});

module.exports = router;
