var nameInput = document.querySelector('.js-name')

function saveForm() {
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
        }
    
        var list = getUserList()
    
        if (saveBtn.dataset.index) {
            list[saveBtn.dataset.index] = user;

            saveBtn.dataset.index = ""
        } else {
            list.push(user)
        }
    
        localStorage.userList = JSON.stringify(list)
    
        nameInput.value = ''
    
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
        var row = `
            <tr>
                <td>`+(index+1)+`</td>
                <td>`+user.name+`</td>
                <td>
                    <button class="js-modify"
                            data-index="`+index+`">
                        Modify
                    </button>
                    <button class="js-done"
                            data-index="`+index+`">
                        Done
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

    document.querySelectorAll('.js-user-table .js-done')
        .forEach(function(button) {
            button.addEventListener('click', function() {
                var list = getUserList();

                list.splice(button.dataset.index, 1)

                localStorage.userList = JSON.stringify(list);
                renderTable()
            })
        })

    document.querySelectorAll('.js-user-table .js-modify')
        .forEach(function(button) {
            button.addEventListener('click', function() {
                var list = getUserList()
                var user = list[button.dataset.index]

                nameInput.value = user.name

                saveBtn.dataset.index = button.dataset.index
            })
        })
}

renderTable()