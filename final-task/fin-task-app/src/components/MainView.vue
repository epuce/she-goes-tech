<template>
    <main>
      <h2 class="heading-main">This is Kristianas Tatarcukas final task for the She Goes Tech Bootcamp</h2>
      <p>To subscribe for Dr. Hauschka Face Care Tips and Tricks please fill in the form.</p>
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
      <!-- @close-popup="isOpen = false" -->
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
      var addNewUser = function (payload) {
            //isOpen.value = false;
            userList.value.push(payload)
            console.log(userList.value)
        }
          
      var removeUser = function (userId) {
            userList.value = userList.value.filter((user) => user.id !== userId)
        }

      var userList = ref([])

        //GET data from data base 
        fetch('http://localhost:8003/api/users')
        .then(resp => resp.json())
        .then(resp => {userList.value = resp.data} )
  
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

  .btn__open-form {
    margin-bottom: 50px;
  }
 
  </style>
  