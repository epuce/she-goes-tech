var saveButton = document.querySelector(".js-save");
var userInput = document.querySelector(".js-user-input");

function saveForm() {
  let task = {
    toDo: userInput.value,
  };

  try {
    var list = JSON.parse(localStorage.taskList);
  } catch {
    var list = [];
  }

  if (saveButton.dataset.index) {
    list[saveButton.dataset.index] = task;

    saveButton.dataset.index = "";
  } else {
    list.push(task);
  }

  localStorage.taskList = JSON.stringify(list);

  userInput.value = "";

  renderList();
}

saveButton.addEventListener("click", function () {
  saveForm();
});

function getTodoList() {
  try {
    var list = JSON.parse(localStorage.taskList);
  } catch {
    var list = [];
  }
  return list;
}

function renderList() {
  var list = getTodoList();
  var toDoContent = "";
  list.forEach(function (task, index) {
    var liList =
      `<li>` +
      task.toDo +
      `</li>
      <button class='js-modify' data-index='` +
      index +
      `'>Modify</button>
    <button class='js-mark-as-done' data-index='` +
      index +
      `'>Mark as done</button>`;

    toDoContent = toDoContent + liList;
  });

  document.querySelector(".js-todo-list").innerHTML = toDoContent;

  document.querySelectorAll(".js-mark-as-done").forEach(function (button) {
    button.addEventListener("click", function () {
      var list = getTodoList();

      list.splice(button.dataset.index, 1);

      localStorage.taskList = JSON.stringify(list);

      renderList();
    });
  });

  document.querySelectorAll(".js-modify").forEach(function (button) {
    button.addEventListener("click", function () {
      var list = getTodoList();

      var task = list[button.dataset.index];

      userInput.value = task.toDo;

      saveButton.dataset.index = button.dataset.index;
    });
  });
}

renderList();