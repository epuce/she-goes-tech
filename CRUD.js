/*we add eventlistener to know when the save button is clicked*/
function saveForm () {
    var nameInput = document.querySelector('.js-name') /*retreive data from inputs*/
    var emailInput = document.querySelector('.js-email')
    var isFormValid = true;


    if(nameInput.value.length < 3) { /*only with this setup, we just apply the claas, but we don't prevent the save from happening*/
        nameInput.classList.add('validation-error');
        isFormValid = false /*therefore we add this checkpoint*/
    } else {
        nameInput.classList.remove('validation-error')
    }

    if (isFormValid) {
    var user = { /*we are creating data structure for the user*/
        name: nameInput.value, /*we read the value from the input.*/
        email: emailInput.value
    }

    var list = getUserList()

    list.push(user) /*now we have a list with the new user in it. so we have to save it back to local storage*/

    localStorage.userList = JSON.stringify(list)

    nameInput.value='' /*clearing input fields*/
    emailInput.value=''

    renderTable() /*show the updated table after adding new user */
}
}

function getUserList() {
    try {
        var list = JSON.parse(localStorage.userList) /*we check if there is a local storage named userList*/
    } catch {
        var list = [] /*if there is no userList local storage, then we create a new array*/
    }

    return list;

}
document.querySelector('.js-save')
    .addEventListener('click', function(){
        saveForm()
    })

    /*option to save the form on 'Enter*/
    /*looping over all input elements*/
    document.querySelectorAll('input').forEach(function(input){
        input.addEventListener('keypress', function(event){
            if (event.keyCode === 13) {
                saveForm()    
            }
            /*console.log(event)/*to read the key that has been pressed*/
        })
    })

    /*in the DOM we see keyboard action and we see keyCode, which is universal*/

/*to show the saved data in the table*/
/*this way isn't used commonly anymore, but as we are learning from ground up, we will use it*/
 
function renderTable(){
var list = getUserList()
var tableContent = '' /*when we start loading page, we have an emput table. then we generate table content through the forEach loop*/

list.forEach(function(user, index) { /*on each loop we are generating HTML. We use backticks `` (not quotation marks) for multiline code*/
    var row = ` 
    <tr>
    <td>`+(index+1)+`</td>
    <td>`+user.name+`</td>
    <td>`+user.email+`</td>
    </tr>
    `
/*we use tring concationation (see above with backticks)*/
    tableContent = tableContent + row
})

document.querySelector('.js-user-table').innerHTML = tableContent
}

renderTable() /*we call this function so that the form refreshes when the page has been loaded*/