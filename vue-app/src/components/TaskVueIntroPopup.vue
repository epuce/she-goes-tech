<template>
  <div class="popup__wrapper">
    <div class="popup">
      {{ text }}
      <button class="btn__close" @click="($event) => onClosePopup()">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
    },
  },
  setup(props, {emit}) {
    var onClosePopup = function () {
      emit("close-popup-view");
    };
    return {
      onClosePopup,
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
  width: 100%;
  background: #ffffff;
}
.btn__close {
  float: right;
}
</style>
