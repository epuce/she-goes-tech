<template>
  <!-- Always have to have an upper / parent element. only one wrapper element is valid -->
  <div>
    Yay it works
    <h1>{{ heading }}</h1>
    <h2>You have clicked {{ clickCount }} times</h2>
    <myBtn text="Add Count" @click="addCount()" :type="btnType"></myBtn>
    <myBtn text="Content" @click="addCount()"></myBtn>

    <button @click="isOpen = true">Open popup</button>
    <input v-model="someText" />

    {{ someText }}
    <MyPopup :text="someText" v-if="isOpen" @close-popup="isOpen = false" />

    <TaskVueIntro />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"; // connecting package manager (npm) with our system
// import myBtn from "./MyBtn.vue";
// import MyPopup from "./MyPopup.vue";
// import TaskVueIntro from "./TaskVueIntro.vue";
// import TaskVueIntroPopup from "./TaskVueIntroPopup.vue"

export default defineComponent({
  components: {
    myBtn: myBtn,
    MyPopup, // this is equal to Popup: Popup, used when they are the same
    // TaskVueIntro,
    // TaskVueIntroPopup,
  },
  props: {
    // we can add properties, when we are initializing the components. e.g. unique heading for each of them
    heading: {
      type: String,
      required: false,
      default: "Vue data binding works",
    },
    btnType: {
      type: String,
      required: false,
      default: undefined,
    },
  },

  setup() {
    var clickCount = ref(0); 
    var isOpen = ref(false); 
    var someText = ref(""); 

    var addCount = function () {
      clickCount.value = clickCount.value + 1;
    };

   
    return {
      clickCount: clickCount,
      addCount: addCount, // visual distinction between variabes in white and functions in green
      isOpen,
      someText,
    };

   
  },
});
</script>

<style></style>
