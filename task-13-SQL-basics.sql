/*create an SQL table*/
CREATE TABLE IF NOT EXISTS `IevaZR-comments` (comment TEXT, user_id INT, id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))

/*insert 3 rows in the newly created table*/
INSERT INTO `IevaZR-comments` (user_id, comment) VALUES (1, "This is a cool comment"), (1, "Some other comment"), (2, "User two comment")

/*Retrieve the newly created rows*/
SELECT * FROM `IevaZR-comments`

/*Update an existing row*/
UPDATE `IevaZR-comments` SET comment="New comment" WHERE user_id=1

/*Delete an existing row*/
DELETE FROM `IevaZR-comments` WHERE user_id=2