<template>
  <div class="popup__wrapper">
    <div class="popup">
      Hello, nice to meet you: {{ text }}
      <button class="btn__close" @click="($event) => onClose()">Close</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

//we export it for other sections to see it
export default defineComponent({
  // name:""we can give a name and then import with this name
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  //inside js we can read props that we set above. Also we read event emit key
  setup(props, {emit}) {
    // var user = {
    //   name: "test",
    // };
    // var {name} = user;
    var onClose = function () {
      emit("close-popup"); //we emit "close-popup" value
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
  width: 100%;
  background: #ffffff;
}
.btn__close {
  float: right;
}
</style>
