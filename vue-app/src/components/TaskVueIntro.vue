<template>
    <button class="Btn_clicked" @click="Clicked()"> {{ textChange }} </button>

    <button @click="onClick()"> TEXT </button>

</template>

<script>
import { defineComponent, ref } from 'vue';
import TaskVueIntroPopup from './TaskVueIntroPopup.vue';

export default defineComponent ({

    props: {
        text: {  
            type: String,
            required: true,
        }
    },

    setup() {
        var textChange = ref("Click me")
        var Clicked = function() {
            textChange.value = "Clicked"
        }

       

        return {
            Clicked,
            textChange,
           
        }
    }
    


})

</script>
<style></style>