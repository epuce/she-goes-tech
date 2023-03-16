$(function () {
  var $nameInput = $(".js-name");
  var $saveBtn = $(".js-save");

  function saveForm() {
    if ($nameInput.val().length < 3) {
      $nameInput.toggleClass("validation-error");
    } else {
      showPopup();
    }
  }

  $saveBtn.on("click", function () {
    saveForm();
  });

  $nameInput.on("keypress", function () {
    if (event.keyCode === 13) {
      saveForm();
    }
  });

  function showPopup() {
    $(".js-message").toggleClass("up-front");
    $(".js-messageText").text(
      "Thank You for subscribing, " + $nameInput.val() + "!"
    );
  }

  $(".js-closemessage").on("click", function () {
    $nameInput.val("");
    showPopup();
  });
});
