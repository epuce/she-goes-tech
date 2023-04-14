<template>
    <div>
        <!-- Yay it works
        <h1>{{ heading }}</h1> -->
        <!-- <h2>You have clicked {{ clickCount }} times</h2> -->
        <!-- <button @click="addCount()"> Add count </button> -->
        <!-- <MyBtn text="Add count" @click="addCount()" :type='btnType'></MyBtn> -->
        <!-- <MyBtn text="Content" @click="addCount()" :type='btnType'></MyBtn> -->
        <!-- <button @click="isOpen = true">Open popup</button> -->
        <!-- <input v-model="someText"> -->
        <!-- {{ someText }} -->

        <!-- <MyPopup 
            :text="someText"
            v-if="isOpen" 
            @close-popup = "$event => isOpen = false"/> -->

        <!-- <TaskVueIntro text="Click me"/> -->
        <TaskServerRequest />
    </div>
</template>

<script>
import { defineComponent} from 'vue';
// import MyBtn from './MyBtn.vue';
// import MyPopup from './MyPopup.vue'
// import TaskVueIntro from './TaskVueIntro.vue'
import TaskServerRequest from './TaskServerRequest.vue';

export default defineComponent({
    components: {
    // MyBtn: MyBtn,
    // MyPopup,
    // TaskVueIntro,
    TaskServerRequest
},
    props: {
        // heading: {
        //     type: String,
        //     required: false,
        //     default: "Vue data binding works"
        // },
        // btnType:{
        //     type: String,
        //     required: false,
        //     default: undefined,
        // }
    },
    setup() {
        // var heading = 'Vue data binding works';
        // var clickCount = ref(0);
        // var isOpen = ref(false);
        // var someText = ref('')
        // var addCount = function () {
        //     clickCount.value = clickCount.value + 1;
        // };
        return {
            // heading: heading, 
            // clickCount: clickCount,
            // addCount: addCount,
            // isOpen,
            // someText,
        };
    },
})
</script>

<style>
</style>