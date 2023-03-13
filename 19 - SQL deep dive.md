### SQL database advanced
1. Joining tables
    ```sql
    CREATE TABLE purchases
        (
            purchase_time datetime,
            name varchar(20),
            id int NOT NULL AUTO_INCREMENT,
            user_id int,
            PRIMARY KEY (id),
            FOREIGN KEY (user_id) REFERENCES Users(id)
        );
    ```

2. Getting joined data - join types [link](http://www.sql-join.com/sql-join-types)
    ```sql
    SELECT u.name 
    FROM Purchases as p INNER JOIN Users as u
    ON p.user_id = u.id
    ```

3. Grouping and ordering
    ```sql
    SELECT *
    FROM Users as u
    GROUP BY u.name
    ```

    ```sql
    SELECT *
    FROM Users as u
    ORDER BY u.id DESC --- Possible values DESC | ASC
    ```

4. Join types
    ![SQL joins](img/sql-joins.jpg)

5. SQL functions
    * Mathematical - [link](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html)
    * Logical -> insert multiple values based on other data table rows
    ```sql
    INSERT INTO purchases (user_id, name)
    SELECT u.id, "Product name" FROM users AS u
    ```
6. Complex queries
    ```sql
    SELECT
        s.status_id,
        s.status_name,
        s.color,
        s.module,
        s.modified_date
    FROM statuses AS s

    WHERE in_use = "1" AND module != ""

    ORDER BY module, ordering, status_id
    LIMIT 0,3
    ```
    ```sql
    SELECT 
        u.*,
        u.name AS full_name,
        u.user_type AS category,
        u.pict AS user_picture,
        r.role_name AS userRole 
    FROM users as u
    LEFT JOIN roles as r on r.role_id = u.role_id
    LEFT JOIN users_accounts AS ua ON (u.id = ua.user_id)
    WHERE 1=1 
    GROUP by u.id
    ORDER BY name asc
    LIMIT 0,3
    ```
    ```sql
    SELECT p.project_id AS columnId, p.project_name AS columnName  
    FROM projects AS p
    RIGHT OUTER JOIN (
        SELECT
        cf.*, p.project_id AS colVal, p.project_name AS colSort, IFNULL(uo.id, 0) AS rowVal, uo.name AS rowSort , usr.initials AS owner_initials, usr.name AS owner_name 
        FROM custom_fields AS cf
        LEFT JOIN projects AS p ON (cf.c_module=p.project_id)
        LEFT JOIN users AS uo ON (cf.owner_id=uo.id) LEFT JOIN users AS usr ON (usr.id = cf.owner_id) 
        WHERE cf.is_deleted="0" AND cf.owner_id IN ('295','78','97') 
        ORDER BY cf.item_id asc
    ) AS cale ON (cale.c_module= p.project_id)
    GROUP BY project_id
    ORDER BY project_name;		
    ```
7. SQL data validation
    * When setting up data types and properties we create database validations, it means we can't save not valid data
    * It means that the whole row wont be saved
    * Examples:
        * ```sql
            CREATE TABLE countries
            (
                country_code char(3) NOT NULL,
            );
        
        * ```sql
            CREATE TABLE events
            (
                event_day ENUM ('Mon','Tue','Wed','Thu','Fri','Sat','Sun'),
            );
        * ```sql
            CREATE TABLE cars
            (
                min_range int, CHECK (min_range > 0)
            )

8. Wild card selectors
    ```sql
    SELECT * FROM Purchases WHERE name LIKE 'computer%' --- Will select all rows that starts with computer
    SELECT * FROM Users WHERE email LIKE '%@gmail.com' --- Will select all rows that end with @gmail.com
    ```

### Checkup
Save all the scripts for further debugging
1. Crate a two tables and join them together
2. Populate both tables with at least 10 rows
3. Write the fallowing queries
    * retrieve data from table two based on table one
    * retrieve all data from both tables that belong to the primary key
    * retrieve only some columns from table number one and table number two based on a condition
4. Create a new table and write a function that populates the table based on some data from one of the first tables
5. Set up some data validation