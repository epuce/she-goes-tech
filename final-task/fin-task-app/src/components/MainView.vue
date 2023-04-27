<template>
    <main>
      <p >This is Kristianas Tatarcukas final task for the She Goes Tech Bootcamp</p>
      <div class="heading-wrapper">
            <img src="../assets/img/Hauska_img.jpg" alt="">
            <h3 class="heading-main">
                To subscribe for Dr. Hauschka Face Care Tips and Tricks <br>
                please fill in the form.
            </h3>
      </div>
      <ButtonDefault
            text="Open Form"
            @click="isOpen = true"
            class="btn__open-form"
        />
      <UserTable 
            :user-list="userList"
            @remove-user="removeUser"/>
      <FormPopup 
        v-if="isOpen" 
        :is-form-valid="isFormValid"
        :is-name-valid="isNameValid"
        :is-surname-valid="isSurnameValid"
        :is-email-valid="isEmailValid"
        @close-popup="isOpen = false"
        @add-new-user="addNewUser"
      />
    </main> 
  </template>
  
  <script>
  import UserTable from './UserTable.vue'
  import FormPopup from './FormPopup.vue'
  import ButtonDefault from './ButtonDefault.vue'
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    components: {
        ButtonDefault,
        UserTable,
        FormPopup
    },
    setup () {
      var isOpen = ref(false)
      var onClose = function () {
            isOpen.value = false;
        }
      var userList = ref([])

      //GET data from data base 
      fetch('http://localhost:8003/api/users')
        .then(resp => resp.json())
        .then(resp => {userList.value = resp.data})
  
        var isFormValid = ref(true)
        var isNameValid = ref(true)
        var isSurnameValid = ref(true)
        var isEmailValid = ref(true)

      var addNewUser = function (payload, showMessage) {
            //validation for input
            var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if (payload.first_name.length < 3) {
                isNameValid.value = false
                console.log(isNameValid.value)
            }
            if (payload.last_name.length < 3) {
                isSurnameValid.value = false
                console.log(isSurnameValid.value)
            }
            if (!emailRegEx.test(payload.email)) {
                isEmailValid.value = false
                console.log(isEmailValid.value)
            } 

            if (payload.first_name.length < 3 || 
                payload.last_name.length < 3 || 
                !emailRegEx.test(payload.email)) {
                isFormValid.value = false

                console.log(isFormValid.value)
            } else {
                showMessage.value = true
                console.log(showMessage.value)
            }
        
            if (isFormValid.value === true) {
                showMessage.value = true
                console.log(showMessage.value)

                //saving part -> DATABASE LOGIC
                fetch('http://localhost:8003/api/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:8003/api/users'
                    },
                    body: JSON.stringify(payload),
                })
                .then(resp => resp.json())
                .then(resp => {
                    if(!resp.error && isFormValid.value) {
                        userList.value.push({
                            ...payload,
                            id: resp.data.insertId
                        })

                        // user.value = {
                        //     first_name: '',
                        //     last_name: '',
                        //     email: '',
                        //     sample_option: '',
                        //     sample_product: ''
                        // }
                    }
                })
            } else {
                showMessage.value = false
            }
           
        }
          
      var removeUser = function (userId) {
            userList.value = userList.value.filter((user) => user.id !== userId)
        }

        
      return {
            isOpen,
            onClose,
            userList,
            addNewUser,
            removeUser,
            isFormValid,
            isNameValid,
            isSurnameValid,
            isEmailValid,
        }
    }
  })
  </script>
  
  <style>

  .heading-main, p {
    margin-bottom: 50px;
  }

  .heading-wrapper {
    position: relative;
    margin-bottom: 20px;
  }

  .heading-wrapper img {
    width: 900px;
    height: 200px;
    opacity: 0.5;
    object-fit: cover;
  }

  .heading-wrapper .heading-main {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .btn__open-form {
    margin-bottom: 50px;
  }
 
  </style>
  