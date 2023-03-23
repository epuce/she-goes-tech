<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <!-- we use MainView component name as html tag name -->
    <!-- we get btnType from MainView -->
    <MainView heading="Some cool text" btnType="warning" />

    <MainView heading="This also works" />
    <MainView />
    <!-- above we will have the default value which we stated in the ManinView.vue -->
    <!-- we declare it  -->
  </div>
</template>

<script>
import MainView from "./components/MainView.vue"; //we import the component

export default {
  name: "App",
  components: {
    MainView,
  }, //it means that "hey, we will use it by adding it under components"
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
