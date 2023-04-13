var express = require("express");
var router = express.Router();
var app = require("../app");

router.get("", function (request, response) {
  var sql = `CREATE TABLE IF NOT EXISTS \`viola.pumpure-users\` (
        first_name VARCHAR(255), 
        last_name VARCHAR(255),
        email VARCHAR(255),
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )`;

  var sql = `CREATE TABLE IF NOT EXISTS \`viola.pumpure-comments\` (
        
        comment TEXT(255),
        user_id INT(255),
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
        )`;

  var sql = `ALTER TABLE \`viola.pumpure-comments\` MODIFY COLUMN user_id INT NOT NULL`;

  var sql = `INSERT INTO \`viola.pumpure-comments\`
          (user_id, comment)
          VALUES (1, "this is the first comment"), 
            (2, "the second comment"), 
            (1, "third comment")
              `;

  var sql = "SELECT * FROM `viola.pumpure-comments`";
  //   var sql = "SELECT user_id, comment FROM `viola.pumpure-comments`";

  var sql = `UPDATE \`viola.pumpure-comments\`
              SET comment="The updated comment"
              WHERE user_id=1
              `;

  var sql = "DELETE FROM `viola.pumpure-comments` WHERE id=1";

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
