$(function () {

    var $nameInput = $('.js-name');
    var $subscribeBtn = $('.js-subscribe');
    var $popup = $('.popup-mask');
    var $closePopup = $('.btn-close');
    
    function greetUser() {
        $subscribeBtn.on('click', function() {
            console.log('click');
            var $inputValid = true;
        
            if ($nameInput.val().length < 3) {
                $nameInput.addClass('validation-error');
                $inputValid = false;
            } else {
                $nameInput.removeClass('validation-error');
                $popup.removeClass('hide');

            }

            $('.js-message').html('Thank you for subscribing ' + $nameInput.val() + '!');

            $closePopup.on('click', function() {
                $popup.addClass('hide');
                $nameInput.val('');
            })
        })
    }
    greetUser();
})
