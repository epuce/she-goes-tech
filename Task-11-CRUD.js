var toDoInput = document.querySelector(".js-to-do");

function saveForm() {

  var isFormValid = true;

  if (toDoInput.value.length < 2) {
    toDoInput.classList.add("validation-error");
    isFormValid = false;
  } else {
    toDoInput.classList.remove("validation-error");
  }

 
  if (isFormValid) {
    var toDo = {
      toDoItem: toDoInput.value,
    };

    var list = getToDoList();
    if (saveBtn.dataset.index) {
      list[saveBtn.dataset.index] = toDo;
      saveBtn.dataset.index = '';
    } else {
    list.push(toDo);
    }
    localStorage.toDoList = JSON.stringify(list);

    toDoInput.value = "";

    renderTable();
  }
}


function getToDoList() {
  try {
    var list = JSON.parse(localStorage.toDoList);
  } catch {
    var list = [];
  }
  return list;
}

var saveBtn = document.querySelector(".js-save")

saveBtn.addEventListener("click", function () {
  saveForm();
});

document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      saveForm();
    }
  });
});

function renderTable() {
  var list = getToDoList();
  var tableContent = "";
  if (list.length > 0) {
    document.querySelector(".js-to-do-table-wrapper").style.display =
      "inline-table";
      document.querySelector(".js-message").style.display =
      "none";
  }
 
  list.forEach(function (toDo, index) {
    var row =
      `
    <tr>
        <td>` +
      (index + 1) +
      `</td>
        <td>` +
      toDo.toDoItem +
      `</td>
        <td>
        <button class="js-modify" data-index="`+index+`">Modify</button>
        <button class="js-done"  data-index="`+index+`">Mark as done</button>
        </td>
    </tr>
    `;
    tableContent = tableContent + row;
  });

 

  document.querySelector(".js-to-do-table").innerHTML = tableContent;

  document.querySelectorAll(".js-to-do-table .js-done").forEach(function(button) {
    button.addEventListener("click", function() {
      var list = getToDoList();
      list.splice(button.dataset.index, 1)
      localStorage.toDoList = JSON.stringify(list);
      renderTable();

      if (list.length === 0) {
        document.querySelector(".js-to-do-table-wrapper").style.display =
          "none";
          document.querySelector(".js-message").style.display =
          "inline-flex";
    }
    })
  })

  document.querySelectorAll(".js-to-do-table .js-modify").forEach(function(button) {
    button.addEventListener("click", function() {
      var list = getToDoList();
      var toDo = list[button.dataset.index]
    
      toDoInput.value = toDo.toDoItem;
      

      saveBtn.dataset.index = button.dataset.index

    
  })
})
}
renderTable();
