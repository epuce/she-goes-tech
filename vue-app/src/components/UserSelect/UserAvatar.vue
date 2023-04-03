<!-- we use : because we are using src from js (dynamically) -->
<template>
  <img :src="avatar" class="user-avatar" alt="user avatar" />
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    avatar: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: "100%",
    },
  },
});
</script>

<style>
.user-avatar {
  /* it is 100% parent width and height which is 32px */
  /* we bind to the size which we noted under props */
  width: v-bind(size);
  height: v-bind(size);
  /* to get avatar round:  */
  border-radius: 50%;
  border: 2px solid white;
  box-sizing: border-box;
}
</style>
