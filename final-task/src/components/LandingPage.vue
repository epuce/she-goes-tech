<template>
    <div>
        <h1>{{pageHeading}}</h1>
        <h4>some text decribing what to do</h4>

        <button class="open-btn" @click="isOpen = true" @close-popup="isOpenTwo = false">Create a new record</button>
        <PopupForm v-if="isOpen"></PopupForm>
        <LogTable></LogTable>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PopupForm from "./popupForm.vue";
import LogTable from "./LogTable.vue";

export default defineComponent({
    components: { 
        PopupForm, 
        LogTable
    },
    
    setup() {
        var pageHeading = "Surfboard rentals registration";
        var isOpen = ref(false);
        
        return {
            pageHeading,
            isOpen,
        };
    },
   
});
</script>

<style>
.open-btn{
    background-color: navy;
  color: white;
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border-radius: 4px;
}
</style>
