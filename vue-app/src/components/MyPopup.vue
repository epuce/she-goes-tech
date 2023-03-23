<!-- when naming files in vue, we have to use multiword names -->

<template>
  <div class="popup_wrapper">
    <div class="popup">
      Hello, nice to meet you, {{ text }}
      <button class="btn_close" @click="onClose()">Close</button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  /*if we specify a name here like name: 'someComponentName', we can import it in the MainView.vue by this name, otherwise we have to use the file name*/
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    /*if we put props parameter, we can read the props in JS part, the second part it the parameters of props*/
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
  width: 100%;
  background: #ffffff;
}

.btn_close {
  float: right;
}
</style>
