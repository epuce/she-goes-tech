/*create an SQL table*/
CREATE TABLE IF NOT EXISTS `Comments` (id INT NOT NULL AUTO_INCREMENT, comment VARCHAR(255), user_id VARCHAR(255), PRIMARY KEY(id))

/*insert 3 rows in the newly created table*/
INSERT INTO `Comments` (comment, user_id) VALUES("Comment no.1", "User no 1"), ("Another comment", "Another user"), ("Just a comment", "This is user")

/*Retrieve the newly created rows*/
SELECT id, comment AS opinion, user_id AS username FROM `Comments`

/*Update an existing row*/
UPDATE `Comments` SET comment="New comment", user_id="Updated user" WHERE id=1

/*Delete an existing row*/
DELETE FROM `Comments` WHERE id=2