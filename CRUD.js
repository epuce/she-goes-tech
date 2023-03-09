var nameInput = document.querySelector(".js-name"); //we are reading the value
var emailInput = document.querySelector(".js-email");

function User(name, email) {
  // this.email = typeof email === "string" ? email : "";

  // this.name = typeof name === "string" ? name : "";

  var emailRegEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  this.setName = function (newName) {
    this.name = typeof newName === "string" ? newName : "";
  }; //setter

  this.setEmail = function (newEmail) {
    this.email = typeof newEmail === "string" ? newEmail : "";
  }; //setter. This is needed for updating the name and email

  this.isValidEmail = function () {
    //add validation
    return emailRegEx.test(this.email);
  };
  this.isValidName = function () {
    return nameInput.value.length >= 3;
    // add.validation;
  };
  this.isValidUser = function () {
    //add validation
    return this.isValidEmail() && this.isValidName();
  };
  this.getUser = function () {
    return {name: this.name, email: this.email};
  }; //getter functions
  this.setName(name);
  this.setEmail(email);
}

function saveForm() {
  // console.trace(); //for debugging

  var user = new User(nameInput.value, emailInput.value);

  nameInput.classList.toggle("validation-error", !user.isValidName());

  emailInput.classList.toggle("validation-error", !user.isValidEmail());

  if (user.isValidUser()) {
    // //we only save when input is valid
    // const user = {
    //   name: nameInput.value, //the first is the key, the second is the variable we aare referencing
    //   email: emailInput.value,
    // };

    var list = getUserList();

    if (saveBtn.dataset.index) {
      list[saveBtn.dataset.index] = user.getUser(); //updates the existing one

      delete saveBtn.dataset.index; //removed the index attribute
    } else {
      //add a new item to the list
      list.push(user.getUser());
    }

    localStorage.userList = JSON.stringify(list);

    nameInput.value = "";
    emailInput.value = "";

    renderTable();
  }
}

//RETURNS SAVED USER LIST

//below we are reading the error
function getUserList() {
  try {
    var list = JSON.parse(localStorage.userList);
  } catch {
    var list = [];
  }
  return list;
}

var saveBtn = document.querySelector(".js-save");

saveBtn.addEventListener("click", function () {
  saveForm();
});

// document.querySelectorAll("input").forEach(function (input) {
//   input.addEventListener("keypress", function (event) {
//     if (event.keyCode === 13) {
//       //Save form
//       saveForm();
//     }
//   });
// });

//UPLOADS THE TABLE
function renderTable() {
  var list = getUserList();
  var tableContent = "";

  if (list.length > 0) {
    document.querySelector(".js-user-table-wrapper").style.display =
      "inline-table";

    // style.marginTop we need to use camelCase for properties with 2 words
  }
  list.forEach(function (user, index) {
    var userInstance = new User(user.name, user.email);
    var row =
      `
  <tr>
  <td>` +
      (index + 1) +
      `</td>
  <td>` +
      userInstance.name +
      `</td>
  <td>` +
      userInstance.email +
      `</td>
  <td>
  <button class="js-edit" data-index="` +
      index +
      `">Edit</button>
  </td>
  <td> 
  <button class="js-delete" data-index="` +
      index +
      `">Delete</button></td>
  </tr>
  `; //we add data attribute, data is a prefix which holds some data for us

    tableContent = tableContent + row;
  }); //we create html with js

  document.querySelector(".js-user-table").innerHTML = tableContent;
  document
    .querySelectorAll(".js-user-table .js-delete")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        var list = getUserList();
        list.splice(button.dataset.index, 1); //number refers on how many items should be deleted
        // console.log(button.dataset.index);//we get the data that we stored in the data attribute: data-inde="`+index+`"
        localStorage.userList = JSON.stringify(list);
        renderTable(); //after delete, then render (update) the table
      });
    });

  document
    .querySelectorAll(".js-user-table .js-edit")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        var list = getUserList();

        var user = list[button.dataset.index]; //we get an element from the list based on the button index: button.dataset.index

        //If we go through the prototype, validation will kick in. We will get this data validated, that's why we needed setters.
        var userInstance = new User();
        userInstance.setEmail(user.email);
        userInstance.setName(user.name);

        nameInput.value = user.name; //now the user will be loaded inside the form
        emailInput.value = user.email; //now the user will be loaded inside the form

        saveBtn.dataset.index = button.dataset.index; //now Save button will get the same index as Edit button has once clicked
        console.log(saveBtn.dataset);
      });
    });
}
renderTable(); //this is needed to render the table once the page is uploaded
