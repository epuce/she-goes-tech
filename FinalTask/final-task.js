$(function () {
  const $formPopup = $(".form-popup-container");
  const $openForm = $(".open-form-button");
  const $subscribe = $(".offer-cycle");
  const $checkbox = $(".offer-checkbox");
  const $closeForm = $(".close-form-button");
  const $username = $(".username-input");
  const $email = $(".email-input");
  const $tableBody = $(".table-body");
  const $closePopup = $(".close-thanks-button");
  const $popupContainer = $(".thanks-popup-container");
  const $selectCycle = $("#select-cycle");

  isEmailValid = ($email) => {
    let emailRegEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test($email);
  };

  //Parallax effect
  $(window).on("scroll", function () {
    $("body").css("--scrollTop", `${this.scrollY}px`);
  });

  GET = () => {
    $.ajax({
      method: "GET",
      url: "http://localhost:8005/api/subscribers",
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        $(data.data).each(function (i, subscriber) {
          $tableBody.append(
            $("<tr class='row-template' id= " + subscriber.id + ">")
              .append($("<td>").append(subscriber.id))
              .append($("<td>").append(subscriber.username))
              .append($("<td>").append(subscriber.email))
              .append($("<td>").append(!!subscriber.subscribe))
              .append($("<td>").append(subscriber.cycle))
              .append(
                $(
                  "<button type='button' class='delete-button' id='delete-button" +
                    subscriber.id +
                    "'>x</button>"
                )
              )
          );
          $("#delete-button" + subscriber.id + "").on("click", function () {
            $("#" + subscriber.id + "").remove();
            $.ajax({
              method: "DELETE",
              url:
                "http://localhost:8005/api/subscribers/" + subscriber.id + "",
              dataType: "json",
              contentType: "application/json",
              success: function (data) {
                alert("Deleted " + subscriber.username);
              },
            });
          });
        });
      },
    });
  };

  GET();

  function POST() {
    const subscriber = {
      username: $username.val(),
      email: $email.val(),
      subscribe: +$checkbox.is(":checked"),
      cycle: $selectCycle.val(),
    };

    $.ajax({
      method: "POST",
      url: "http://localhost:8005/api/subscribers",
      data: JSON.stringify(subscriber),
      contentType: "application/json",
      dataType: "json",
      success: function () {
        console.log("Succes");
      },
      error: function () {
        alert("Error saving error");
      },
    });
  }

  saveForm = () => {
    if (
      $username.val().length < 3 ||
      $email.val().length < 3 ||
      !isEmailValid($email.val())
    ) {
      $username.addClass("validation-error");
      $email.addClass("validation-error");
    } else {
      $username.removeClass("validation-error");
      $email.removeClass("validation-error");
      $popupContainer.removeClass("hide");
      $("body").addClass("body-noscroll-class");
      $formPopup.addClass("hide");
      $(".row-template").remove();
      POST();
      GET();
    }

    $(".popup-username").html($username.val());
  };

  $(".subscribe-button").on("click", saveForm);

  $openForm.on("click", function () {
    $formPopup.removeClass("hide");
    $("body").addClass("body-noscroll-class");
  });

  $checkbox.on("click", function () {
    $subscribe.toggleClass("hide");
  });

  $closeForm.on("click", function () {
    $formPopup.addClass("hide");
    $("body").removeClass("body-noscroll-class");
    $username.removeClass("validation-error");
    $email.removeClass("validation-error");
  });

  closePopup = () => {
    $popupContainer.addClass("hide");
    $username.val("");
    $email.val("");
    $subscribe.val(false);
    $("body").removeClass("body-noscroll-class");
  };

  $closePopup.on("click", closePopup);
})