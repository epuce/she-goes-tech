var nameInput = document.querySelector('.js-name')
var emailInput = document.querySelector('.js-email')

function User(name, email) {
    var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.setName = function(newName) {
        this.name = typeof newName === 'string' ? newName : '';
    }

    this.setEmail = function(newEmail) {
        this.email = typeof newEmail === 'string' ? newEmail : '';
    }

    this.isValidEmail = function() {
        return emailRegEx.test(this.email)
    }

    this.isValidName = function() {
        return nameInput.value.length >= 3
    }

    this.isValidUser = function() {
        return this.isValidEmail() && this.isValidName()
    }

    this.getUser = function() {
        return {
            name: this.name,
            email: this.email,
        }
    }

    this.setName(name);
    this.setEmail(email);
}

function saveForm() {
    var user = new User(nameInput.value, emailInput.value)

    nameInput.classList.toggle('validation-error', !user.isValidName())
    emailInput.classList.toggle('validation-error', !user.isValidEmail())

    if (user.isValidUser()) {
        var list = getUserList()
    
        if (saveBtn.dataset.index) {
            list[saveBtn.dataset.index] = user.getUser();

            saveBtn.dataset.index = ""
        } else {
            list.push(user.getUser())
        }
    
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

var saveBtn = document.querySelector('.js-save')
    
saveBtn.addEventListener('click', function() {
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

    if (list.length > 0) {
        document.querySelector('.js-user-table-wrapper')
            .style.display = 'inline-table'

            // style.marginTop
    }

    list.forEach(function(user, index) {
        var userInstance = new User(user.name, user.email);
        var row = `
            <tr>
                <td>`+(index+1)+`</td>
                <td>`+userInstance.name+`</td>
                <td>`+userInstance.email+`</td>
                <td>
                    <button class="js-edit"
                            data-index="`+index+`">
                        Edit
                    </button>
                    <button class="js-delete"
                            data-index="`+index+`">
                        Delete
                    </button>
                </td>
            </tr>
        `
        // `<td>`+index+`</td>` = "<td>0</td>"
        // `<td>`+index+`</td>` = "<td>1</td>"
        // "text" + 123 + "text" = "text123text"

        tableContent = tableContent + row
    })

    document.querySelector('.js-user-table').innerHTML = tableContent

    document.querySelectorAll('.js-user-table .js-delete')
        .forEach(function(button) {
            button.addEventListener('click', function() {
                var list = getUserList();

                list.splice(button.dataset.index, 1)

                localStorage.userList = JSON.stringify(list);
                renderTable()
            })
        })

    document.querySelectorAll('.js-user-table .js-edit')
        .forEach(function(button) {
            button.addEventListener('click', function() {
                var list = getUserList()
                var user = list[button.dataset.index]
                
                var userInstance = new User()
                userInstance.setEmail(user.email)
                userInstance.setName(user.name)

                nameInput.value = userInstance.name
                emailInput.value = userInstance.email

                saveBtn.dataset.index = button.dataset.index
            })
        })
}

renderTable()