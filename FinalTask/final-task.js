$(function () {
  var $formPopup = $(".form-popup-container");
  var $openForm = $(".open-form-button");
  var $subscribe = $(".offer-cycle");
  var $checkbox = $(".offer-checkbox");
  var $closeForm = $(".close-form-button");
  var $username = $(".username-input")
  var $email = $(".email-input");
  var $tableBody = $(".table-body");
  var $closePopup = $(".close-thanks-button");
  var $popupContainer = $(".thanks-popup-container");
  
  $openForm.on("click", function () {
    $formPopup.removeClass("hide");
  });

  $checkbox.on("click", function () {
    $subscribe.toggleClass("hide");
  });

  $closeForm.on("click", function () {
    $formPopup.addClass("hide");
  });

  function closePopup() {
    $popupContainer.addClass("hide");
    $username.val("");
    $email.val("")
  };

  $closePopup.on("click", closePopup)

function GET() {$.ajax({
  method: "GET",
  url: "http://localhost:8005/api/subscribers",
  dataType: "json",
  contentType: "application/json",
  success: function(data) {
        $(data.data).each(function(i, subscriber){
        $tableBody.append($("<tr id= "+subscriber.id+">")
        .append($("<td>").append(subscriber.id))
        .append($("<td>").append(subscriber.username))
        .append($("<td>").append(subscriber.email))
        .append($("<td>")).append("")
        .append($("<td>")).append($("<button type='button' id='delete-button"+subscriber.id+"'>x</button>"))
        );
        $("#delete-button"+subscriber.id+"").on('click', function(){
          $("#"+subscriber.id+"").remove();
          $.ajax({
            method: "DELETE",
            url: "http://localhost:8005/api/subscribers/"+subscriber.id+"",
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
              console.log(data)
            }
          })
        })
      })
  }
})
}

GET()  

function POST() {
  var subscriber = {
    username: $username.val(),
    email: $email.val(),
  }

  $.ajax({
    method: "POST",
    url: "http://localhost:8005/api/subscribers",
    data: JSON.stringify(subscriber),
    contentType: "application/json",
    dataType: "json",
    success: function(newSubscriber) {
      addSubscriber(newSubscriber)
    },
    error: function() {
      alert('Error saving error')
    }
})
}

function saveForm() {
  if ($username.val().length < 3 || $email.val().length < 3) {
    $username.addClass("validation-error");
    $email.addClass("validation-error");
  } else {
    $username.removeClass("validation-error");
    $email.removeClass("validation-error");
    $popupContainer.removeClass("hide")
    $formPopup.addClass("hide")
    POST();
    GET();
  }

  $(".popup-username").html($username.val());
}

$(".subscribe-button").on("click", saveForm);


})