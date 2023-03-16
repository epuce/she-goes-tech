$(function () {
  var $nameInput = $(".js-name");
  var $saveBtn = $(".js-save");
  var $popupWindow = $(".popup");

  function User(name) {
    this.setName = function (newName) {
      this.name = typeof newName === "string" ? newName : "";
    };

    this.isValidName = function () {
      return this.name.length >= 3;
    };

    this.getUser = function () {
      return {name: this.name};
    };

    this.setName(name);
  }

  $saveBtn.on("click", function () {
    saveForm();
  });

  $popupWindow.find(".popup-button").on("click", function () {
    closePopUp();
  });

  $popupWindow.on("keypress", function (event) {
    if (event.keyCode === 27) {
      closePopUp();
    }
  });

  function saveForm() {
    var user = new User($nameInput.val());

    $nameInput.toggleClass("validation-error", !user.isValidName());

    if (user.isValidName()) {
      $popupWindow.css("visibility", "visible");
      // var $popup = $($popupWindow.html());
      $(".popup").find(".text-from-input").text(user.name);
      $nameInput.val("");
    }
  }

  function closePopUp() {
    $popupWindow.css("visibility", "hidden");
    $nameInput.val("");
    $nameInput.removeClass("validation-error");
  }
});
