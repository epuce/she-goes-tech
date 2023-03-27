<template>
    <div class="popup__wrapper">
        <div class="popup">
            {{ popupText }}
            <button class="btn_close" @click="onClose()">Close</button>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            text: {
                type: String,
                required: true,
            },
            popupText: {
                type: String,
                required: false,
                default: "You did it"
        }
        },
        setup(props, { emit }) {
            var onClose = function() {
                emit('close-popup')
            }

            return {
                onClose
            }
        }
    })
</script>

<style>
.popup__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.3);
}

.popup {
    padding: 32px;
    width: 30%;
    background: #cfcfcf;
    border-radius: 10px;
}

.btn_close {
    float: right;
}

.closed {
    background: red;
}

</style>