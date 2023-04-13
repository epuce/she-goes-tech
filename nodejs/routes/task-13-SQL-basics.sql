
// Create table

CREATE TABLE IF NOT EXISTS `viola.pumpure-comments` (
        
        comment TEXT(255),
        user_id INT(255),
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
        )


// Insert row

INSERT INTO `viola.pumpure-comments`
          (user_id, comment)
          VALUES (1, "this is the first comment"), 
            (2, "the second comment"), 
            (1, "third comment")
              

// Retrieve rows


  SELECT * FROM `viola.pumpure-comments`


// Update row

 UPDATE `viola.pumpure-comments`
              SET comment="The updated comment"
              WHERE user_id=1
              


// Delete row

  DELETE FROM `viola.pumpure-comments` WHERE id=1

