$(function () {
  var $formPopup = $(".form-popup-container");
  var $openForm = $(".open-form-button");
  var $subscribe = $(".offer-cycle");
  var $checkbox = $(".offer-checkbox");
  var $closeForm = $(".close-form-button");
  

  $openForm.on("click", function () {
    $formPopup.removeClass("hide");
  });

  $checkbox.on("click", function () {
    $subscribe.toggleClass("hide");
  });

  $closeForm.on("click", function () {
    $formPopup.addClass("hide");
  });


var $username = $(".username-input")
var $email = $(".email-input")
var $rowTemplate = $(".rowTemplate")
var $tableBody = $(".table-body")

function addSubscriber(subscriber) {
  $tableBody.append('<td>'+ subscriber.username + '</td>')
}

$.ajax({
  method: "GET",
  url: "http://localhost:8005/api/subscribers",
  dataType: "json",
  success: function(data) {
  $.each(data, function(i, subscriber) {
  addSubscriber(subscriber)
  })
  }
  
})
$(".subscribe-button").on('click', function() {
  var subscriber = {
    username: $username.val(),
    email: $email.val(),
  }

  $.ajax({
    method: "POST",
    url: "http://localhost:8005/api/subscribers",
    data: subscriber,
    dataType: "json",
    success: function(newSubscriber) {
      addSubscriber(newSubscriber)
    },
    error: function() {
      alert('Error saving error')
    }
  })
})

})