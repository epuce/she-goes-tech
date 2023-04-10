<template>
    <span>
        <button v-on:click="changeText">{{ btnText }}</button>

        <button :class="btnPopup" @click="isOpen=true">Open Popup</button>

    <TaskVueIntroPopup v-if="isOpen" 
                       text="You did it"
                       @close-popup="isOpen=false; btnPopup='btn-clicked'"
                       >
    </TaskVueIntroPopup>
</span>

</template>

<script>
import { defineComponent, ref } from 'vue';
import TaskVueIntroPopup from './TaskVueIntroPopup.vue';

export default defineComponent ({
    components: { 
        TaskVueIntroPopup, 
    },
    
    props: {
        
    },
    setup() {
        var btnText = ref("Click me");
        var changeText = function () {
            this.btnText = "Clicked"
        } 

        var isOpen = ref(false)
        var btnPopup = ref("")

        
        return {
            btnText,
            changeText,
            isOpen,
            btnPopup,
        };
    },
    
})

</script>

<style>

.btn-clicked {
    background: red;
}
</style>