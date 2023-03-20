$(document).ready(function () {
    $(".js-save").click(function () {
        validateForm();
    })

    function validateForm() {
        var name = $('.js-name').val();
        if (nameValue.length >=3) {
            alert("Tank you for subscribing input!");
        } else 
        


    }



    //     
    // });




    
})

// $('.js-name').on('input', function() {
//     var input=$(this);
//     var validName = input.val();
//     if(validName){
//         addClass('valid')}
//         else {
//             input.addClass('inValid')
//         }
//     })


