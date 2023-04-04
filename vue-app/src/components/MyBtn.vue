<template>
    <button :class="{
        'btn--primary': type === 'primary'
    }">
        {{ text }}
    </button>
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
            default: 'primary'
        },
    },
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