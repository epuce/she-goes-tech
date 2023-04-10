CREATE TABLE IF NOT EXISTS `Linda-Alpe-Luka-comments` (comments VARCHAR(8000), user_id INT NOT NULL, id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id));

INSERT INTO `Linda-Alpe-Luka-comments`(comments, user_id) VALUES ("this is a comment", 4), ("this is a complain", 3), ("this is a review", 4);
    
SELECT * FROM `Linda-Alpe-Luka-comments`;

UPDATE `Linda-Alpe-Luka-comments` SET comments = "this is a comment" WHERE id = 1;

DELETE FROM `Linda-Alpe-Luka-comments` WHERE id = 2;
    