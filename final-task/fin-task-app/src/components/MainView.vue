<template>
    <main>
      <h2 class="heading-main">This is Kristianas Tatarcukas final task for the She Goes Tech Bootcamp</h2>
      <p>To subscribe for Dr. Hauschka Face Care Tips and Tricks please fill in the form.</p>
      <ButtonDefault
            text="Open Form"
            @click="isOpen = true"
            class="btn__open-form"
        />
      <UserTable/>
      <FormPopup 
        v-if="isOpen" 
        @close-popup="isOpen = false"
        @form-submit="onFormSubmit()"
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
      var onFormSubmit = function () {
        //isOpen.value = false;
      }
  
      return {
        isOpen,
        onClose,
        onFormSubmit
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
  