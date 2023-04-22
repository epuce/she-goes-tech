$(function () {
    var $openFormBtn = $('.open-form-btn')
    var $userFormContainer = $('.user-form-container')
    var $usernameInput = $('.username-form-field__input')
    var $emailInput = $('.email-form-field__input')
    var $subcsribeBtn = $('.subscribe-btn')

    var emailRegEx =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var $popupCloseBtn = $('.popup__close-btn')
    var list = []

    function renderTable() {
        fetch("http://localhost:8003/api/users/")
            .then((resp) => resp.json())
            .then((resp) => {
                list = resp.data;
                var $userTable = $(".js-user-table");

                list.forEach(function (user, index) {
                    var userInstance = new User(user.username, user.email);

                    var $row = $(
                        $(".js-row-template").html()
                    );

                    $row
                        .find(".js-index")
                        .text(
                            index + 1
                        );
                    $row.find(".js-username").text(userInstance.username);
                    $row.find(".js-email").text(userInstance.email);

                    $row
                        .find(".js-delete")
                        .data(
                            "index",
                            index
                        );

                    $userTable.append($row);
                });

            })

    }

    function openForm() {
        $openFormBtn.toggleClass('open-form-btn--opened')
        $userFormContainer.toggleClass('user-form--opened')
    }

    function showPopup() {
        $('.popup-overlay').css("display", "flex")
        $('.popup__text').text("Thank you for subscribing, " + $usernameInput.val() + "!");
    }

    function saveUser(user) {
        fetch("http://localhost:8003/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:8003",
            },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
            .then((resp) => {
                if (!resp.error) {
                    user.id = resp.data.insertId;
                    list.push(user);
                }
            });

    }


    function saveForm() {
        var isFormValid = true

        if ($usernameInput.val().length < 3) {
            $usernameInput.toggleClass("form-not-valid")
            isFormValid = false
            $('.error-message-username').css("display", "flex")
        }

        if (!emailRegEx.test($emailInput.val())) {
            $emailInput.toggleClass("form-not-valid")
            isFormValid = false
            $('.error-message-email').css("display", "flex")
        }

        //TODO checkbox
        //TODO show popup only if form is valid

        var user = {
            username: $usernameInput.val(),
            email: $emailInput.val(),
            special_deals: true,
            offer_cycle: "Week"
        }

        return user
    }

    $openFormBtn.on('click', function () {
        openForm()
    })

    $subcsribeBtn.on('click', function () {
        saveForm()
        showPopup()
        saveUser()
    })

    $popupCloseBtn.on('click', function () {
        $('.popup-overlay').css("display", "none")
        $openFormBtn.toggleClass('open-form-btn--opened')
        $userFormContainer.toggleClass('user-form--opened')
    })

    renderTable()
})