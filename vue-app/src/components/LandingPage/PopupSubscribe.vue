<template>
  <div class="popup__wrapper">
    <div class="popup">
      Thank you for subscribing, {{ text }}!
      <button class="btn__close" @click="($event) => onClose()">CLOSE</button>
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
  },

  setup(props, {emit}) {
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
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  transition: all 0.5s ease-in;
  /* transform: translateX(0); */
}
.popup {
  width: 40rem !important;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  font-size: 1.4rem;
  font-weight: 700;
  background: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.btn__close {
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 1rem;
  transition: all 0.3s;
  border-radius: 9px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-self: end;
}
.btn__close:hover {
  background-color: #fdf2e9;
}
</style>
