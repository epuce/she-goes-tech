<template>
  <div>
    <button>Click</button>
    <button text='content' @click="isVisible = true">Open Popup</button>
    <TaskPopup v-if="isVisible" @close-popup='isVisible = false' :on-close="onClose" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TaskPopup from "./TaskPopup.vue";



export default defineComponent({
  components: {
    TaskPopup,
  },
  props: {},
  setup() {
    var isVisible = ref(false);
    var onClose = function () {
      isVisible.value = false;
    };


    return {
      isVisible,
      onClose,

    };
  },
})


</script>


<style ></style>
