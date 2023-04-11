-- Create table
CREATE TABLE IF NOT EXISTS `moharso-comments` (
    id INT NOT NULL AUTO_INCREMENT, 
    comment VARCHAR (800), 
    user_id INT, 
    PRIMARY KEY (id)
    )

-- Insert 3 rows
INSERT INTO 'moharso-comments' (comment, user_id) VALUES (comm, 1), (comm, 2), (comm, 3)

-- Retrievieng data
SELECT * FROM `moharso-comments`

-- Update 
UPDATE `moharso-comments` SET comment="New comm", user_id="55" WHERE id=1

-- Delete
DELETE FROM `moharso-comments` WHERE id=3

