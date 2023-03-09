var toDoInput = document.querySelector('.js-todo-input');



//saving data to localStorage using save button
var saveBtn = document.querySelector('.js-save');
saveBtn.addEventListener('click', function() {
    saveToDoItem();
})

//saving data to localStorage on enter key
toDoInput.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        saveToDoItem();
    }
})

function saveToDoItem() {
    var toDoItem = toDoInput.value;
    var isInputValid = true;
    //validate if the list item contains value (min 3)
    if (toDoItem.length < 3) {
        toDoInput.classList.add('wrong-input');
        isInputValid = false;
        alert('You cannot add an empty value or less than 3 characters!');
    } else {
        toDoInput.classList.remove('wrong-input');
    }

    if (isInputValid) {
        
        var toDoList = getToDoList();

        //validate if the list item is added for the first time
        if(saveBtn.dataset.index) {
            //update the existing list item
            toDoList[saveBtn.dataset.index] = toDoItem;
    
            saveBtn.dataset.index = ''
        } else {
            //add all new items to list
            toDoList.push(toDoItem)
            //clear the input field
            toDoItem = '';
        }
        
        //save list to localStorage
        localStorage.toDoList = JSON.stringify(toDoList)
    
        //clear input field
        toDoItem = '';
    
        //display new data in UI list
        createToDoList();
    }
    
    
}

function getToDoList () {
    try {
        var ToDolist = JSON.parse(localStorage.toDoList)
    } 
    catch {
        var ToDolist = []
    }

    return ToDolist;
}

//create todo list
function createToDoList() {
    var toDoList = getToDoList();
    var listContent = '';

    //display list only when it has data
    if(toDoList.length > 0) {
        document.querySelector('.js-todo-list-wrapper').style.display = 'block'
    }

    //add new list item in html
    toDoList.forEach(function(item, index) {
        var listItem = `
            <li>
                `+item+`
                <button class="js-edit" data-index="`+index+`" style="font-size: 10px;">modify</button>
                <button class="js-delete" data-index=" `+index+`" style="font-size: 10px;">mark as done</button>
            </li>
        `
        //add each new line
        listContent = listContent + listItem
    })

    document.querySelector('.js-todo-list').innerHTML = listContent;

    //edit list item
    document.querySelectorAll('.js-todo-list .js-edit').forEach(function(button) {
        button.addEventListener('click', function() {
            var toDoList = getToDoList();
            var listItem = toDoList[button.dataset.index];
            console.log(listItem)
            //get back list item into input field
            toDoInput.value = listItem

            //add data attribute to save button
            saveBtn.dataset.index = button.dataset.index
            console.log(saveBtn.dataset)
        })
    })

    //delete list item
    document.querySelectorAll('.js-todo-list .js-delete').forEach(function(button) {
        button.addEventListener('click', function() {
            var toDoList = getToDoList();
            //cut out the needed list item from array
            toDoList.splice(button.dataset.index, 1)
            console.log(button.dataset.index)
            //save updated list to localStorage
            localStorage.toDoList = JSON.stringify(toDoList);
            //display updated list
            createToDoList();
        })
    })
}

createToDoList();
