var express = require("express");
var router = express.Router();
var app = require("../app");

router.get("", function (request, response) {
  //we need to specify the column name and their restrictions (Max 255). First column is first_name. Default is for these columns to be empty. NOT NULL means not empty/The identifier of the user will be PRIMARY KEY (id column)
  var sql =
    "CREATE TABLE IF NOT EXISTS `neringa1991-users`(first_name VARCHAR(255),email VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))";

  // To add a new column to the table
  var sql = "ALTER TABLE `neringa1991-users` ADD (last_name VARCHAR(255))";

  var sql =
    "CREATE TABLE IF NOT EXISTS `neringa1991-comments`(id INT NOT NULL AUTO_INCREMENT, comment VARCHAR(255),user_id VARCHAR(255), PRIMARY KEY (id))";

  app.db.query(sql, function (error, data) {
    var responseData = {};

    // with the below code we are saying that if there's is an error please return error in the response otherwise return the data that has been returned from the query
    if (error) {
      responseData.error = error;
    } else {
      responseData.data = data;
    }
    response.send(JSON.stringify(responseData));
  });
});

module.exports = router;
