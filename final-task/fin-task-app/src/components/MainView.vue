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
  
      var addNewUser = function (payload, resp) {
          userList.value.push({
              ...payload,
              id: resp.data.insertId
          })
          console.log(userList.value)
           
        }
          
      var removeUser = function (userId) {
            userList.value = userList.value.filter((user) => user.id !== userId)
        }

        
      return {
            isOpen,
            onClose,
            userList,
            addNewUser,
            removeUser
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
  