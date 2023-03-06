function saveForm() {
    var nameInput = document.querySelector('.js-name')
    var emailInput = document.querySelector('.js-email')
    var isFormValid = true;

    if (nameInput.value.length < 3) {
        nameInput.classList.add('validation-error')
        isFormValid = false
    } else {
        nameInput.classList.remove('validation-error')
    }

    if (isFormValid) {
        var user = {
            name: nameInput.value,
            email: emailInput.value,
        }
    
        var list = getUserList()
    
        list.push(user)
    
        localStorage.userList = JSON.stringify(list)
    
        nameInput.value = ''
        emailInput.value = ''
    
        renderTable()
    }
}

function getUserList() {
    try {
        var list = JSON.parse(localStorage.userList)
    } catch {
        var list = []
    }

    return list;
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

function renderTable() {
    var list = getUserList()
    var tableContent = ''

    list.forEach(function(user, index) {
        var row = `
            <tr>
                <td>`+(index+1)+`</td>
                <td>`+user.name+`</td>
                <td>`+user.email+`</td>
            </tr>
        `
        // `<td>`+index+`</td>` = "<td>0</td>"
        // `<td>`+index+`</td>` = "<td>1</td>"
        // "text" + 123 + "text" = "text123text"

        tableContent = tableContent + row
    })

    document.querySelector('.js-user-table').innerHTML = tableContent
}

renderTable()