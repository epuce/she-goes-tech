$(function () {
  var $input = $(".js-input");
  var $btn = $(".js-btn");
  var $closeBtn = $(".js-btn-close");

  function btnClick() {
    if ($input.val().length < 3) {
      $input.addClass("validation-error");
    } else {
      $input.removeClass("validation-error");
      popUp(); // if previous statement false - we activate a pop up
    }
  }

  $btn.on("click", function () {
    btnClick();
  });

  // TODO: save on enter - why does it only show up for a few seconds?
  // $("input").on("keypress", function (event) {
  //   if (event.keyCode === 13) {
  //     btnClick();
  //   }
  // });

  // pop up  function if no validation error
  function popUp() {
    $(".js-pop-up").toggleClass("visible");
    $(".input").css({ "opacity:": "0.3" });
    $(".js-body").toggleClass("overlay");
    $(".js-pop-up-text").text("Thank you for subscribing " + $input.val());
  }

  $closeBtn.on("click", function () {
    closePopUp();
  });

  //   close on esc
  $(".js-body").on("keyup", function (event) {
    if (event.keyCode === 27) {
      closePopUp();
    }
  });

  // function for then popup closed = input field is cleared
  function closePopUp() {
    $input.val("");
    $(".js-pop-up").removeClass("visible");
    $(".js-body").removeClass("overlay");
  }
});
