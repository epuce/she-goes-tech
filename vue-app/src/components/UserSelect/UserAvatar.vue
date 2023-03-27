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
  },
});
</script>

<style>
.user-avatar {
  /* it is 100% parent width and height which is 32px */
  width: 100%;
  /* to get avatar round:  */
  border-radius: 50%;
  border: 2px solid white;
  box-sizing: border-box;
}
</style>
