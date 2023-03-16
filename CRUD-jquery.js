$(function () {
  var $nameInput = $(".js-name");
  var $emailInput = $(".js-email");
  var $saveBtn = $(".js-save");

  function User(name, email) {
    var emailRegEx =
      /(?:^|,)((([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))(?:$|(?=,)))/;

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

    // name and email validation. Toggle means if this parameter is true, the first class is added, if the parameter is false class is removed.
    $nameInput.toggleClass("validation-error", !user.isValidName());
    $emailInput.toggleClass("validation-error", !user.isValidEmail());

    if (user.isValidUser()) {
      var list = getUserList();

      if ($saveBtn.data("index")) {
        list[$saveBtn.data('index')] = user.getUser();

        $saveBtn.data("index", "");
      } else {
        list.push(user.getUser());
      }

      localStorage.userList = JSON.stringify(list);

      $nameInput.val("");
      $emailInput.val("");

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

  $saveBtn.on("click", function () {
    saveForm();
  });

  $("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      saveForm();
    }
  }); // use enter to save

  function renderTable() {
    var list = getUserList();
    var $userTable = $(".js-user-table");

    if (list.length === 0) {
      $(".js-user-table-wrapper").hide();
    } // if item length is 0 we hide it

    $userTable.html(""); //clear the table and then add it one by one

    list.forEach(function (user, index) {
      var userInstance = new User(user.name, user.email);
      var $row = $($(".js-row-template").html()); // we read the html and we create a new jquery element from that html

      $row.find(".js-index").text(index + 1); // populating each of the cloned cells
      $row.find(".js-name").text(userInstance.name);
      $row.find(".js-email").text(userInstance.email);
      $row.find(".js-edit, .js-delete").data("index", index);

      $userTable.append($row); // appending means adding the element last within the element
    });

    $userTable.find(".js-delete").on("click", function () {
      var list = getUserList();

      list.splice($(this).data("index"), 1);
      // modifying the list with list.splice... ($(this).data('index') - this reads the index from this button

      localStorage.userList = JSON.stringify(list);

      renderTable();
    });

    // TODO: review - editing does not work
    $userTable.find(".js-edit").on("click", function () {
      var list = getUserList();
      var user = list[$(this).data('index')];

      var userInstance = new User(); // so we do not show undefined in the table/ when we edit text. we are getting data from storage based on instance, setting part validates them and then we retrieve them with a valid format
      userInstance.setEmail(user.email);
      userInstance.setName(user.name);

      $nameInput.val(userInstance.name)
      $emailInput.val(userInstance.email)

      $saveBtn.data('index', $(this).data('index'));
    });

  }

  renderTable();
});
