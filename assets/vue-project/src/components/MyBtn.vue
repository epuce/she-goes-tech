<template>
    <span>
      <button v-on:click="changeText">{{ text }}</button>

      {{ extraText }}
    </span>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        text: {
            type: String,
            default: ''
        },
    },
    setup() {
        var extraText = ref('');
        var changeText = function () {
            this.extraText = "The btn was clicked"
        }

        return {
            changeText,
            extraText,
        }
    }
})
</script>