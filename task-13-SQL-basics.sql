--create a table
`CREATE TABLE IF NOT EXISTS \`liucija-banelyte-comments\` (
        comment TEXT,
        user_id INT,
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    )

    --lalala
     var sql = `INSERT INTO \`liucija-banelyte-comments\` (user_id, comment)
    VALUES 
    (1, "Ye this is the comment"), 
    (1, "other comment"), 
    (2, "new comment"),
    (3, "labas")`

    var sql = 'SELECT * FROM `liucija-banelyte-comments`'--