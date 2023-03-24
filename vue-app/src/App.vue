<template>
  <div>
    <MainView heading="some cool text" btnType="warning" />
    <MainView heading="this also works" />
    <MainView />
  </div>
</template>

<!-- App.vue(btnType) -> MainView.vue(type) -> MyBtn.vue -->
<script>
import MainView from "./components/MainView.vue";

export default {
  name: "App",
  components: {
    MainView,
  },
  methods: {
    addCount: function () {
      this.clickCount + 1;
    },
  },
  data() {
    "text";
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
