var nameInput = document.querySelector(".js-name");
var emailInput = document.querySelector(".js-email");

function saveForm() {
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

  var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // use RegEx for validation codes.

  if (!emailRegEx.test(emailInput.value)) {
    // how we test the email.
    // added ! makes the value the other way around.
    emailInput.classList.add("validation-error")
    isFormValid = false
  }
  else {
    emailInput.classList.remove("validation-error")
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

    if (saveBtn.dataset.index) {
      list [saveBtn.dataset.index] = user;

      delete saveBtn.dataset.index
      // saveBtn.dataset.index = " " - deleting
    } else {
    list.push(user)
    }
    // add a new user in the list. if - updatetes and existing one

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

var saveBtn = document.querySelector(".js-save")

saveBtn.addEventListener("click", function () {
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

  if (list.length > 0) {
    document.querySelector(".js-user-table-wrapper")
      .style.display = "inline-table"
      // style.what is the value (style.marginTop) = to which value we are setting
      // how to set style if the is a certain value.
  }

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
      <td>
        <button class="js-edit" 
                data-index="`+index+`">
          Edit
        </button>
        <button class="js-delete" 
                data-index="`+index+`">
          Delete
        </button>
      </td>
    </tr>
    `
    // html code in js used with `
    // add index: data-(somethingWeThinkOf)="`+index+`" - string concatination

    tableContent = tableContent + row;
    // generate table content
  });

  document.querySelector(".js-user-table").innerHTML = tableContent;
  // get the t body, innerHTML (not text)
  
  document.querySelectorAll(".js-user-table .js-delete")
  .forEach(function(button) {
    button.addEventListener("click", function() {
      var list = getUserList();
      list.splice(button.dataset.index, 1)
       // deleting list item. what item, number of items
      localStorage.userlist = JSON.stringify(list);
      // get back the list.
      renderTable()
    })
  })

  document.querySelectorAll(".js-user-table .js-edit")
  .forEach(function(button) {
    button.addEventListener("click", function () {
      var list = getUserList()
      var user = list[button.dataset.index]
      // specify the specific element and index
      nameInput.value = user.name
      emailInput.value = user.email

      saveBtn.dataset.index = button.dataset.index
    })
  })
}
renderTable();
