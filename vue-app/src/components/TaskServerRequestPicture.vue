<template>
  <div>
    <img :src="picture" class="user-picture" alt="user picture" />
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    picture: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
      default: "100%",
    },
    height: {
      type: String,
      required: false,
      default: "100%",
    },
    transform: {
      type: String,
      required: false,
      default: "scale(1)",
    },
  },
});
</script>

<style>
.user-picture {
  /* we bind to the size which we noted under props */
  width: v-bind(width);
  height: v-bind(height);
  box-sizing: border-box;
}
</style>
