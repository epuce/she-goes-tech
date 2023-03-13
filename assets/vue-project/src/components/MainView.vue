<template>
    <div>
        test
        <h1>{{ heading }} {{ clickCount || '' }}</h1>

        <button v-on:click="addCount">Add one</button>

        <MyBtn text="This is my btn"></MyBtn>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MyBtn from './MyBtn.vue';

export default defineComponent({
    components: {
        MyBtn,
    },
    setup() {
        var heading = 'This is how Vue binds data to html';
        var clickCount = ref(0);
        var addCount = function() {
            clickCount.value ++;
        }

        return {
            heading,
            clickCount,
            addCount,
        }
    }
})
</script>