$(function () {
  // Pop up window
  $("button").click(function () {
    var nameInput = $("#nameInput");
    if (nameInput.val().length >= 3) {
      var inputValue = nameInput.val();
      $(".popup")
        .text("Thank you for subscribing " + inputValue)
        .show();
      $("overlay").show();
    } else {
      nameInput.toggleClass("validation-error");
    }
  });
});
