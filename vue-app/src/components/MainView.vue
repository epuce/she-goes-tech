<template>
  <div>
    Yay it wokrs
    <!-- we want to add text to html from js. Take text from js and print it in the screen-->
    <h1>{{ heading }}</h1>
    <h2>You have clicked {{ clickCount }} times</h2>
    <!-- <button @click="($event) => addCount()">Add count</button> -->
    <!-- by writing @click we add an event listener -->
    <MyBtn text="Add count" :type="btnType"></MyBtn>
    <!-- :type means it is a reference to a variable -->
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
//from package json find "vue"
import MyBtn from "./MyBtn.vue";

export default defineComponent({
  components: {
    MyBtn: MyBtn,
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
    var clickCount = ref(0); //we define default value as 0. ref() allows to replicate the changes which are happening in js in html
    var addCount = function () {
      clickCount.value = clickCount.value + 1; //always add one to the clickCount
    };
    return {
      // heading //we return the variable that we created within an object
      // heading: heading, //this is the same as above: key=heading, value-heading
      clickCount: clickCount, //we need to return it so we could use it within html
      addCount: addCount,
    };
  },
});
</script>

<style></style>
