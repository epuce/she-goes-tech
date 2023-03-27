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
</template>

<script>
import { defineComponent } from "vue";

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

.btn--warning {
  background: orange;
}
</style>
