<template>
  <div>
    <button class="btn" @click="($event) => onClick()">{{ text }}</button>
    <!-- How to add class .btn next to the below expression? -->
    <button
      class="btn"
      :class="{
        'btn--clicked': type === 'clicked',
        'btn--unclicked': type === 'primary',
      }"
      @click="($event) => onPopup()"
    >
      Open popup
    </button>
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
    var onClick = function () {
      emit("button-clicked");
    };

    var onPopup = function () {
      emit("open-Popup");
    };

    return {
      onClick,
      onPopup,
    };
  },
});
</script>

<style>
.btn {
  margin-top: 12px;
  width: 100px;
  height: 50px;
}
.btn--clicked {
  background: red;
}
</style>
