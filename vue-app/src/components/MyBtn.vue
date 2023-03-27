<template>
  <button @click="onClick()" :class="'btn--' + type">
    {{ text }}
  </button>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    text: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: false,
      default: "primary",
    },
  },
  setUp() {
    var onClick = function () {

    };
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
