--   CREATE TABLE 
    var sql = 'CREATE TABLE IF NOT EXISTS `buraityte-comments` (id INT NOT NULL AUTO_INCREMENT, comment VARCHAR(255), user_id INT, PRIMARY KEY (id))'

-- INSERT COMMENTS
    var sql = 'INSERT INTO `buraityte-comments` (comment, user_id) VALUES ("Comment one", 1)';
    var sql = 'INSERT INTO `buraityte-comments` (comment, user_id) VALUES ("Comment two", 2)';
    var sql = 'INSERT INTO `buraityte-comments` (comment, user_id) VALUES ("Comment three", 3)';
    var sql ='SELECT * FROM buraityte-comments';
    -- could also do "INSERT INTO comments (user_id, comment) VALUES (1, 'Comment 1'), (2,'Comment 2'), (3, 'Comment 3')";

-- UPDATE TABLE
    var sql = 'UPDATE `buraityte-comments` SET comment="'+comment+'", user_id="'+user_id+'" WHERE id='+request.params.id;

-- DELETE TABLE
    var sql= 'DELETE FROM `buraityte-comments` WHERE id= 1';

 -- After that I also tried creating a comments.route.js file with this code: 

    var express = require("express");
    var router = express.Router();
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

-- // 2. insert 3 rows - INSERT
-- // INSERT INTO TableName (column1, column2, ...) VALUES (value1, value2, ...), (other_value1, other_value2, ...)
router.post("/insert", function (_, response) {
    var sql =
    "INSERT INTO comments (comment, user_id) VALUES ('Comment one', 1), ('Comment two', 2), ('Comment three', 3)";
    runSql(sql, response);
});

-- // 3. retrieve rows -   /api/comment -> GET  and SELECT * FROM 
router.get("", function (_, response) {
    var sql = 'SELECT * FROM `buraityte-comments`'

    runSql(sql, response)
});

-- // 4. update an existing row  /api/comment/:id -> PUT
router.put("/:id", function (request, response) {
    var { id, comment, user_id} = request.body;
    var sql = 'UPDATE `buraityte-comments` SET comment="'+comment+'", user_id="'+user_id+'", WHERE id='+request.params.id

    runSql(sql, response)
});

-- // 5. Delete an existing row
router.delete("/:id", function (request, response) {
    var sql = 'DELETE FROM `buraityte-comments` WHERE id='+request.params.id

    runSql(sql, response)
});
