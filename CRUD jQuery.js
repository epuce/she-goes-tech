$(function () {
  /*var nameInput = document.querySelector(".js-name")*/
  var $nameInput = $(".js-name");
  /*var emailInput = document.querySelector(".js-email");*/
  var $emailInput = $(".js-email");

  /*var saveBtn = document.querySelector(".js-save")*/
  var $saveBtn = $(".js-save");

  function User(name, email) {
    /*we are creating a User prototype with validation*/ var emailRegEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setName = function (newName) {
      this.name = typeof newName === "string" ? newName : "";
    };

    this.setEmail = function (newEmail) {
      this.email = typeof newEmail === "string" ? newEmail : "";
    };

    this.isValidEmail = function () {
      return emailRegEx.test(this.email);
    };

    this.isValidName = function () {
      return (
        this.name.length >= 3
      ); /*we have to return is so it is accesible later*/
    };

    this.isValidUser = function () {
      return (
        this.isValidEmail() && this.isValidName()
      ); /*these both functions have to be true, for the isValidUser to be true*/
    };

    this.getUser = function () {
      return {
        name: this.name,
        email: this.email,
      };
    };

    this.setName(name);
    this.setEmail(email);
  }

  function saveForm() {
    /*var user = new User(nameInput.value, emailInput.value) 
  nameInput.classList.toggle("validation-error", !user.isValidName())
  emailInput.classList.toggle("validation-error", !user.isValidEmail())*/

    var user = new User(
      $nameInput.val(),
      $emailInput.val()
    ); /* we create a new instance and now the instance holds everything that we need to know*/
    $nameInput.toggleClass("validation-error", !user.isValidName());
    $emailInput.toggleClass("validation-error", !user.isValidEmail());

    if (user.isValidUser()) {
      var list = getUserList();
    }
    /*if(saveBtn.dataset.index){ 
  list[saveBtn.dataset.index] = user.getUser(); 
  saveBtn.dataset.index = '' */

    if ($saveBtn.data("index")) {
      list[$saveBtn.data("index")] = user.getUser();
      $saveBtn.data("index", "");
    } else {
      list.push(user.getUser());
    }

    localStorage.userList = JSON.stringify(list);

    /*nameInput.value = "";*/
    $nameInput.val("");
    /*emailInput.value = "";*/
    $emailInput.val("");

    renderTable();
  }

  function getUserList() {
    try {
      var list = JSON.parse(
        localStorage.userList
      ); /*we check if there is a local storage named userList*/
    } catch {
      var list =
        []; /*if there is no userList local storage, then we create a new array*/
    }

    return list;
  }

  /*saveBtn.addEventListener("click", function () {
  saveForm();*/

  $saveBtn.on("click", function () {
    saveForm();
  });

  /* with vanilla js
document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      saveForm();
    }
  });
});*/

  $("input").on("keypress", function () {
    if (event.keyCode === 13) {
      saveForm();
    }
  });

  function renderTable() {
    var list = getUserList();
    var $userTable = $(".js-user-table");

    if (list.length === 0) {
      /*document.querySelector(".js-user-table-wrapper").style.display =*/
      $(".js-user-table-wrapper").hide();
    }

    $userTable.html(""); /*we clear the tablebefore adding one by one all data*/

    list.forEach(function (user, index) {
      var userInstance = new User(user.name, user.email);

      var $row = $(
        $(".js-row-template").html()
      ); /*we copy the same element and we will modify a copy of it*/

      $row
        .find(".js-index")
        .text(
          index + 1
        ); /*find the necessary element and populate it (.text) with necessary information*/
      $row.find(".js-name").text(userInstance.name);
      $row.find(".js-email").text(userInstance.email);

      $row
        .find(".js-edit, .js-delete")
        .data(
          "index",
          index
        ); /*we set the index to the index tht comes from the loop*/

      $userTable.append($row);
    });

    $userTable.find(".js-delete").on("click", function () {
      var list = getUserList(); /*we retreive the list from the local storage*/

      list.splice($(this).data("index"), 1);

      localStorage.userList =
        JSON.stringify(
          list
        ); /*here we save this new list in the local storage*/

      renderTable();
    });

    $userTable.find(".js-edit").on("click", function () {
      var list = getUserList();
      var user =
        list[$(this).data("index")]; /*we retreive the user from the list*/

      var userInstance = new User(); /* we create a new instance here*/
      userInstance.setEmail(
        user.email
      ); /*and set the email and name for the new instance*/
      userInstance.setName(user.name);

      $nameInput.val(
        userInstance.name
      ); /*this way the user is loaded back in the form*/
      $emailInput.val(
        userInstance.email
      ); /*we get this from instance*/ /*before it was user.email, but we set it to the instance*/

      /*now we need to save the edited values back to the table, but not add them as a new user (we need to update an existing user in the table)*/

      /*$saveBtn.dataset.index = button.dataset.index*/
      $saveBtn.data(
        "index",
        $(this).data("index")
      ); /*sincronizes js value with html value. sets property*/
    });
  }

  renderTable(); /*we call this function so that the form refreshes when the page has been loaded the first time (or any other time after closing)*/
});
