<template>
  <!-- Always have to have an upper / parent element. only one wrapper element is valid -->
  <div>
    Yay it works
    <h1>{{ heading }}</h1>
    <!-- in jqery or vanilla, this would be get element by class, set text value to sth. Here we say look at this value and print it's value   -->
    <h2>You have clicked {{ clickCount }} times</h2>
    <myBtn text="Add Count" @click="addCount()" :type="btnType"></myBtn>
    <!-- : in btnType, means it is a reference not to a string, but to a variable -->
    <myBtn text="Content" @click="addCount()"></myBtn>

    <button @click="isOpen = true">Open popup</button>
    <input v-model="someText" />
    <!-- v-model means that the input will be correlating with the text variable. someText is a js variable -->

    {{ someText }}
    <MyPopup :text="someText" v-if="isOpen" @close-popup="isOpen = false" />
    <!-- this will not hold any content, we just render what is inside of it. V-if is equal to view-if, aka if open we show, if false we dont show. This helps to talk to child element when opening/closing popup -->

    <TaskVueIntro />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"; // connecting package manager (npm) with our system
import myBtn from "./MyBtn.vue";
import MyPopup from "./MyPopup.vue";
import TaskVueIntro from "./TaskVueIntro.vue";
// import TaskVueIntroPopup from "./TaskVueIntroPopup.vue"

export default defineComponent({
  components: {
    myBtn: myBtn,
    MyPopup, // this is equal to Popup: Popup, used when they are the same
    TaskVueIntro,
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
    //  var heading = "Vue data binding works"; //1 and 2. data binding. We read with js and ask to print this value inside html.
    var clickCount = ref(0); //  Here 0 is our default / beginning value
    var isOpen = ref(false); //this variable is responsible for showing / hiding the popup. Since this is set as false, innitially the pop up will be closed
    var someText = ref(""); // the default value is empty string

    var addCount = function () {
      clickCount.value = clickCount.value + 1;
    };

   
    return {
      // heading: heading, // 2. key heading has value heading
      clickCount: clickCount,
      addCount: addCount, // visual distinction between variabes in white and functions in green
      isOpen,
      someText,
    };

   
  },
});
</script>

<style></style>
