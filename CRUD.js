function saveForm() {
  var nameInput = document.querySelector(".js-name");
  var emailInput = document.querySelector(".js-email");
  var isFormValid = true;

  if (nameInput.value.length < 3) {
    nameInput.classList.add("validation-error");
    isFormValid = false;
  }
  // add validation and error style. After defining "validaition-eror"
  else {
    nameInput.classList.remove("validation-error")
    // remove the error style if the value is valid
  }
  if (isFormValid) {
    var user = {
      name: nameInput.value,
      email: emailInput.value,
    };
    // 1st name that we specify as the key (we think of), 2nd - we have to reference.

    try {
      var list = JSON.parse(localStorage.userlist);
    } catch {
      var list = getUserList();
      // replaced bu function
    }
    // TRY to make a list, if not, make new one.

    list.push(user);
    // add a new user in the list.

    localStorage.userlist = JSON.stringify(list);

    nameInput.value = "";
    emailInput.value = "";
    // how to clear the Input.

    renderTable();
  }
}

function getUserList() {
  try {
    var list = JSON.parse(localStorage.userlist);
  } catch {
    var list = [];
  }

  return list;
  // returns the list
}

document.querySelector(".js-save").addEventListener("click", function () {
  saveForm();
});

document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      saveForm();
      // TODO: save form
    }
  });
  // assign a button to save
});

function renderTable() {
  var list = getUserList();

  var tableContent = "";

  list.forEach(function (user, index) {
    var row =
      `
        <tr>
            <td>` +
      index +
      `</td>
            <td>` +
      user.name +
      `</td>
            <td>` +
      user.email +
      `</td>
        </tr>
    `;
    // html code in js used with `

    tableContent = tableContent + row;
    // generate table content
  });

  document.querySelector(".js-user-table").innerHTML = tableContent;
  // get the t body, innerHTML (not text)
}

renderTable();
