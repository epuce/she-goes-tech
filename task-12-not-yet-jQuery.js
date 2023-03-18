

function validateForm() {
    if (document.getElementById("name").value.length < 3) {
        document.getElementById("name").classList.add('validation-error');
    } else {
        popup.classList.add("open-popup");
        overlayA.classList.add("open-popup");
        document.getElementById("textButton").innerHTML = document.getElementById("name").value;
    }
}

function closePopup() {
    popup.classList.remove("open-popup");
    overlayA.classList.remove("open-popup");
    document.getElementById("name").classList.remove('validation-error');
    if (document.getElementById("name").value !="") {
        document.getElementById("name").value = ""
    } 
}

document.onkeydown = function(event) {
    if (event.keyCode == 27) {
        closePopup();
    }
}




