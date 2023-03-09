var task = document.querySelector(".js-task");

function saveForm() {
  // TODO: simplify to use.value less   // var XYZ = {   //   task: task.value }; or should I have taskRow var here
  var list = getTaskList();

  if (saveBtn.dataset.index) {
    list[saveBtn.dataset.index] = task.value;
    saveBtn.dataset.index = "";
  } else {
    list.push(task.value);
  }

  localStorage.taskList = JSON.stringify(list);

  task.value = "";

  renderList();
}

function getTaskList() {
  // here we try to add items to the list - if there is no taskList, a new list is created
  try {
    var list = JSON.parse(localStorage.taskList);
  } catch {
    var list = [];
  }
  return list;
}

var saveBtn = document.querySelector(".js-save");

saveBtn.addEventListener("click", function () {
  saveForm();
});

function renderList() {
  var list = getTaskList();
  var listContent = ""; 

  list.forEach(function (taskRow, index) {
    var row =
      `
<li> ` +
      taskRow +
      `
 <button class="js-modify"
    data-index="` +
      index +
      `">
    Modify
    </button>
    <button class="js-done"
     data-index="` +
      index +
      `">
     Done
    </button> </li>`;

    listContent = listContent + row;
    
    document.querySelector(".js-list").innerHTML = listContent;

// Deletion works
  document.querySelectorAll('.js-list .js-done').forEach(function(button) {
      button.addEventListener('click', function() {
          var taskList = getTaskList();
          taskList.splice(button.dataset.index, 1)
          console.log(button.dataset.index)
          localStorage.taskList = JSON.stringify(taskList);
          renderList()
        })
  })

  // TODO: review - sth not adding up. Editing not working
  //   document.querySelectorAll('.js-list .js-modify').forEach(function(button) {
  //     button.addEventListener('click', function() {
  //       var list = getTaskList()
  //               var taskRow = list[button.dataset.index]

  //               task.value = listContent.task

  //         saveBtn.dataset.index = button.dataset.index
  //     })
  })

}
renderList()


