### Box model

![box model](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png)

* From inner to outer level
    * width X height
    * padding
    * border
    * margin

* Best practices
    * Order your code based on one structure
    * Group related selectors
        * Bad example
        ```CSS
        .header {
            font-size: 24px        }
        table td { text-align: center}
        table {table-layout: fixed; border-spacing: 0      }
        form {
            color: red;
        }
        .first-class { background: #FFF000
        }
        table > tr {
            height: 50px;
        }
        td:hover{border: 1px solid #000000;}
        ```

        * Good example

        ```CSS
        table {
            table-layout: fixed;
            border-spacing: 0
        }
        table > tr {
            height: 50px;
        }
        table td {
            text-align: center;
        }
        table td:hover {
            border: 1px solid #000000;
        }
        form {
            color: red;
        }
        .first-class { 
            background: #FFF000;
        }
        .header {
            font-size: 24px;    
        }
        ```

## Let's work together
- fixed navigation bar at the top with a dropdown menu
    * some type of logo that leads to homepage
    * navigation element hover opens child menu
    * outer link(s)
    * inner link(s)
