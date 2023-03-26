<template>
  <div>
    <button @click="onClickButton()">{{ buttonTaskText }}</button>

    <button @click="isOpenTaskPopup = true" :class="{'bacground-warning': changeClass}">Open task popup</button>

    <TaskVueIntroPopup
      v-if="isOpenTaskPopup"
      @close-task-popup="isOpenTaskPopup = false"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TaskVueIntroPopup from "./TaskVueIntroPopup.vue";

export default defineComponent({
  components: {
    TaskVueIntroPopup,
  },
  props: {},

  setup() {
    var isOpenTaskPopup = ref(false);
    var buttonTaskText = ref("Click me");
    var changeBackground = ref(false)

    var onClickButton = function () {
      this.buttonTaskText = "Clicked";
    };
    return {
      buttonTaskText,
      isOpenTaskPopup,
      TaskVueIntroPopup,
      onClickButton,
      changeBackground
    };
  },
});
</script>
<style>
.background-warning {
    background: #ee2727;
}
</style>
