<template>
  <div class="popup_wrapper">
   <div class="popup">
     You did it!
      <button class="btn_close" @click="onCloseTaskPopup()">Close</button>
  </div>
</div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        popupText: {
            type: String,
            required: true,
        },
    },
     setup(props, { emit }) {
    var onCloseTaskPopup = function () {
      emit('close-task-popup');
    };
    return {
      onCloseTaskPopup,
    }
  }
});
</script>
<style>
.popup {
  padding: 32px;
  width: 70%;
  background: #ffffff;
}

.btn_close {
  float: right;
}
</style>
