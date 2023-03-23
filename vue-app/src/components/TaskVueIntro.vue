<template>
    <div class="task__wrapper">
        <button @click="$event =>  btnText = 'Clicked'">{{ btnText }}</button>
        <button @click="
                    isOpen = true, 
                    onClickRed()"
                    
            >
            Open popup
        </button>
        <TaskVueIntroPopup 
            text="You did it"
            v-if="isOpen" 
            @close-popup="$event => isOpen = false"
           
            />

    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TaskVueIntroPopup from './TaskVueIntroPopup.vue';

export default defineComponent({
    components: {
        TaskVueIntroPopup,
    },
    props: {
        btnText: {
            type: String,
            required: true,
            //default: 'Click me'
        }
    },
    setup () {
        var btnText = ref('Click me')
        var isOpen = ref(false)

        var onClickRed = function () {
            
        }

        return {
            btnText,
            isOpen,
            onClickRed
        }
    }
})

</script>

<style>
.red {
    background: red;
}
</style>