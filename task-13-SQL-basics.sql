/* Create a comments table that has 3 columns: id comment user_id
Make ID column as the primary column that auto increments */
`CREATE TABLE \`lindalejiete-comments\`
    (
        id INT NOT NULL AUTO_INCREMENT,
        comments VARCHAR(255),
        user_id INT NOT NULL
    )`

/* Insert 3 rows into the newly created table */
`INSERT INTO `lindalejiete-comments` (comments, user_id) VALUES ("this user has blue hair", 04042001)`
`INSERT INTO `lindalejiete-comments` (comments, user_id) VALUES ("this user has long jeans", 05112005)`
`INSERT INTO `lindalejiete-comments` (comments, user_id) VALUES ("this user has Tshirt", 24062012)`

/* Retrieve the newly created rows */
`SELECT * FROM \`lindalejiete-comments\``


/* Update an existing row */
`UPDATE \`lindalejiete-comments\`
SET comments = "this user has no longer blue, but red hair"
WHERE id=1;`

/* Delete an existing row */
`DELETE FROM lindalejiete-comments
WHERE id=2`
