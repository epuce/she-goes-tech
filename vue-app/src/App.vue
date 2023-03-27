<template>
  <div>
    <!-- <MainView heading="some cool text" btnType="warning" />
    <MainView heading="this also works" />
    <MainView /> -->
    <UserSelect :users="userList"/>
  </div>
</template>

<script>
// import MainView from "./components/MainView.vue"; // switch from hello world, to the one we are using now
import UserSelect from "./components/UserSelect/UserSelect.vue";

export default {
  name: "App",
  components: {
    // MainView,
    UserSelect,
  },
  methods: {},
  data() {
    var userList = [
      {
        avatar:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        name: "Jim Jimmies",
        isSelected: false,
      },
      {
        avatar:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        name: "Jack Jimmies",
        isSelected: true,
      },
      {
        avatar:
          "https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg",
        name: "Jill Jimmies",
        isSelected: false,
      },
      {
        avatar:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        name: "Andy Jimmies",
        isSelected: false,
      },
      {
        avatar:
          "https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg",
        name: "John Jimmies",
        isSelected: false,
      },
    ];

    return {
      userList,
    }
  }
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
