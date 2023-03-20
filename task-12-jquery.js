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

  $popupWindow.find(".popup-button").on("click", closePopUp);

  $("body").on("keyup", function (event) {
    if (event.keyCode === 27) {
      closePopUp();
    }
  });

  function saveForm() {
    var user = new User($nameInput.val());

    $nameInput.toggleClass("validation-error", !user.isValidName());

    if (user.isValidName()) {
      $popupWindow.css("pointer-events", "none");
      $popupWindow.css("visibility", "visible");
      $(".popup").find(".text-from-input").text(user.name);
      $nameInput.val("");
    }
  }

  function closePopUp() {
    $popupWindow.css("visibility", "hidden");
    $nameInput.val("");
    $nameInput.removeClass("validation-error");
    $nameInput.css("pointer-events", "stroke");
  }
});

//Solution provided by the teacher
// $(function () {
//   $(".js-save").on("click", function () {
//     var $name = $(".js-name");
//     if ($name.val().length < 3) {
//       $name.addClass("validation-error");
//     } else {
//       $name.removeClass("validation-error");
//       $(".js-popup").removeClass("hide");
//       $(".js-placeholder").text($name.val()); //we add the text to the popup
//     }
//     //it is good to have $ assigned to variable so that I know that variable holds the
//   });

//   function closePopup() {
//     $(".js-popup").addClass("hide");
//     $(".js-name").val("");
//   }

//   $(".js-close").on("click", closePopup);
//   $("body").on("keyup", function (event) {
//     if (!$(".js-popup").hasClass("hide") && event.keyCode === 27) {
//       closePopup();
//     } //when the popup doesn't have the class "hide"
//   });
// }); //this will be trigerred once the HTML is finished to be loaded. It is the same as DOM CONTENT LOADED function
