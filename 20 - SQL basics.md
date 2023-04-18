### SQL database basics
* Install mysql server locally (if not using docker)
    * unix 
        - sudo apt-get install mysql-server
        - sudo mysql
        - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'my_root_password';
        - mysql -u root -p
    * windows
        - [step by step instructions](https://mid.as/kb/00145/install-configure-mysql-on-windows)
* Get "SQL Tools" and "SQL server" extension or any other SQL tool (DBeaver, MySql Workbench)
* Log in with a SQL tool or create a php file that manages the connection (database-wrapper.php)
    * host: localhost:8082 (8082 port is the one we exposed in docker-compose.yml file)
    * username: root (from docker-compose.yml file)
    * password: root_password (from docker-compose.yml file)
* Execute the commands in the tool or create a php file that executes the scripts
    * Create a database
    ```sql
    "CREATE DATABASE IF NOT EXISTS `web-bootcamp`"
    ```
    * USE db-name - on server to switch to the DB
    * Create database table
    ```sql
    CREATE TABLE Users
        (
            name varchar(20),
            last_name varchar(20),
            email varchar(20)
        );
    ```
* SQL data types
    * Numeric
        * bit: 0 till 1
        * tinyint: 0 till 255
        * smallint: -32,768	till 32,767
        * int: -2,147,483,648 till 2,147,483,647
        * bigint: -9,223,372,036,854,775,808 till 9,223,372,036,854,775,807
        * decimal: -10^38 +1 till 10^38 -1
        * numeric: -10^38 +1 till 10^38 -1
        * float: -1.79E + 308 till 1.79E + 308
        * real: -3.40E + 38	till 3.40E + 38
    * Date/Time
        * DATE
        * TIME
        * DATETIME
        * TIMESTAMP
        * YEAR
    * Character/String
        * CHAR - exactly how many characters should that field be - till 8000
        * VARCHAR - the maximum text length - 8000
        * TEXT - max text store size 2GB
    * Binary
        * BINARY - exactly how long is the binary value - till 8000 bytes
        * VARBINARY - sets maximum length - till 8000 bytes
        * IMAGE - binary image file till 2GB of size
    * Miscellaneous
        * CLOB - similar to BLOB, just the charset reference is stored with it
        * BLOB - binary large objects
        * XML -stores xml data
        * JSON - stores JSON data
        
* Creating/updating records
    ```sql
    INSERT INTO TableName (column1, column2, ...) VALUES (value1, value2, ...), (other_value1, other_value2, ...)
    ```
    ```sql
    UPDATE TableName
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
    ```
* Retrieving records
    * All data from table
    ```sql
    SELECT * FROM Users
    ```
    
    * All data with conditions
    ```sql
    SELECT * FROM Users WHERE profession='Programmer'
    ```
    
    * Stated columns with conditions
    ```sql
    SELECT name FROM Users WHERE profession='Programmer'
    ```
* Modify table
    ```sql
    ALTER TABLE Users ADD (
        id int NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    );
    // OR
    ALTER TABLE Users
    DROP COLUMN name;
    // OR
    ALTER TABLE Users 
    MODIFY profession varchar(30);
    ```

### Other commands
[SQL commands codeacademy](https://www.codecademy.com/articles/sql-commands)

[SQL commands w3school](https://www.w3schools.com/sql/default.asp)

### Checkup

### add a new file named task-13-SQL-basics.sql where all these actions will be performed

#### When you are sure that the SQL script worked, write it down inside the task file

1. Create a `comments` table that has 3 columns: `id` `comment` `user_id`
    1. Make ID column as the primary column that auto increments
2. Insert 3 rows into the newly created table
3. Retrieve the newly created rows
4. Update an existing row
5. Delete an existing row