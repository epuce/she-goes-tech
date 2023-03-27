<template>
  <div>
    <button @click="changedText()">{{ btnText }}</button>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    clickText: {
      type: String,
      required: true,
      default: "Click me",
    },
    clickedText: {
      type: String,
      required: true,
      default: "Clicked",
    },
  },
  setup(props) {
    var btnText = ref(props.clickText);
    var changedText = function () {
      btnText.value = props.clickedText;
    };
    return {
      btnText,
      changedText,
    };
  },
});
</script>
<style></style>
