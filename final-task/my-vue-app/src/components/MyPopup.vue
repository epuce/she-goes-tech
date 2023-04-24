<template>
  <div class="popup-wrapper">
    <div class="popup-card">
      <p> Thank you  </p>
     <h4 class="gap">{{ text }}</h4>!
      <button class="btn_close" @click="onClosePopup()">Close</button>
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
    }
  },
  setup(props, {emit}) {
    var onClosePopup = function () {
      emit('close-popup')
    }
    return {
      onClosePopup
    }
  }
});
</script>
<style>
.popup-card {
  height: 150px;
  width: 400px;
  background: #fef7f7;
  border-radius: 20px;
  position: fixed;
  top:40%;
  right: 40%;
  bottom: 0;
  left: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.btn_close {
  float: end;
  margin-left: 30px;
}

.popup-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
}

.popup-card h4 {
  margin-left: 10px;
}
</style>
