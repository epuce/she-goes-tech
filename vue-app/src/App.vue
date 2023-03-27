<template>
  <div>
    <MainView heading="some cool text" btnType="warning" />
    <!-- items are reusable, but not related to each other. Props are treated as attributes -->
    <MainView heading="this also works" />
    <MainView />
  </div>
</template>

<script>
import MainView from "./components/MainView.vue"; // switch from hello world, to the one we are using now

export default {
  name: "App",
  components: {
    MainView,
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
