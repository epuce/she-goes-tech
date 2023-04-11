
/* 1. Create the table  */
var sql = `CREATE TABLE IF NOT EXISTS \`kristiana.tatarcuka-comments\` (id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), comment VARCHAR(255), user_id INT NOT NULL)`

/* 2. Insert 3 rows  */
var sql = 'INSERT INTO `kristiana.tatarcuka-comments` (comment, user_id) VALUES(" '+comment+' ", " '+user_id+' ")'

/* 3. Retrieve the newly created rows */
var sql = 'SELECT * FROM `kristiana.tatarcuka-comments`'
var sql = 'SELECT id, comment FROM `kristiana.tatarcuka-comments`' 

/* 4. Update an existing row */
var sql = 'UPDATE `kristiana.tatarcuka-comments` SET comment=" '+comment+' ", WHERE id='+request.params.id;

/* 5. Delete an existing row */
var sql = 'DELETE FROM `kristiana.tatarcuka-comments` WHERE id='+request.params.id;