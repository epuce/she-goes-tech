<template>
  <div>
    <!-- <MainView heading="Some cool text" btnType="warning" />
    <MainView heading="This also works" />
    <MainView /> -->
    <!-- the third one uses default value 
    we commented out the MainView so that it doesn't get in the way while working on UserSelect-->
    <!-- <UserSelect :users="userList" /> -->
    <!-- here we take the data from this file and pass it as props to UserSelect -->
    <!-- we have a self closing tag, because we will not be putting any content in it -->

    <!-- <router-link to="/">Main</router-link>
    <br/>
    <router-link to="/list">List</router-link>

      <router-view></router-view> -->

    <!-- <UserView/> -->
    <TaskServerRequest />
    <TaskServerRequestv2 />
  </div>
</template>

<script>
// import MainView from "./components/MainView.vue";
// import UserSelect from "./components/UserSelect/UserSelect.vue";
import TaskServerRequest from "./components/TaskServerRequest.vue";
import TaskServerRequestv2 from "./components/TaskServerRequestv2.vue";
// import UserView from "./components/UserView.vue";

export default {
  name: "App",
  components: {
    //MainView,
    // UserSelect,
    // UserView,
    TaskServerRequest,
    TaskServerRequestv2
},
  // methods: {
  // //   addCount: function() {
  // //     this.ClickCount = this.clickCount;
  // //   }
  // },
  data() {
    var userList = [
      /*we pass this down to UserSelect as props. In real life this data will come from database*/
      {
        avatar:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        name: "Jam Jimmies",
        id: 1,
      },
      {
        avatar:
          "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
        name: "Jack Jimmies",
        id: 7,
      },
      {
        avatar:
          "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
        name: "Jamson Jimmies",
        id: 10,
      },
      {
        avatar: "https://www.w3schools.com/howto/img_avatar2.png",
        name: "Andy",
        id: 2,
      },
      {
        avatar: "https://www.w3schools.com/w3images/avatar2.png",
        name: "Johnie Jimmies",
        id: 5,
      },
    ];

    var selectedUserIds;

    try {
      selectedUserIds = JSON.parse(localStorage.selectedUserIds);
    } catch {
      selectedUserIds = [];
    }
    /*we get the selected users list from the storage*/

    userList = userList.map(function (user) {
      user.isSelected = selectedUserIds.includes(user.id);
      /*if the selectedUsersIds includes user id, then the user.isSelected is true*/
      return user;
      /*now when we refresh the page, the selected users will be shown*/
    });

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
