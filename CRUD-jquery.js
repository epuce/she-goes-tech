$(function () {
  // var nameInput = document.querySelector(".js-name"); //we are reading the value
  var $nameInput = $(".js-name"); //we are reading the value
  // var emailInput = document.querySelector(".js-email");
  var $emailInput = $(".js-email");
  // var saveBtn = document.querySelector(".js-save");
  var $saveBtn = $(".js-save"); //we distinguish that this element

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
      // return $nameInput.val().length >= 3;
      return this.name.length >= 3;

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

    var user = new User($nameInput.val(), $emailInput.val());
    // nameInput.value is equal to $nameInput.val()
    $nameInput.toggleClass("validation-error", !user.isValidName());
    // nameInput.classList.toggle("validation-error", !user.isValidName()) is equal to  $nameInput.toggleClass("validation-error", !user.isValidName());
    $emailInput.toggleClass("validation-error", !user.isValidEmail());

    if (user.isValidUser()) {
      // //we only save when input is valid
      // const user = {
      //   name: nameInput.value, //the first is the key, the second is the variable we aare referencing
      //   email: emailInput.value,
      // };

      var list = getUserList();

      // if ($saveBtn.dataset.index) {
      //   list[$saveBtn.dataset.index] = user.getUser(); //updates the existing one

      //   delete $saveBtn.dataset.index; //removed the index attribute
      // } else {
      //   //add a new item to the list
      //   list.push(user.getUser());
      // }

      if ($saveBtn.data("index")) {
        list[$saveBtn.data("index")] = user.getUser(); //updates the existing one

        delete $saveBtn.data("index"); //removed the index attribute
      } else {
        //add a new item to the list
        list.push(user.getUser());
      } //the same as above block just in jquery

      localStorage.userList = JSON.stringify(list);

      $nameInput.val("");
      $emailInput.val("");
      //  emailInput.value = "" is the same as $emailInput.val("") in jquery;
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

  // $saveBtn.addEventListener("click", function () {
  //   saveForm();
  // });
  $saveBtn.on("click", function () {
    saveForm();
  });

  // document.querySelectorAll("input").forEach(function (input) {
  //   input.addEventListener("keypress", function (event) {
  //     if (event.keyCode === 13) {
  //       //Save form
  //       saveForm();
  //     }
  //   });
  $("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      saveForm;
    }
  }); //the same as above, just in jquery
  // });

  //UPLOADS THE TABLE
  function renderTable() {
    var list = getUserList();
    // var tableContent = "";//no need with jquery
    var $userTable = $(".js-user-table");
    if (list.length === 0) {
      // document.querySelector(".js-user-table-wrapper").style.display =
      //   "inline-table";
      $(".js-user-table-wrapper").hide(); //we hide table if it is 0

      // .style.display =
      //   "inline-table";

      // style.marginTop we need to use camelCase for properties with 2 words
    }
    $userTable.html(""); //we are clearing the data

    list.forEach(function (user, index) {
      var userInstance = new User(user.name, user.email);

      var $row = $($(".js-row-template").html()); //we are reading html from the template, t.y., ".js-row-template" and we create a new jquery element from html

      $row.find(".js-index").text(index + 1); //give me this html element with the reference to the row and populate text with the value we want
      $row.find(".js-name").text(userInstance.name);
      $row.find(".js-email").text(userInstance.email);
      $row.find(".js-edit,.js-delete").data("index", index); //we choose multiple classes and set the index which comes from our loop. $row.find()means find within "js-row-template" the element which has class ".js-edit"

      $(".js-user-table").append($row); //we have an html block and we want to add the element last within the element

      //   MOVING EVERYTHING TO HTML FOR JQUERY    `
      // <tr>
      // <td>` +
      //       (index + 1) +
      //       `</td>
      // <td>` +
      //       userInstance.name +
      //       `</td>
      // <td>` +
      //       userInstance.email +
      //       `</td>
      // <td>
      // <button class="js-edit" data-index="` +
      //       index +
      //       `">Edit</button>
      // </td>
      // <td>
      // <button class="js-delete" data-index="` +
      //       index +
      //       `">Delete</button></td>
      // </tr>
      // `; //we add data attribute, data is a prefix which holds some data for us

      // tableContent = tableContent + row;//no need with jquery
    }); //we create html with js

    $userTable.find(".js-delete").on("click", function () {
      var list = getUserList();
      list.splice($(this).data("index"), 1); //number refers on how many items should be deleted
      // console.log(button.dataset.index);//we get the data that we stored in the data attribute: data-inde="`+index+`"
      localStorage.userList = JSON.stringify(list);
      renderTable(); //after delete, then render (update) the table
    });
    // document.querySelector(".js-user-table").innerHTML = tableContent; //no need with jquery
    // document
    //   .querySelectorAll(".js-user-table .js-delete")
    //   .forEach(function (button) {
    //     button.addEventListener("click", function () {
    //       var list = getUserList();
    //       list.splice(button.dataset.index, 1); //number refers on how many items should be deleted
    //       // console.log(button.dataset.index);//we get the data that we stored in the data attribute: data-inde="`+index+`"
    //       localStorage.userList = JSON.stringify(list);
    //       renderTable(); //after delete, then render (update) the table
    //     });
    // });

    $userTable.find(".js-edit").on("click", function () {
      var list = getUserList();

      var user = list[$(this).data("index")]; //we get an element from the list based on the button index: button.dataset.index

      //If we go through the prototype, validation will kick in. We will get this data validated, that's why we needed setters.
      var userInstance = new User();
      userInstance.setEmail(user.email);
      userInstance.setName(user.name);

      $nameInput.val(userInstance.name); //now the user will be loaded inside the form
      $emailInput.val(userInstance.email); //now the user will be loaded inside the form

      // saveBtn.dataset.index = button.dataset.index; //now Save button will get the same index as Edit button has once clicked

      $saveBtn.data("index", $(this).data("index")); //the same as the above line but chnaged to jquery
    });
    // document
    //   .querySelectorAll(".js-user-table .js-edit")
    //   .forEach(function (button) {
    //     button.addEventListener("click", function () {
    //       var list = getUserList();

    //       var user = list[button.dataset.index]; //we get an element from the list based on the button index: button.dataset.index

    //       //If we go through the prototype, validation will kick in. We will get this data validated, that's why we needed setters.
    //       var userInstance = new User();
    //       userInstance.setEmail(user.email);
    //       userInstance.setName(user.name);

    //       $nameInput.val() = user.name; //now the user will be loaded inside the form
    //       $emailInput.val() = user.email; //now the user will be loaded inside the form

    //       // saveBtn.dataset.index = button.dataset.index; //now Save button will get the same index as Edit button has once clicked

    //       $saveBtn.data("index", button.dataset.index); //the same as the above line but chnaged to jquery
    //     });
    //   });
  }
  renderTable(); //this is needed to render the table once the page is uploaded
});
