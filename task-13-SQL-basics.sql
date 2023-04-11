-- Create a githu.user.name-comments table that has 3 columns: id comment user_id
  var sql = `CREATE TABLE IF NOT EXISTS \`KristePe-comments\` (
        comment VARCHAR(255),
        user_id INT,
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(id)
    )`


-- Insert 3 rows into the newly created table
     var sql = `INSERT INTO \`KristePe-comments\` (user_id, comment)
    VALUES
    (1, "My first cooment"), 
    (1, "Other comment"), 
    (2, "One more")
    `
-- Retrieve the newly created rows

    var sql = `SELECT * FROM \`KristePe-comments\``

    -- Update an existing row
var sql = `UPDATE \`KristePe-comments\`
SET comment="One new comment"
WHERE user_id=1
`
-- Delete an existing row
var sql = `DELETE FROM \`KristePe-comments\` WHERE id=1`
