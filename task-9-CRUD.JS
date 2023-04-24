var itemInput = document.querySelector(".js-item");

function saveTodoItem() {
  var isFormValid = true;

  if (!itemInput.value.length > 0) {
    itemInput.classList.add("validation-error");
    isFormValid = false;
  } else {
    itemInput.classList.remove("validation-error");
  }

  if (isFormValid) {
    const todoItem = {
      todo: itemInput.value,
    };

    var list = getTodoList();

    if (saveBtn.dataset.index) {
      list[saveBtn.dataset.index] = todoItem;
      delete saveBtn.dataset.index;
    } else {
      list.push(todoItem);
    }

    localStorage.todoList = JSON.stringify(list);
    itemInput.value = "";

    renderTable();
  }
}

function getTodoList() {
  try {
    var list = JSON.parse(localStorage.todoList);
  } catch {
    var list = [];
  }
  return list;
}

var saveBtn = document.querySelector(".js-add");

saveBtn.addEventListener("click", function () {
  saveTodoItem();
});

function renderTable() {
  var list = getTodoList();
  var tableContent = "";

  if (list.length > 0) {
    document.querySelector(".js-user-table-wrapper").style.display =
      "inline-table";
  }

  list.forEach(function (user, index) {
    var row =
      `
  <tr>
  <td>` +
      (index + 1) +
      `</td>
  <td>` +
      user.todo +
      `</td>
  <td>
  <button class="js-edit" data-index="` +
      index +
      `">Modify</button>
  </td>
  <td> 
  <button class="js-delete" data-index="` +
      index +
      `">Mark as done</button></td>
  </tr>
  `;
    tableContent = tableContent + row;
  });

  document.querySelector(".js-user-table").innerHTML = tableContent;
  document
    .querySelectorAll(".js-user-table .js-delete")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        var list = getTodoList();
        list.splice(button.dataset.index, 1);
        localStorage.todoList = JSON.stringify(list);
        renderTable();
      });
    });

  document
    .querySelectorAll(".js-user-table .js-edit")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        var list = getTodoList();
        var item = list[button.dataset.index];
        itemInput.value = item.todo;
        saveBtn.dataset.index = button.dataset.index;
      });
    });
}
renderTable();