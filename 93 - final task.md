## Crate a landing page based on these rules
* FRONT-END (70%)
    1. Create a button that shows a form (it can slid from the side, be shown in the main html or as a popup)
    2. Add minimum 4 different form fields, make one be visible only on some type of conditions (if one form field has been filled, checkbox selected, select field appropriate value selected)
    3. Validate minimum two of the fields (on button click point nr.4), show a visual representation if fields ar not valid
        * Error messages for not valid fields will be treated as a **bonus**
    4. Add a button that triggers the validation
    5. If validation passes show a popup with a full screen backdrop that contains some type of message with some data from the form (like: "thank you, username, we have received your request")
    6. Add a button to the popup that closes it
    7. Create a table where the data from the form will be shown, add an ID column and actions column that contains a delete button
    * Make a button that when clicked deletes the row
* BACK-END (30%)
    1. Create a nodejs server that will have the setup for the API endpoints
    2. Create the table that will hold the data (decide yourself what columns would be needed)
    3. Create API endpoint to cover the Create-Read-Update-Delete needs
    4. Apply the API endpoints to the FRONT-END
* Addition info 
    1. If the back-end setup can't be complete use localStorage as the reference for CRUD
    2. Use any technology combination to achieve the result
        * Vanilla JavaScrip, jQuery, Vue
        * CSS, Bootstrap, any other
    3. Create a presentation (or just talking points) with the fallowing content
        * What went as planned
        * What did not go as planned
        * State some overall takeaways from the course
        * Be ready to show the final result
* **Push the final result to github**

## Example (it's more like inspiration and visual task representation)
![Opened form, filled](img/task-1-open-form-filled.png)
![Opened form, validation error](img/task-1-open-form-validation-error.png)
![Popup](img/task-1-popup.png)
![video](img/task-1-example.gif)

### What to take in account
1. Clean code styling (spaces, new lines, variable placement, nesting, don't repeat yourself)
2. Appropriate HTML tag and attribute usage, logical class, id, etc. naming
3. Structured CSS
   * all corresponding styles ar written together
   * logical property sequence
4. JavaScript variable naming/declaration logic
5. clean and easy to read JavaScript functions (logically structured)
6. Visual appearance (good background/text contrast, readable content, no overlapping)
7. Any additional functionality and implementations will be treated as **bonus** 

# How to get the final task into your private github repository
* Login github.com and on the home screen click `New`

![github new repo btn](./img/github-new-repo-btn.png)
* Add the repository (folder name) and click `Create repository`

![github repo name](./img/github-repo-name.png)
* In the terminal navigate to your final task folder
* Perform the steps starting from `git init`

![git init](./img/git-init.png)

* *NOTE: when this action has been done we can't push to the branch we were working till now*
