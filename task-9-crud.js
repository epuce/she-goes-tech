var task = document.querySelector(".js-task");

function saveForm() {
  // TODO: simplify to use.value less   // var XYZ = {   //   task: task.value };
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
  var listContent = ""; //  this may be wrong check, if these 2 var should be inside the function or out. Error message if kept here,

  list.forEach(function (taskRow) {
    // confused on var names here - should I have an equivalent to user, a new var or sth else?
    var row =
      `
<li> ` +
      taskRow.task +
      ` </li> 
      `
    //  ` <button class="js-modify"
    // // data-index="` +
    //       // index +
    //       `">
    // Modify
    // </button>
    // <button class="js-done"
    //  data-index="` +
    //       index +
    //       `">
    //  Done
    // </button> </li>` when adding this code, remove </li>' above

    listContent = listContent + row;
  });
}

document.querySelector(".js-list").innerHTML = listContent;

// TODO: update js for delete and edit with new names
// document.querySelectorAll(".js-list .js-done")
// .forEach(function (button) {
//   button.addEventListener("click", function () {
//     var list = getTaskList();

//     list.splice(button.dataset.index, 1);
//     localStorage.taskList = JSON.stringify(list);
//     renderList();
//   });
// });

// document.querySelectorAll(".js-list .js-modify").forEach(function (button) {
//   button.addEventListener("click", function () {
//     var list = getTaskList();
//     var ??? = list[button.dataset.index];

//     taskInput.value = ???.task;

//     saveBtn.dataset.index = button.dataset.index;
//   });
// });

renderList();
