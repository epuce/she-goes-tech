
-- Create a comments table that has 3 columns: id comment user_id. Make ID column as the primary column that auto increments
var sql =
    "CREATE TABLE IF NOT EXISTS `neringa1991-comments`(id INT NOT NULL AUTO_INCREMENT, comment VARCHAR(255),user_id VARCHAR(255), PRIMARY KEY (id))";

-- Insert 3 rows into the newly created table
var sql =
    `INSERT INTO \`neringa1991-comments\`
        (comment, user_id)
        VALUES("NICE WORK","jiMMY__EE")
    `;
var sql =
    `INSERT INTO \`neringa1991-comments\`
        (comment, user_id)
        VALUES("SQL is not that easy","not_a_fan")
    `;
var sql =
    `INSERT INTO \`neringa1991-comments\`
        (comment, user_id)
        VALUES("SQL is nice","user_name")
    `;

 var sql = `INSERT INTO \`neringa1991-comments\`
        (comment, user_id)
        VALUES("SQL is nice!!!",1), ("Ok!!!",2)
    `;
-- Retrieve the newly created rows
 var sql = "SELECT * FROM `neringa1991-comments`";

-- Update an existing row
var sql =
    `UPDATE \`neringa1991-comments\` 
    SET comment="HELLO, WORLD!", user_id="spring"
    WHERE id=2` 

-- Delete an existing row
var sql = "DELETE FROM `neringa1991-comments` WHERE id=4";