var express = require("express");
var router = express.Router();
var app = require("../app");

router.get("", function (request, response) {
  //we need to specify the column name and their restrictions (Max 255). First column is first_name. Default is for these columns to be empty. NOT NULL means not empty/The identifier of the user will be PRIMARY KEY (id column)
  var sql =
    "CREATE TABLE IF NOT EXISTS `neringa1991-offers`(user_name VARCHAR(255),email VARCHAR(255), special_offers VARCHAR(255), offer_cycle VARCHAR (255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))";

  // To add a new column to the table
  // var sql = "ALTER TABLE `neringa1991-users` ADD (last_name VARCHAR(255))";

  // -- Create a comments table that has 3 columns: id comment user_id. Make ID column as the primary column that auto increments
  // var sql =
  //   "CREATE TABLE IF NOT EXISTS `neringa1991-comments`(id INT NOT NULL AUTO_INCREMENT, comment VARCHAR(255),user_id VARCHAR(255), PRIMARY KEY (id))";

  // var sql = "ALTER TABLE `neringa1991-comments` MODIFY COLUMN comment TEXT";

  // changed values to null
  // var sql = "UPDATE `neringa1991-comments` SET user_id=NULL";

  // var sql = "ALTER TABLE `neringa1991-comments` MODIFY COLUMN user_id INT";

  // // Insert 3 rows into the newly created table
  // var sql = `INSERT INTO \`neringa1991-comments\`
  //       (comment, user_id)
  //       VALUES("NICE WORK","jiMMY__EE")
  //   `;
  // var sql = `INSERT INTO \`neringa1991-comments\`
  //       (comment, user_id)
  //       VALUES("SQL is not that easy","not_a_fan")
  //   `;
  // var sql = `INSERT INTO \`neringa1991-comments\`
  //       (comment, user_id)
  //       VALUES("SQL is nice","user_name")
  //   `;
  // var sql = `INSERT INTO \`neringa1991-comments\`
  //       (comment, user_id)
  //       VALUES("SQL is nice!!!",1), ("Ok!!!",2)
  //   `;

  // // // Retrieve the newly created rows
  // var sql = "SELECT * FROM `neringa1991-comments`";

  // // // -- Update an existing row
  // var sql = `UPDATE \`neringa1991-comments\`
  //   SET comment="HELLO, WORLD!", user_id=1
  //   WHERE id=8`;

  // // // -- Delete an existing row
  // var sql = "DELETE FROM `neringa1991-comments` WHERE id=4";
  // var sql = "SELECT * FROM `neringa1991-comments`";

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
