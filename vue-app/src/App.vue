<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <!-- we use MainView component name as html tag name -->
    <!-- we get btnType from MainView -->
    <!-- <MainView heading="Some cool text" btnType="warning" /> -->

    <!-- <MainView heading="This also works" /> -->
    <!-- <MainView /> -->
    <!-- above we will have the default value which we stated in the ManinView.vue -->
    <!-- we declare it  -->
    <UserSelect :users="userList" />
  </div>
</template>

<script>
// import MainView from "./components/MainView.vue"; //we import the component
import UserSelect from "./components/UserSelect/UserSelect.vue";

export default {
  name: "App",
  components: {
    UserSelect,
    // MainView,
  }, //it means that "hey, we will use it by adding it under components"

  methods: {
    addCount: function () {
      this.ClickCount = this.ClickCount + 1;
    },
  },
  data() {
    //we will have array of objects
    var userList = [
      {
        avatar:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        name: "Jim Jimmies",
        isSelected: false,
      },
      {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Jack Jimmies",
        isSelected: true,
      },
      {
        avatar: "https://www.w3schools.com/howto/img_avatar2.png",
        name: "Jill Jimmies",
        isSelected: false,
      },
      {
        avatar:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        name: "Andy Jimmies",
        isSelected: false,
      },
      {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Johnie Jimmies",
        isSelected: false,
      },
    ];

    return {
      userList,
    };
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
