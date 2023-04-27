var nameInput = document.querySelector(".js-name");
var emailInput = document.querySelector(".js-email");

function User(name, email) {
  this.email = typeof email === "string" ? email: " ";
  // if (typeof name === "string") {this.name = name} else {this.name = "";}

 
  var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  this.setName = function(newName) {
    this.name = typeof newName === "string" ? newName : "";
  }

  this.setEmail = function(newEmail) {
    this.email = typeof newEmail === "string" ? newEmail : "";
  }

  this.isValidEmail = function() {
    return emailRegEx.test(this.email)
  }

  this.isValidName = function() {
    return nameInput.value.length >= 3
  }

  this.isValidUser = function() {
    return this.isValidEmail() && this.isValidName()
  }

  this.getUser = function() {
    return {
      name: this.name,
      email: this.email,
    }
  }

  this.setName(name); 
  this.setEmail(email);
}

function saveForm() {
  var user = new User(nameInput.value, emailInput.value)
  // creating an instance with new parametres

  nameInput.classList.toggle("validation-error", !user.isValidName())
  emailInput.classList.toggle("validation-error", !user.isValidEmail())

  if (user.isValidUser()) {
    var list = getUserList()

    if (saveBtn.dataset.index) {
      list [saveBtn.dataset.index] = user.getUser();

      delete saveBtn.dataset.index
      // saveBtn.dataset.index = " " - deleting
    } else {
    list.push(user.getUser())
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
    var userInstance = new User(user.name, user.email);
    var row =
      `
        <tr>
            <td>` +
      (index+1)+
      `</td>
            <td>` +
      userInstance.name +
      `</td>
            <td>` +
      userInstance  .email +
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
      
      var userInstance = new User()
      userInstance.setEmail(user.email)
      userInstance.setName(user.name)

      nameInput.value = user.name
      emailInput.value = user.email

      saveBtn.dataset.index = button.dataset.index
    })
  })
}
renderTable();
