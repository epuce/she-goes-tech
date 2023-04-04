<template>
    <div>
        Yay it works

        <h1>{{ heading }}</h1>
        <h2>You have clicked {{ clickCount }} times</h2>

        <!-- <button @click="addCount()">Add count</button> -->
        <MyBtn text="Add count" @click="addCount()" :type="btnType" something-else="this is some text" />
        <MyBtn text="Content" @click="addCount()"> </MyBtn>

        <button @click="isOpen = true">Open popup</button>
        <MyPopup v-if="isOpen" @close-popup="isOpen = false" />
        <TaskVueIntro />
        <TaskPopup />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MyBtn from './MyBtn.vue';
import MyPopup from './MyPopup.vue';
import TaskPopup from './TaskPopup.vue';
import TaskVueIntro from './TaskVueIntro.vue';

export default defineComponent({
    components: {
        MyBtn: MyBtn,
        MyPopup,
        TaskVueIntro,
        TaskPopup
    },
    props: {
        heading: {
            type: String,
            required: false,
            default: "Vue data binding works"
        },
        btnType: {
            type: String,
            required: false,
            default: undefined,
        }
    },
    setup() {
        // var heading = "Vue data binding works"
        var clickCount = ref(0)
        var isOpen = ref(false)

        var addCount = function () {
            clickCount.value = clickCount.value + 1
        }

        return {
            clickCount: clickCount,
            addCount: addCount,
            isOpen,
        }
    }
})
</script>

<style></style>