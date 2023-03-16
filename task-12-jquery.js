$(function () {
    var $nameInput = $('.js-name');
    var $saveBtn = $('.js-save');

    function saveForm() {
        if ($nameInput.val().length < 3) {
            $nameInput.toggleClass("valid-err")
        } else {
            showPopup();
        }
    }

    $saveBtn.on('click', function () {
        saveForm();
    })

    $nameInput.on("keypress", function (e) {
        if (e.keyCode === 13) {
            saveForm();
        }
    })

    function showPopup() {
        $(".js-popup").toggleClass("visible")
        $(".js-popupText").text("Thank you for subscribing, " + $nameInput.val() + "!");

    }

    $(".js-closePopup").on("click", function () {
        showPopup();
        $nameInput.val("")
    })


    $(document).keyup(function (e) {
        if ($(".js-popup").hasClass("visible")) {
            if (e.keyCode == 27) {
                showPopup();
                $nameInput.val("")
            }
        }
    });

})
