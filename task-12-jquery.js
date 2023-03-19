$(function () {
  var $nameInput = $(".js-name");
  var $saveBtn = $(".js-save");

  $saveBtn.on("click", function () {
    if ($nameInput.val().length >= 3) {
      $("#js-input-value").html($nameInput.val())
      $(".popup-wrapper").show();

      $("#close-btn").click(function () {
        closePopUp()
      });

      $("body").on("keyup", function (event) {
        if (event.keyCode === 27) {
          closePopUp()
        }
      });

      $nameInput.removeClass("validation-error");
    } else {
      $nameInput.addClass("validation-error");
    }
  });
});

function closePopUp() {
  var $nameInput = $(".js-name");
  $(".popup-wrapper").hide();
  $nameInput.val("") 
}