<template>
  <div>
    <!-- <MainView heading="Some cool text" btnType="warning" />
    <MainView heading="This also works" />
    <MainView /> -->
    <!-- the third one uses default value 
    we commented out the MainView so that it doesn't get in the way while working on UserSelect-->
    <UserSelect :users="userList" />
    <!-- here we take the data from this file and pass it as props to UserSelect -->
    <!-- we have a self closing tag, because we will not be putting any content in it -->
  </div>
</template>

<script>
// import MainView from "./components/MainView.vue";
import UserSelect from "./components/UserSelect/UserSelect.vue";

export default {
  name: "App",
  components: {
    //MainView,
    UserSelect
  },
  // methods: {
  // //   addCount: function() {
  // //     this.ClickCount = this.clickCount;
  // //   }
  // },
  data() {
    var userList = [ /*we pass this down to UserSelect as props. In real life this data will come from database*/
      {
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
        name: 'Jim Jimmies',
        isSelected: false,
      },
      {
        avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
        name: 'Jack Jimmies',
        isSelected: true,
      },
      {
        avatar: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
        name: 'Jil Jimmies',
        isSelected: false,
      },
      {
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Andy Jimmies',
        isSelected: false,
      },
      {
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        name: 'Johnie Jimmies',
        isSelected: false,
      },
    ]

  return {
    userList
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
