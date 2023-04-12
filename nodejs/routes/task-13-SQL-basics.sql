
// Create table

var sql = `CREATE TABLE IF NOT EXISTS \`viola.pumpure-comments\` (
        id INT NOT NULL AUTO_INCREMENT,
        comment VARCHAR(255),
        user_id VARCHAR(255),
        PRIMARY KEY (id)
        )`;

// Insert row

var sql =
    `INSERT INTO \`viola.pumpure-comments\`
            (comment, user_id)
            VALUES(
                "` +
    comment +
    `",
                "` +
    user_id +
    `")
                `;

// Retrieve rows

router.get(" ", function (_, response) {
  var sql = "SELECT * FROM `viola.pumpure-comments`";

  runSql(sql, response);
});

// Update row

router.put("/:id", function (request, response) {
  var { comments, user_id } = request.body;
  var sql = "UPDATE `viola.pumpure-comments` SET comment='" +
      comment +
      "', user_id='" +
      user_id +
      "' WHERE id=" +
      request.params.id;
  
    runSql(sql, response);
  });

// Delete row

router.delete("/:id", function (request, response) {
  var sql =
    "DELETE FROM `viola.pumpure-comments` WHERE id=" + request.params.id;
  runSql(sql, response);
});
