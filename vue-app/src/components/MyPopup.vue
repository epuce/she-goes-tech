<template>
  <div class="popup__wrapper">
    <div class="popup">
      {{ text }}

      <button class="btn__close" @click="onClose()">Close</button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    // emit function helps communicate with the parent element. Emit call lets the parent element know when to execute sth.
    var onClose = function () {
      emit("close-popup");
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
  padding: 32px;
  width: 70%;
  background: #ffffff;
}

.btn__close {
  float: right;
}
</style>
