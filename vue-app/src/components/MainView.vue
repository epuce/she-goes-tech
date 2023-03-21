<template>
    <div>
        Yay it works

        <h1>{{ heading }}</h1>
        <h2>You have clicked {{ clickCount }} times</h2>

        <!-- <button @click="addCount">Add count</button> -->
        <!-- we are adding an eventListener with @click="addCount" -->
        <MyBtn text="Add count" :type="btnType"></MyBtn> 
        <!-- a column : befor the type mena swe reference a variable -->
    </div>

</template>
<script>
import{defineComponent, ref} from 'vue';
import MyBtn from './MyBtn.vue';

export default defineComponent({
    components: {
        MyBtn: MyBtn
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
        var clickCount = ref(0) /*ref alows us to have reactivity - if something changes in javascript, then it also changes in the HTML*/

        var addCount = function() {
            clickCount.value = clickCount.value + 1
        }

        return {
            clickCount: clickCount,
            addCount: addCount,
        }
    }
})
</script>

<style>

</style>
