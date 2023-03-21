<template>
    <button @click="onClick()"
            :class="{
                'btn--primary': type === 'primary', /*if button type is primary, we add the class primary*/
                'btn--warning': type === 'warning' /*we add class waring, if button type is waring*/
                /*or we can do it like this
                `'btn--' + type` - her we use string contatination, to get the necessary class*/
                }"
            >
        {{ text }}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: "primary"
        }
    },
    setup() {

        var onClick = function () {

        }
        return {
            onClick: onClick
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