<template>
    <div>
        Yay it works

        <h1>{{ heading }}</h1>
        <h2>You have clicked {{ clickCount }} times</h2>

        <!-- <button @click="addCount">Add count</button> -->
        <!-- we are adding an eventListener with @click="addCount" -->
        <MyBtn text="Add count" @click="addCount()" :type="btnType"></MyBtn> 
        <!-- a column : befor the type mena swe reference a variable -->

        <button @click="isOpen = true">Open popup</button>
        <input v-model="someText">
        <!-- we are looking for a variable named someText -->
        <MyPopup 
            :text="someText" 
            v-if="isOpen" 
            @close-popup="isOpen = false"/>
        <!-- if we open and close the tag, it means that it won't hold any content, we are just rendering it from MyPopup.vue -->
        <!-- v-if stands for view if -->
        <!-- column before text (:text) if we are referencing a variable -->

        <TaskVueIntro 
            firstButton="Click me"
            secondButton="Open popup"
            
            />
        
    </div>

</template>
<script>
import{defineComponent, ref} from 'vue';
import MyBtn from './MyBtn.vue';
import MyPopup from './MyPopup.vue';
import TaskVueIntro from './TaskVueIntro.vue';

export default defineComponent({
    components: {
        MyBtn: MyBtn,
        MyPopup: MyPopup, /*we can also write just Popup, then it would mean that the key and value are the same*/
        TaskVueIntro
    },
    props: { /*adding custom parameters*/
        heading: {
            type: String,
            required: false,
            default: 'Vue data binding works'

           /*required: true,
            we can also set the required to 'true' and then we don't need a default value*/
        },
        btnType: {
            type: String,
            required: false,
            default: undefined
        }
    },
    setup() {
        var clickCount = ref(0); /*ref alows us to have reactivity - if something changes in javascript, then it also changes in the HTML*/
        var isOpen = ref (false);
        var someText = ref ('')

        var addCount = function() {
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

<style>

</style>


<!-- we can also pu global styles under the aasets, but then we have to specify in the config, that we want it like this.
But HTML and JS have to bee in the same place, we can only seperate CSS -->