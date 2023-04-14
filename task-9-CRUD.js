var taskInput = document.querySelector(".js-task");
var saveBtn = document.querySelector(".js-save");

function saveForm() {
  var formIsValid = true;
  if (taskInput.value.length < 3) {
    taskInput.classList.add("validation-error");
    formIsValid = false;
  } else {
    taskInput.classList.remove("validation-error");
  }

  if (formIsValid) {
    var tasks = {
      task: taskInput.value,
    };

    var list = getTaskList();

    if (saveBtn.dataset.index) {
      list[saveBtn.dataset.index] = tasks;
      saveBtn.dataset.index = "";
    } else {
      list.push(tasks);
    }

    localStorage.taskList = JSON.stringify(list);
    taskInput.value = "";
    renderTable();
  }
}

function getTaskList() {
  try {
    var list = JSON.parse(localStorage.taskList);
  } catch {
    var list = [];
  }
  return list;
}

saveBtn.addEventListener("click", function () {
  saveForm();
});

function renderTable() {
  var list = getTaskList();

  // when we start the page we have empty table content. then we are looping over the list and generating table content
  var tableContent = "";

  if (list.length > 0) {
    document.querySelector(".js-task-table-wrapper").style.display =
      "inline-table";
  }
  list.forEach(function (tasks, index) {
    var row =
      `
    <tr>
    <td>` +
      (index + 1) +
      `</td>
    <td>` +
      tasks.task +
      `</td>
      <td> 
      <button type='button' class="js-edit" data-index="` +
      index +
      `">Edit</button>
      <button type="button" class="js-delete" data-index="` +
      index +
      `">Done</button>
      </td>
    </tr>`;
    tableContent = tableContent + row;
  });

  // render the table (overriding <tbody> part with a tableContent)
  document.querySelector(".js-task-table").innerHTML = tableContent;

  document
    .querySelectorAll(".js-task-table .js-delete")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        var list = getTaskList();
        list.splice(button.dataset.index, 1);
        localStorage.taskList = JSON.stringify(list);
        renderTable();
      });
    });

  document
    .querySelectorAll(".js-task-table .js-edit")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        var list = getTaskList();
        var task = list[button.dataset.index];
        taskInput.value = task.task;

        saveBtn.dataset.index = button.dataset.index;
      });
    });
}

renderTable();
