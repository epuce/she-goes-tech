<template>
  <div class="submit-popup_wrapper">
    <div class="submit-popup">
      <h4>New client record was logged successfully!</h4>

      <!-- <button class="btn_close_submit" @click="onClose()">Great!</button> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
.submit-popup_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}
.submit-popup {
  padding: 32px;
  width: 40%;
  background: white;
  position: fixed;
}
.btn_close_submit {
  position: absolute;
  left: 200px;
  top: 80px;
  background-color: #84a98c;
  border: none;
  border-radius: 4px;
  padding: 5px;
}
</style>
