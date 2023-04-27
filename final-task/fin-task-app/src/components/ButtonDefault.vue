<template>
    <button 
        type="button" 
        :class="{
            'btn--primary' : type === 'primary',
            'btn--inactive' : type === 'inactive'
        }" 
        @click="onClick()"
        
        >
        {{ text }}
    </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: 'primary'
        }
    },
    setup () {
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
    width: 100%;
    text-transform: uppercase;
    font-family: inherit;
    font-weight: 500;
    padding: 8px 16px;
    border: solid 1px #80808024;
    background: rgba(84, 110, 72, 0.639);
    border-radius: 4px;
    box-shadow: rgba(84, 110, 72, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
}

    
.btn--primary:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
                rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.btn--primary:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.24);
}

.btn--primary:disabled,
.btn--inactive {
    background: rgb(183, 181, 181);
    opacity: 0.5;
    cursor: not-allowed;
}
</style>