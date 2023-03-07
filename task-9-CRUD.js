var taskInput = document.querySelector(".js-task");

function addTask () {

    //TODO validate that the task is longer than 1 character

    var task = {
        taskItem: taskInput.value
    };

    var list = getTaskList();

    list.push(task);

    localStorage.taskList = JSON.stringify(list);

    taskInput.value = "";

    renderTaskList();

    console.log(localStorage.taskList)
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

   list.forEach(function(task){
    var row = `<li>`+task.taskItem+`</li>`

    listContent = listContent + row
   })

   document.querySelector(".js-task-list").innerHTML = listContent;
}

// document.querySelector(".js-task-list").innerHTML = listContent;