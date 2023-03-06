function saveForm() {
  console.trace(); //for debugging
  const nameInput = document.querySelector(".js-name"); //we are reading the value
  const emailInput = document.querySelector(".js-email");
  var isFormValid = true;

  if (nameInput.value.length < 3) {
    nameInput.classList.add("validation-error");
    isFormValid = false;
  } else {
    nameInput.classList.remove("validation-error");
  }
  if (isFormValid) {
    //we only save when input is valid
    const user = {
      name: nameInput.value, //the first is the key, the second is the variable we aare referencing
      email: emailInput.value,
    };
    //below we are reading the error
    var list = getUserList();
    list.push(user);

    localStorage.userList = JSON.stringify(list);

    nameInput.value = "";
    emailInput.value = "";

    renderTable();
  }
}

function getUserList() {
  try {
    var list = JSON.parse(localStorage.userList);
  } catch {
    var list = [];
  }
  return list;
}

document.querySelector(".js-save").addEventListener("click", function () {
  saveForm();
});

document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      //Save form
      saveForm();
    }
  });
});

function renderTable() {
  var list = getUserList();
  var tableContent = "";

  list.forEach(function (user, index) {
    var row =
      `
  <tr>
  <td>` +
      (index + 1) +
      `</td>
  <td>` +
      user.name +
      `</td>
  <td>` +
      user.email +
      `</td>
  </tr>
  `;

    tableContent = tableContent + row;
  }); //we create html with js

  document.querySelector(".js-user-table").innerHTML = tableContent;
}
renderTable();
