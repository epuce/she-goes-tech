<template>
    <div class="popup-wrapper">
        <div class="popup">
            {{ text }}

            <button class="btn-close" @click="onClose()">Close</button>
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
        }
    },

    setup(props, { emit }) {
      var onClose = function() {
        emit('close-popup')
      }  

      return {
        onClose,
      }
    }
})
</script>

<style>
 .popup-wrapper {
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
    background: white;
 }

 .btn-close {
    float: right;
 }
</style>