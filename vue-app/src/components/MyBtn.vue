<template>
    <button @click="onCLick()" :class="{'btn--primary': type === 'primary', 'btn--warning': type === 'warning'}">{{ text }}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        text: {
            type: String, 
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'primary'
        }
    },
    setup() {
        var onCLick = function() {

        }

        return {
            onCLick: onCLick
        }
    }
})
</script>
<style>
.btn--primary {
    background: blue;
}

.btn--warning {
    background: orange;
}
</style>