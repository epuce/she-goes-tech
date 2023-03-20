$(function () {
  var $nameInput = $(".js-name");
  var $emailInput = $(".js-email");

  function User(name, email) {
    this.email = typeof email === "string" ? email : " ";
    // if (typeof name === "string") {this.name = name} else {this.name = "";}

    var emailRegEx =
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
      return this.name.length >= 3;
    };

    this.isValidUser = function () {
      return this.isValidEmail() && this.isValidName();
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
    var user = new User($nameInput.val(), $emailInput.val());
    // creating an instance with new parametres. $name.val()

    $nameInput.toggleClass("validation-error", !user.isValidName());
    $emailInput.toggleClass("validation-error", !user.isValidEmail());

    if (user.isValidUser()) {
      var list = getUserList();

      if ($saveBtn.data("index")) {
        list[$saveBtn.data("index")] = user.getUser();
        $saveBtn.data("index", "");
      } else {
        list.push(user.getUser());
      }
      // add a new user in the list. if - updatetes and existing one

      localStorage.userlist = JSON.stringify(list);

      $nameInput.val("");
      $emailInput.val("");
      // how to clear the Input. name.val("what would be the value aka empty")

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

  var $saveBtn = $(".js-save");

  $saveBtn.on("click", function () {
    saveForm();
  });

  $("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      saveForm();
    }
  });

  function renderTable() {
    var list = getUserList();
    var $userTable = $(".js-user-table");

    if (list.length === 0) {
      $(".js-user-table-wrapper").hide();
      // .style.display = "inline-table"
      // style.what is the value (style.marginTop) = to which value we are setting
      // how to set style if the is a certain value.
    }

    $userTable.html("");
    // clearing the table

    list.forEach(function (user, index) {
      var userInstance = new User(user.name, user.email);
      var $row = $($(".js-row-template").html());

      $row.find(".js-index").text(index + 1);
      $row.find(".js-name").text(userInstance.name);
      $row.find(".js-email").text(userInstance.email);
      $row.find(".js-edit, .js-delete").data("index", index);
      // setting the value for both buttons

      $userTable.append($row);
      // adding the element last within the element.
    });

    $userTable.find(".js-delete").on("click", function () {
      var list = getUserList();

      list.splice($(this).data("index"), 1);

      localStorage.userlist = JSON.stringify(list);
      renderTable();
    });

    $userTable.find(".js-edit").on("click", function () {
      var list = getUserList();
      var user = list[$(this).data("index")];

      var userInstance = new User()
      userInstance.setEmail(user.email)
      userInstance.setName(user.name)

      $nameInput.val(userInstance.name)
      $emailInput.val(userInstance.email)

      $saveBtn.data('index', $(this).data('index'))
    });
  }

  renderTable();
});
