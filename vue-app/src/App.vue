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
    <!-- <UserSelect :users="userList" /> -->
    <!-- we have to specify the property where we are going to go -->
    <!-- <router-link to="/">Main</router-link>
    <br />
    <router-link to="/list">List</router-link>
    <br />
    <router-link to="/list">Something</router-link> -->

    <!-- this part will be updated when we navigate between one and another. These are <a> tags within view -->
    <!-- <router-view></router-view>
    <UserView />
    <TaskServerRequest /> -->
    <!-- <UserCommentsView /> -->
    <!-- <OpenForm /> -->
    <LandingPage />
  </div>
</template>

<script>
// import UserSelect from "./components/UserSelect/UserSelect.vue";
// import MainView from "./components/MainView.vue";
// import UserView from "./components/UserView.vue";
// import TaskServerRequest from "./components/TaskServerRequest.vue";
// import OpenForm from "./components/LandingPage/OpenForm.vue";
import LandingPage from "./components/LandingPage/LandingPage.vue";
// import UserCommentsView from "./components/UserCommentsView.vue";
export default {
  name: "App",
  components: {
    // UserCommentsView,
    // UserSelect,
    // UserView,
    // TaskServerRequest,
    // OpenForm,
    LandingPage,
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
        id: 1, //this must be unique
        avatar:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        name: "Jim Jimmies",
        // isSelected: false,
      },
      {
        id: 7,
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Jack Jimmies",
        // isSelected: true,
      },
      {
        id: 10,
        avatar: "https://www.w3schools.com/howto/img_avatar2.png",
        name: "Jamson Jimmies",
        // isSelected: false,
      },
      {
        id: 2,
        avatar:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        name: "Andy",
        // isSelected: false,
      },
      {
        id: 5,
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Johnie Jimmies",
        // isSelected: false,
      },
    ];
    var selectedUserIds = [];

    try {
      //to get it back to array we use JSON parse. We get data fro localStorage
      selectedUserIds = JSON.parse(localStorage.selectedUserIds);
    } catch {
      selectedUserIds = [];
    }

    userList = userList.map(function (user) {
      user.isSelected = selectedUserIds.includes(user.id); //we get result TRUE or FALSE

      return user;
    });

    return {
      userList,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
