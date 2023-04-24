<template>
  <div class="popup-overlay">
    <div class="popup">
      <p class="popup__text">Thank you for subscribing, {{ username }}!</p>
      <button class="popup__close-btn" @click="closePopup()">Close</button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    username: {
      type: String,
    },
  },
  setup(props, { emit }) {
    function closePopup() {
      emit("close-popup");
    }
    return {
      closePopup,
    };
  },
});
</script>
<style>
.popup-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: rgba(202, 196, 196, 0.815);
}

.popup {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  background-color: rgb(231, 227, 227);
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: right;
  align-items: center;
  border-radius: 5px;
  box-shadow: -1px 3px 26px -7px rgba(0, 0, 0, 0.45);
}
.popup__text {
  width: 100%;
  text-align: center;
}

.popup__close-btn {
  margin-right: 10px;
}
</style>
