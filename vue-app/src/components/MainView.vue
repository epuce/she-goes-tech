<template>
    <div>
    
        <!---<h1>{{ heading }}</h1>
        <h2>You have clicked {{ clickCount }} times</h2>
        <MyBtn text="Add count" :type="btnType" @click="addCount()"></MyBtn>
        <button @click="isOpen = true">Open popup</button>
        <input v-model="someText">
        {{ someText }}
        <MyPopup :text="someText" v-if="isOpen" @close-popup="isOpen = false" />

        <TaskVueIntro/>-->
        <TaskServerRequest/>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TaskServerRequest from './TaskServerRequest.vue';

//import MyBtn from './MyBtn.vue';
//import MyPopup from './MyPopup.vue';
//import TaskVueIntro from './TaskVueIntro.vue';

export default defineComponent({
    components: {
    // MyBtn: MyBtn,
    // MyPopup,
    //TaskVueIntro,
    TaskServerRequest,
    
},
    props: {
        heading: {
            type: String,
            required: false,
            default: "Binding works"
        },
        btnType: {
            type: String,
            required: false,
            default: undefined
        }
    },
    setup() {
        var clickCount = ref(0);
        var isOpen = ref(false);
        var someText= ref('');
        var addCount = function () {
            clickCount.value = clickCount.value + 1
        }
        return {
            clickCount: clickCount,
            addCount: addCount,
            isOpen,
            someText,
        }
    }
})
</script>

<style></style>