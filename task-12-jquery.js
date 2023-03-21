$(function () {
  $(".js-save").on("click", function () {
    var $name = $(".js-name");
    if ($name.val().length < 3) {
      $name.addClass("validation-error");
    } else {
      $name.removeClass("validation-error");
      $(".js-popup").removeClass("hide");
      $(".js-popupText").text(
        "Thank you for subscribing, " + $name.val() + "!"
      );
    }
  });
  function closePopup() {
    $(".js-popup").addClass("hide");
    $(".js-name").val("");
  }

  $(".js-close").on("click", closePopup);

  $('body').on('keyup', function(event){
    if(!$(".js-popup").hasClass("hide") && event.keyCode === 27) {
      closePopup();
    }
  })

});
