<template>
    <div>
      <button @click="clickButton1">{{ button1Text }}</button>
      <button :class="{backgroundRed: popupClosed}" @click="isOpen= true" > Open popup</button>
      <TaskVueIntroPopup text="You did it" v-if="isOpen" @close-popup="isOpen = false, popupClosed =true" />
    </div>
  </template>
  <style>
.backgroundRed{
    background-color: red;
}
</style>
  <script>
  import { defineComponent, ref } from 'vue';
  import TaskVueIntroPopup from './TaskVueIntroPopup.vue';
  export default defineComponent({
    components: {
    TaskVueIntroPopup,
},
    setup() {
      const button1Text = ref('Click me');
      const isOpen = ref(false);
      const popupClosed =ref(false);
  
      const clickButton1 = () => {
        button1Text.value = 'Button is clicked';
      };
  
     
      return {
        button1Text,
        clickButton1,
        isOpen,
        popupClosed,
      };
    },
  });
  </script>
  