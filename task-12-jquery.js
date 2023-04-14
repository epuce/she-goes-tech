$(function () {
  var inputText = $(".textField");
  var saveBtn = $("button").first();
  var popup = $("#popup").hide();
  var closeBtn = $(".closeBtn");

  var textIsValid = true;
  saveBtn.on("click", function () {
    if (inputText.val().length < 3) {
      textIsValid = false;
      inputText.addClass("input-validation");
      popup;
    } else {
      textIsValid = "true";
      inputText.removeClass("input-validation");
      popup.show();
      $(".js-popup-text").text(inputText.val());
    }
  });

  const closeClick=()=>{
  closeBtn.on("click", function () {
    popup.hide();
    inputText.val("");
  });
}

closeClick();


  $('body').on('keyup',function(event){
    if(event.keycode===27){
        closeClick();
    }
})

});
