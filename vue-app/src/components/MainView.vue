<template>
  <div>
    Yay it works

    <h1>{{ heading }}</h1>
    <h2>You have clicked {{ clickCount }} times</h2>
    <!-- <button @click="addCount">Add count</button> -->
    <MyBtn text="Add count" :type="btnType" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MyBtn from "./MyBtn.vue";

export default defineComponent({
  components: {
    MyBtn: MyBtn,
  },
  props: {
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
    // var heading = "Vue data binding works"
    var clickCount = ref(0);
    var addCount = function () {
      clickCount.value = clickCount.value + 1;
    };
    return {
      clickCount: clickCount,
      addCount: addCount,
    };
  },
});
</script>

<style></style>
