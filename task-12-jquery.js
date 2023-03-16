$(function () {
  var $nameInput = $(".js-name");
  var $saveBtn = $(".js-save");
  var $closePopup = $(".close");
  var $overlay = $(".overlay");
  var $popup = $(".popup");
  var $content = $(".popup-content");

  function saveForm() {
    var $name = $nameInput.val();
    this.isValidName = function () {
      return $name.length >= 3;
    };

    $nameInput.toggleClass("validation-error", !isValidName());

    if (isValidName()) {
      $overlay.show();
      $popup.show();
      $content.append("Thank you for subscribing " + $name);
    }
  }

  function clear() {
    $overlay.hide();
    $popup.hide();
    $nameInput.val("");
    $content.empty();
  }

  $saveBtn.on("click", function () {
    saveForm();
  });

  $closePopup.on("click", function () {
    clear();
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      clear();
    }
  });
});
