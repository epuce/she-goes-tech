var saveBtn = document.querySelector(".js-save");
var userNameInput = document.querySelector(".js-username");
var emailInput = document.querySelector(".js-email");
var passwordInput = document.querySelector(".js-password");

function saveForm() {
    var userIsValid = true;
    var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(userNameInput.value.length<3){
        userNameInput.classList.add('validation-error');
        userIsValid = false;
    }else{
        userNameInput.classList.remove('validation-error')
    }

    if(!emailRegEx.test(emailInput.value)){
        emailInput.classList.add('validation-error');
        userIsValid = false;
    }else{
        emailInput.classList.remove('validation-error')
    }

    if(passwordInput.value.length<3){
        passwordInput.classList.add('validation-error');
        userIsValid = false;
    }else{
        passwordInput.classList.remove('validation-error')
    }

    if(userIsValid){
    var user={
        userName: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    } 

    var list = getUserList();

    if(saveBtn.dataset.index){
list[saveBtn.dataset.index] =user;
saveBtn.dataset.index = '';
    }else{
    list.push(user);
    }

    localStorage.userList = JSON.stringify(list);

    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = ''

    renderTable();   
}
}

function getUserList() {
    try{
        var list = JSON.parse(localStorage.userList);
    } catch{
        var list = [];
    }
    return list;
}

saveBtn.addEventListener('click', function(){
    saveForm();
})

function renderTable (){
var list = getUserList();
var tableContent = '';

if(list.length>0){
    document.querySelector(".user-table-wrapper").style.display = 'inline-table';
}
list.forEach(function(user, index){
    var row = `
    <tr>
       <td> `+(index+1)+` </td>
       <td> `+user.userName+` </td>
       <td> `+user.email+` </td>
       <td> 
       <button type='button' class="js-delete" data-index="`+index+`">Delete</button>
       <button type='button' class="js-edit" data-index="`+index+`">Edit</button>
       </td>
    </tr>`
    tableContent = tableContent + row;
    
})

document.querySelector(".js-user-table").innerHTML  = tableContent;

document.querySelectorAll(' .js-delete').forEach(function(button){
    button.addEventListener('click', function(){
        var list = getUserList();
        list.splice(button.CDATA_SECTION_NODE.index, 1);
        localStorage.userList = JSON.stringify(list);
        renderTable();
    })
})

document.querySelectorAll('.js-edit').forEach(function(button){
    button.addEventListener('click', function(){
        var list = getUserList();
        var user = list[button.dataset.index]
        userNameInput.value = user.userName;
        emailInput.value = user.email;
        saveBtn.dataset.index = button.dataset.index
    })
})
}


renderTable();

