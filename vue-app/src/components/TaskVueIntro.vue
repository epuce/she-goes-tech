<template>
    <div class="task__wrapper">
        <button @click="$event =>  btnText = 'Clicked'" :class="{'red': changeClass }">{{ btnText }}</button>
        <button @click="isOpen = true"
                :class="{'red': changeClass }"   
            >
            Open popup
        </button>
        <TaskVueIntroPopup 
            text="You did it"
            v-if="isOpen" 
            @close-popup="onClose()"
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
        var changeClass = ref(false)

        var onClose = function () {
            isOpen.value = false;
            changeClass.value = true;
        }

        return {
            btnText,
            isOpen,
            changeClass,
            onClose
        }
    }
})

</script>

<style>
.red {
    background: red;
}
</style>