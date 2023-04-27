<template>
  <div class="popup__wrapper">
    <div class="popup">
      Thank you for subscribing, {{ popUpText }}
      <button class="btn__close" @click="onClose()">x</button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    popUpText: {
        type: String,
    }
  },
  setup(props, {emit}) {
    var onClose = function () {
        emit('close-popup')
    };
    return {
      onClose,
    };
  },
});
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
  background: rgba(0, 0, 0, 0.4);
}
.popup {
  text-align: center;
  padding: 32px;
  width: 40%;
  background: #fff;
}
.btn__close {
  float: right;
  padding: 2px 6px;
  font-size: 10px;
  color: #fff;
  background-color: brown;
  cursor: pointer;
}
</style>
