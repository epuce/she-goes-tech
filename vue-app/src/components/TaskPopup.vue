<template>
    <div class="popup_wrapper">
        <div class="popup">{{ text }}
            <button class="btn__close" @click="closePopup">Close</button>
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
    },
    setup(props, { emit }) {
        var closePopup = function () {
            emit("close-popup");
        }
        return {
            closePopup,
        }
    }
});


</script>

<style>
.popup_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
}

.popup {
    padding: 32px;
    width: 70%;
    background: #ffffff;
}

.btn__close {
    float: right;
}
</style>

