var taskInput = document.querySelector(".js-task");

function addTask () {

    var isTaskValid = true;

    if(taskInput.value.length > 0) {
        isTaskValid = true;
        taskInput.classList.remove("validation-error");
    } else {
       taskInput.classList.add("validation-error");
        isTaskValid = false;
    }

    if(isTaskValid) {
        var task = {
            taskItem: taskInput.value
        };

        var list = getTaskList();

    if(addTaskButton.dataset.index) {
        list[addTaskButton.dataset.index] = task;
        addTaskButton.dataset.index = ''
    } else {
        list.push(task);
    }

    localStorage.taskList = JSON.stringify(list);

    taskInput.value = "";

    renderTaskList();
    }
}

function getTaskList() {
    try {
        var list = JSON.parse(localStorage.taskList)
    } catch {
        var list = []
    }

    return list;
}

var addTaskButton = document.querySelector(".js-add-task")

addTaskButton.addEventListener("click", function(){
    addTask();
});

document.querySelectorAll("input").forEach(function(input){
    input.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            addTask()
        }
    })
})

function renderTaskList() {
    var list = getTaskList();
    var listContent = "";

   list.forEach(function(task, index){
    var row = `<div class="js-container-div"><div class="js-list-item-div"><li>`+task.taskItem+`</li></div><div class="js-button-div"><button class="js-edit" data-index"`+index+`">Edit</button><input type="checkbox" class="js-check-done" data-index="`+index+`"></input></div></div>`

    listContent = listContent + row
   })

   document.querySelector(".js-task-list").innerHTML = listContent;

   document.querySelectorAll('.js-task-list .js-check-done').forEach(function(checkbox){
    checkbox.addEventListener('click', function(){
        var list = getTaskList()
        
        list.splice(checkbox.dataset.index, 1)

        localStorage.taskList = JSON.stringify(list)

        renderTaskList();
    })
   })

   document.querySelectorAll('.js-task-list .js-edit').forEach(function(button){
    button.addEventListener('click', function(){
        var list = getTaskList()
        var task = list[button.dataset.index]

        taskInput.value = task

        addTaskButton.dataset.index = button.dataset.index
    })
   })
}

renderTaskList();

//TODO check task edit function