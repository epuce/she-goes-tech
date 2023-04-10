<template>
    <div class="main-view-wrapper">
        <UserFormContainer @show-popup="showPopup()" ref="userFormContainer"/>
        <UserTable/>
        <ThankyouPopup v-if="isSubscribed" @close-popup="closePopup()"/>
    </div>
</template>
<script>
import { defineComponent, ref} from 'vue';
import UserFormContainer from './UserFormContainer.vue'
import UserTable from './UserTable.vue';
import ThankyouPopup from "./ThankyouPopup.vue";

export default defineComponent ({ 
    components: {
    UserFormContainer,
    UserTable,
    ThankyouPopup
},

  setup() {
   var isSubscribed = ref(false)
   var userFormContainer = ref()

   function showPopup() {
    isSubscribed.value = !isSubscribed.value
   }

   function closePopup () {
    isSubscribed.value = false;
    userFormContainer.value.openForm()
   }

   return {
    isSubscribed,
    showPopup,
    userFormContainer,
    closePopup
   }
}


})
</script>
<style>
body {
    margin: 0;
}
.main-view-wrapper {
    display: flex;
    width: 100vw;
    height: 100vh;
}



</style>