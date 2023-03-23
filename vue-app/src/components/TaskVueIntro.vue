<template>
    <div>
        <button @click="onClick()">{{ buttonText }}</button>
        <button  @click="isOpen = true" :class="{'color-red': changeClass}">Open another popup</button>
        <TaskVueIntroPopup text="You did it" v-if="isOpen" @close-popup="onClose()"/>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import TaskVueIntroPopup from './TaskVueIntroPopup.vue';


export default defineComponent({
    components: {
    TaskVueIntroPopup,
    
},


    setup() {
        var isOpen = ref(false);
        var buttonText = ref("Click me");
        var changeClass = ref(false)
        var onClick = function() {
            this.buttonText = 'Clicked';
        }
        var onClose = function() {
            isOpen.value = false;
            changeClass.value = true
        }

    
       return {
        isOpen,
        buttonText,
        onClick,
        changeClass,
        onClose
       }
    }
})

</script>
<style>
.color-red {
    background-color: red;
}
</style>