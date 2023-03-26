<template>
    <div>
        Yay it works
        <TaskVueIntro></TaskVueIntro>
        <h1>{{ heading }}</h1>
        <h2>You have clicked {{ clickCount }} times</h2>
        <h3> You have clicked {{ isClicked }}</h3>
        <!-- <button @click="addCount()">Add count</button> -->
        <MyBtn text="Add count" @click="addCount()" :type="btnType" something-else="this is some text" />
        <MyBtn text="Content" @click="addCount()"> </MyBtn>

        <button @click="isOpen = true">Open popup</button>
        <MyPopup v-if="isOpen" @close-popup="isOpen = false" />
        <button text="Click me" @click="$event => isClicked"> Click me</button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MyBtn from './MyBtn.vue';
import MyPopup from './MyPopup.vue';
import TaskVueIntro from './TaskVueIntro.vue';
export default defineComponent({
    components: {
    MyBtn: MyBtn,
    MyPopup,
    TaskVueIntro,
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
        // let text = "";
        // var isClicked = function () {
        //     if (text === "click me") {
        //         text = "Clicked";
        //     }
        // }
        var addCount = function () {
            clickCount.value = clickCount.value + 1
        }
        return {
            clickCount: clickCount,
            addCount: addCount,
            isOpen,
            // isClicked,
        }
    }
})
</script>

<style></style>