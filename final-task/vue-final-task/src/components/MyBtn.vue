<template>
  <div class="button__wraper">
    <button :class="'button--' + name" type="button">{{ text }}</button>
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
    name: {
      type: String,
      required: false,
      default: "open",
    },
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.button__wraper {
  height: 100vh;
  display: flex;
  position: relative;
}
.button--open {
  position: absolute;
  top: 160px;
  height: 50px;
  width: 80px;
  background-color: brown;
  transform: rotate(90deg) translateY(30%);
  cursor: pointer;
  border: none;
  transition: all 0.15s;
}
.button--subscribe {
  background-color: green;
  border-radius: 4px;
  height: 40px;
  width: 90px;
  cursor: pointer;
}
</style>
