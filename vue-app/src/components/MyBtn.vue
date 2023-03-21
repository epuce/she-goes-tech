<template>
  <button
    @click="onClick()"
    :class="{
      'btn--primary': type === 'primary',
      'btn--warning': type === 'warning',
    }"
  >
    {{ text }}
  </button>
  <!-- :class="{}" we are adding the class from <style> if type === 'primary' is true-->
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
  setup() {
    var onClick = function () {};
    return {
      onClick: onClick,
    };
  },
});
</script>

<style>
.btn--primary {
  background: blue;
}
/* we will add class straigt to the element */

.btn--warning {
  background: orange;
}
</style>
