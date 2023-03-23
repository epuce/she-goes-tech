<template>
  <!-- only one upper level parent element -->
  <div>
    <!-- we want to add text to html from js. Take text from js and print it in the screen-->
    <h1>{{ heading }}</h1>
    <h2>You have clicked {{ clickCount }} times</h2>

    <!-- by writing @click we add an event listener -->
    <!-- <button @click="($event) => addCount()">Add count</button> -->

    <MyBtn
      text="Add count"
      @click="addCount()"
      :type="btnType"
      something-else=""
    ></MyBtn>
    <!-- :type means it is a reference to a variable, not the simple text -->
    <button @click="($event) => (isOpen = true)">Open popup</button>
    <!-- attribute is variable in js section -->
    <input v-model="someText" />
    <!-- when we update the input, the below text will be updated, too -->
    {{ someText }}
    <!-- :text we pass value not as simple text but variable -->
    <MyPopup :text="someText" v-if="isOpen" @close-popup="isOpen = false" />
    <!-- v stands for view. If isOpen is true, then view popup window. By adding @close-popup we listen for event which is emitted in MyComponent -->
    <TaskVueIntro
      :text="buttonText"
      @button-clicked="($event) => (buttonText = 'clicked')"
      @open-Popup="($event) => (isOpenPopup = true)"
    />
    <TaskVueIntroPopup
      v-if="isOpenPopup"
      text="You did it"
      @close-popup-view="isOpenPopup = false"
    />
  </div>
</template>

<script>
//Need to import the below for newly created component. From package json find "vue"
import {defineComponent, ref} from "vue";

import MyBtn from "./MyBtn.vue";
import MyPopup from "./MyPopup.vue";
import TaskVueIntro from "./TaskVueIntro.vue";
import TaskVueIntroPopup from "./TaskVueIntroPopup.vue";

//To use the component we need to export it
export default defineComponent({
  components: {
    MyBtn: MyBtn,
    MyPopup: MyPopup,
    TaskVueIntro,
    TaskVueIntroPopup,
  },

  props: {
    heading: {
      type: String,
      required: false, //if we set "false", we need to add the below "default" property
      default: "Vue data binding works",
    },
    btnType: {
      type: String,
      required: false,
      default: undefined,
    },
  }, //we can specify some properties when initialize a component. This is needed for having a unique heading, for example

  setup() {
    //DATA BINDING-when you change something within js, it will automatically update html
    // var heading = "Vue data binding works";
    var someText = ref(""); //default value is empty string, we tracking what we are writing in the input

    var clickCount = ref(0); //we define default value as 0. ref() allows to replicate the changes which are happening in js in html
    var buttonText = ref("Click me");
    //Check if popup is open
    var isOpen = ref(false); //we state the initial value as false.
    var isOpenPopup = ref(false);

    var addCount = function () {
      clickCount.value = clickCount.value + 1; //always add one to the clickCount
    };
    return {
      // heading //we return the variable that we created within an object
      // heading: heading, //this is the same as above: key=heading, value-heading
      clickCount: clickCount, //we need to return it so we could use it within html
      addCount: addCount,
      isOpen, //we can write only one if key and value are the same (ECMAScript6 syntax)
      someText,
      buttonText,
      isOpenPopup,
    };
  },
});
</script>

<style></style>
