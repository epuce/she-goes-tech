<template>
  <div>
    Yey it works
    <h1>{{ heading }}</h1>
    <h2>You have clicked {{ clickCount }} times</h2>

    <!-- <button @click="addCount()">Add count</button> -->
    <MyBtn text="Add count" @click="addCount()" :type="btnType"></MyBtn>
    <MyBtn text="Content" :type="btnType"></MyBtn>
    <TaskVeuIntro/>
    <button @click="isOpen = true">Open popup</button>
    <button @click="otherPopupisOpen = true" class="btn-red">Other popup</button>
    <input v-model="someText" />
    <MyPopup :text="someText" v-if="isOpen" @close-popup="isOpen = false" />
    <TaskVueIntroPopup v-if="otherPopupisOpen" @close-popup="otherPopupisOpen = false"/>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MyBtn from "./MyBtn.vue";
import MyPopup from "./MyPopup.vue";
import TaskVeuIntro from "./TaskVeuIntro.vue";
import TaskVueIntroPopup from "./TaskVueIntroPopup";

export default defineComponent({
  components: {
    MyBtn: MyBtn,
    MyPopup,
    TaskVeuIntro,
    TaskVueIntroPopup
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
    // var heading = "Vue data binding works";
    var clickCount = ref(0);
    var isOpen = ref(false);
    var otherPopupisOpen = ref(false)
    var someText = ref("");
    var addCount = function () {
      clickCount.value = clickCount.value + 1;
    };

    return {
      //   heading: heading,
      clickCount: clickCount,
      addCount: addCount,
      isOpen,
      someText,
      otherPopupisOpen
    };
  },
});
</script>

<style>
.btn-red {
  background-color: red;
}
</style>
