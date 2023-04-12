-- Create Table
CREATE TABLE IF NOT EXISTS `VaidaLinkuviene-comments` 
    (id INT NOT NULL AUTO_INCREMENT, 
        user_id INT, 
        comment TEXT,
        PRIMARY KEY (id)
    );

-- Insert 3 rows of data into a table
INSERT INTO `VaidaLinkuviene-comments` (comment, user_id) VALUES ('Comment for user 1', 1), ('Other comment for user 1', 1), ('Comment for user 2', 2)

-- Get data list
SELECT * FROM `VaidaLinkuviene-comments`

-- Update
UPDATE `VaidaLinkuviene-comments` SET comment='Updated comment for user 1' WHERE id=2

-- Dlete
DELETE FROM `VaidaLinkuviene-comments` WHERE user_id=1