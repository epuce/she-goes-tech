var nameInput =
    document.querySelector(".js-name"); /*retreive data from inputs*/
  var emailInput = document.querySelector(".js-email");

  function User (name, email) { /*we are creating a User prototype with validation*/
    var emailRegEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setName = function(newName) {
      this.name = typeof newName === 'string' ? newName : '';
    }

    this.setEmail = function (newEmail) {
      this.email = typeof newEmail === "string" ? newEmail : '';
    }

    this.isValidEmail = function(){
      return emailRegEx.test(this.email)
    }
    
    this.isValidName = function(){
      return nameInput.value.length >=3 /*we have to return is so it is accesible later*/

    }

    this.isValidUser = function(){
      return this.isValidEmail() && this.isValidName() /*these both functions have to be true, for the isValidUser to be true*/
    }

    this.getUser = function() {
      return {
        name: this.name,
        email: this.email
      }
    }

    this.setName(name);
    this.setEmail(email)
    
  }

/*we add eventlistener to know when the save button is clicked*/
function saveForm() {
  
  /*var isFormValid = true; - we remove this because it is already in the prototype*/
  var user = new User(nameInput.value, emailInput.value) /* we create a new instance and now the instance holds everything that we need to know*/
  nameInput.classList.toggle("validation-error", !user.isValidName())
  emailInput.classList.toggle("validation-error", !user.isValidEmail())


  /*if (!user.isValidName /*nameInput.value.length < 3 -> we chage this to the prototype one*/
    /*only with this setup, we just apply the claas, but we don't prevent the save from happening*/
    /*nameInput.classList.toggle("validation-error", !user.isValidName()) /*we put toggle function to remove the else part*/
    /*isFormValid = false; we remove this because it is already in the prototype*/
  /*} else {
    nameInput.classList.remove("validation-error");
  }*/

  /*var emailRegEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* we remove this regex, because we already checked it in protoype*/
  /*if (!user.isValidEmail) { /*!emailRegEx.test(emailInput.value) -> we don't need this anymore, as we already checked regex in prototype*/ 
    /*validating e-mail*/
    /*emailInput.classList.toggle("validation-error", !user.isValidEmail());
    /*isFormValid = false; we remove this because it is already in the prototype*/
  /*} else {   we don't need this part because of toggle function
    emailInput.classList.remove("validation-error");
  }*/

  if (user.isValidUser()) {
    var list = getUserList()
  } /*isFormValid - we change this */
    /*var user = {
      /*we are creating data structure for the user*/
      /*name: nameInput.value /*we read the value from the input.*/
      /*email: emailInput.value,
    }; we change this to the prototype*/

    /*var list = getUserList();*/

    if(saveBtn.dataset.index){ /*we use if statement for the editing part*/
        list[saveBtn.dataset.index] = user.getUser(); /*if the element needs to be updated, then this function. if it is new, then list.push*/
        saveBtn.dataset.index = '' /*here we clear the data index*/
    } else {
    list.push(
      user.getUser()
    ); /*now we have a list with the new user in it. so we have to save it back to local storage*/
    }

    localStorage.userList = JSON.stringify(list);

    nameInput.value = ""; /*clearing input fields*/
    emailInput.value = "";

    renderTable(); /*show the updated table after adding new user */
  }


function getUserList() {
  try {
    var list = JSON.parse(
      localStorage.userList
    ); /*we check if there is a local storage named userList*/
  } catch {
    var list =
      []; /*if there is no userList local storage, then we create a new array*/
  }

  return list;
}
var saveBtn = document.querySelector(".js-save")

saveBtn.addEventListener("click", function () {
  saveForm();
});

/*option to save the form on 'Enter*/
/*looping over all input elements*/
document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      saveForm();
    }
    /*console.log(event)/*to read the key that has been pressed*/
  });
});

/*in the DOM we see keyboard action and we see keyCode, which is universal*/

/*to show the saved data in the table*/
/*this way isn't used commonly anymore, but as we are learning from ground up, we will use it*/

function renderTable() {
  var list = getUserList();
  var tableContent =
    ""; /*when we start loading page, we have an emput table. then we generate table content through the forEach loop*/

  if (list.length > 0) {
    document.querySelector(".js-user-table-wrapper").style.display =
      "inline-table";
  }
  list.forEach(function (user, index) {
    /*on each loop we are generating HTML. We use backticks `` (not quotation marks) for multiline code*/ 
    var userInstance = new User (user.name, user.email); /*with prototype*/
    
    var row =
      ` 
    <tr>
    <td>` +(index + 1) +`</td>
    <td>` +userInstance.name /*again - we add the instance here with prototypes*/ +`</td> 
    <td>` +userInstance.email +`</td>
    <td> 
        <button class = "js-edit" data-index="`+index+`">Edit</button>
        <button class="js-delete" data-index="`+index+`">Delete</button> 
    </td>
    </tr>
    `;
/* we add data-index, to know which index each row of the array has. data is a prefix that is used for using soma data for us. it doesn't care how it is called*/
    /*we use tring concationation (see above with backticks)*/
    tableContent = tableContent + row;
  });

  document.querySelector(".js-user-table").innerHTML = tableContent;

  document.querySelectorAll('.js-user-table .js-delete').forEach(function(button) {
    button.addEventListener('click', function(){
        var list = getUserList(); /*we retreive the list from the local storage*/

        list.splice(button.dataset.index, 1) /*first parmeter is mentioned in comment below, the second is how many elements we delete*/
        /*console.log(button.dataset.index) /*here we use the index stored under data-index*/

        localStorage.userList = JSON.stringify(list); /*here we save this new list in the local storage*/

        renderTable(); /*refreshing the table*/
    })
  })

  document.querySelectorAll('.js-user-table .js-edit').forEach (function(button){
    button.addEventListener('click', function(){
        var list = getUserList()
        var user = list[button.dataset.index] /*we retreive the user from the list*/
        
        var userInstance = new User () /* we create a new instance here*/
        userInstance.setEmail(user.email) /*and set the email and name for the new instance*/
        userInstance.setName(user.name)
        
        nameInput.value = userInstance.name /*this way the user is loaded back in the form*/
        emailInput.value = userInstance.email /*we get this from instance*/ /*before it was user.email, but we set it to the instance*/

        /*now we need to save the edited values back to the table, but not add them as a new user (we need to update an existing user in the table)*/

        saveBtn.dataset.index = button.dataset.index /*sincronizes js value with html value. sets property*/
        console.log(saveBtn.dataset)
    })
  })

}

renderTable(); /*we call this function so that the form refreshes when the page has been loaded the first time (or any other time after closing)*/


