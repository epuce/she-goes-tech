-- Create table
CREATE TABLE IF NOT EXISTS `edmunds.puce-comments` (
    comment TEXT,
    user_id INT,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
)

-- Insert 3 comments
INSERT INTO `edmunds.puce-comments` (user_id, comment)
        VALUES
        (1, "Yea this is a cool comment"),
        (1, "Some other comment"),
        (2, "User two comment")

-- Get the lis
SELECT * FROM `edmunds.puce-comments`

-- Update row
UPDATE `edmunds.puce-comments`
        SET comment="Some new value"
        WHERE user_id=1

-- Delete row
DELETE FROM `edmunds.puce-comments` WHERE id=1