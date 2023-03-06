function saveForm() {
    localStorage.userList = JSON.stringify(list)
    var name = document.querySelector('.js-name').value
    var email = document.querySelector('.js-email').value
    
    var user = {
        name: name,
        email: email,
    }

    try {
        var list = JSON.parse(localStorage.userList)
    } catch {
        var list = []
    }

    list.push(user)

    localStorage.userList = JSON.stringify(list)
}

document.querySelector('.js-save')
    .addEventListener('click', function() {
        saveForm()
    })

document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            saveForm()
        }
    })
})