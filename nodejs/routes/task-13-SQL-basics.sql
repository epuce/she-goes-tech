-- Create table
 sql = 'CREATE TABLE IF NOT EXISTS `valda-naujok-comments`(comment VARCHAR(255), uesr_id VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id))'

-- Insert
sql = 'INSERT INTO `valda-naujok-comments` (user_id, comment) VALUES (1, "COMMENT"), (1, "Other comment"), (2, "just a comment")'

-- Return
sql = 'SELECT * FROM `valda-naujok-comments`'