var nameInput = document.querySelector('.name')

if (nameInput.value.length < 3) {
    nameInput.classList.add('validation-error')
    isFormValid = false
} else {
    nameInput.classList.remove('validation-error')
}

$(document).ready(function(){
  $("button").click(function(){
    alert("Thank you for subscribing" + $("#test").val());
  });
});


var OneSignal = window.OneSignal || [];

OneSignal.push(['init', {
    appId: '29a39b4b-5540-4b66-bd2b-bb74ebb264c5',
    safari_web_id: 'web.onesignal.auto.253751a8-ac24-4181-97da-883dbdadac49',
    promptOptions: {
        slidedown: {
            prompts: [
                {
                    type: 'push',
                    autoPrompt: true,
                    text: {
                        actionMessage: 'Vai vēlaties saņemt paziņojumus par svarīgākajām ziņām',
                        acceptButton: 'Jā',
                        cancelButton: 'Nē, paldies!'
                    },
                    delay: {
                        pageViews: 3,
                        timeDelay: 5
                    }
                }
            ]
        }
    },
    welcomeNotification: {
        "title": "DELFI",
        "message": "Paldies par pierakstīšanos DELFI jaunumu paziņojumiem! Turpmāk saņemsi svarīgāko ziņu paziņojumus savā ierīcē uzreiz pēc to publicēšanas portālā!"
    }
}]);

OneSignal.push(function() {
    OneSignal.sendTag("popup", "true");
});
