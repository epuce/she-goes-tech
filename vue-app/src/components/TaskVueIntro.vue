<template>
  <div class="btn__wrapper">
    <button>Click me</button>
    <button @click="isOpen = true" :class="{'color-red': changeClass}">PopUp</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TaskVueIntroPopup from "./TaskVueIntroPopup.vue";

export default defineComponent({
  components: {
    TaskVueIntroPopup,
  },

  props: {
    text: {
        type: String,
        required: true,
    }
  },

  setup() {
    var textBtn = ref("Click me!");
    var changeClass = ref(false);
    var isOpen = ref(false);
    
    var onClose = function() {
      isOpen.value = false;
      changeClass.value = true;
    }
    return {
      textBtn,
      isOpen,
      onClose,

    };
  },
});
</script>
<style>
.color-red {
    background-color: red
}
</style>
