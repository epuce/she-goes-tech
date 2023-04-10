<template>
  <img :src="picture" class="user-picture" alt="user picture" />
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
    // transform: {
    //   type: String,
    //   required: false,
    //   default: "scale(1)",
    // },
  },
});
</script>

<style>
.picture-container {
  width: 100%;
  height: 80%;
}
.user-picture {
  /* we bind to the size which we noted under props */
  display: block;
  width: v-bind(width);
  height: v-bind(height);
  transition: all 0.4s;
}
</style>
