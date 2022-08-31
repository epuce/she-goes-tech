# C - CREATE
```JS
// get input element
usernameInputElement = document.getElementById('username-input');

// get already saved list
var userList = JSON.parse(localStorage.userList);

// add input value to the end of list  
userList.push(usernameInputElement.value)

// clear input
usernameInputElement.value = '';

// store the list
localStorage.userList = JSON.stringify(userList);
```

# R - READ
```JS
// get already saved list
var userList = JSON.parse(localStorage.userList);

// get table element that will be populated with data
// HTML should already have the element
var userTable = document.getElementById('user-table');

// generate the html for table content
// use backticks ` for multi line text
userList.forEach(function(username, index) {
    var row = `
        <tr class="list-item">
            <td>` + index + `</td>
            <td>` + username + `</td>
            <td>
                <button class="js-edit" data-id="`+index+`">edit</button>
                <button class="js-delete" data-id="`+index+`">delete</button>
            </td>
        </tr>`

    // apply each new line content
    tableContent = tableContent + row;
})

// Apply the whole dynamic content to table
userTable.innerHTML = tableContent;

Object.values(document.getElementsByClassName('js-edit')).forEach((element) => {
    element.addEventListener('click', () => {
        // read block under E - EDIT section
    })
})

Object.values(document.getElementsByClassName('js-delete')).forEach((element) => {
    element.addEventListener('click', () => {
        // read block under D - DELETE section
    })
})
```

# U - UPDATE
```JS
// read id value from: data-id="1"
var id = element.dataset.id

// get already saved list
var userList = JSON.parse(localStorage.userList);

// get the username that is stored on the index
var usernameToEdit = userList[id];

usernameInputElement = document.getElementById('username-input');
usernameInputElement.value = usernameToEdit;

// *edit the input*

// apply the new value to the same place in list the we got it from
userList[id] = usernameInputElement.value

// store the modified list
localStorage.userList = JSON.stringify(userList);
```

# D - delete
```JS
// read id value from: data-id="1"
var id = element.dataset.id

// get already saved list
var userList = JSON.parse(localStorage.userList);

// remove the item from the list
userList.splice(id, 1);

// store the modified list
localStorage.userList = JSON.stringify(userList);
```
### add a new file named task-11.html where all these actions will be performed

Create A form that stores your TODO item list by fallowing these principles:
1. You can add an item to the list
2. You can see the full list
3. There is a button named "modify" for each item, that allows editing the TODO item
4. There is a button named "mark as done" that removes the item from the list