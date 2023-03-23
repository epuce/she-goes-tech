<template>
    <button @click="onClick()" :class="'btn--'+type"
        >
        {{ text }}</button>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: 'primary',
        }
    },
    setup() {
        var onClick = function () {

        }

        return {
            onClick
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