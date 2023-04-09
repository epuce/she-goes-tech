$(function () {
    $(".js-save").on("click", function () {
      var $name = $(".js-user-input");
      if ($name.val().length < 3) {
        $name.addClass("validation-error");
      } else {
        $name.removeClass("validation-error");
        $(".popup-container").removeClass("hidePopup");
      }
  
      $(".js-user-name").html($name.val());
    });
  
    function closePopup() {
      $(".popup-container").addClass("hidePopup");
      $(".js-user-input").val("");
    }
  
    $(".js-close-button").on("click", closePopup);
  
    $("body").on("keydown", function (event) {
      if (event.keyCode == 27) {
        closePopup();
      }
    });
  });