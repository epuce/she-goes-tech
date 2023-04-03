<template>
  <div>
    <!-- <MainView heading="Some cool text" btnType="warning" /> -->
    <!-- <MainView heading="This also works" /> -->
    <!-- <MainView /> -->

<!-- <UserSelect :users="userList"/> -->

<!-- <router-link to="/" >Main</router-link> -->
    <!-- <br /> -->
    <!-- <router-link to="/list" >List</router-link> -->
    <!-- <br /> -->
    <!-- <router-link to="/something" >Something</router-link> -->

    <!-- <router-view></router-view> -->

<UserView/>
  </div>
</template>

<!-- App.vue(btnType) -> MainView.vue(type) -> MyBtn.vue -->

<script>
// import MainView from "./components/MainView.vue";
// import UserSelect from './components/UserSelect/UserSelect.vue';
import UserView from './components/UserView.vue';

export default {
  name: 'App',
  components: {
    // MainView,
    // UserSelect,
    UserView
},
  methods: {
  },
  data() {
    var userList = [
      {
        id: 1,
        avatar: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        name: 'Jim Jimies',
      },
      {
        id: 2,
        avatar: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
        name: 'Jack Jimies',
      },
      {
        id: 3,
        avatar: 'https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png',
        name: 'Jil Jimies',
      },
      {
        id: 4,
        avatar: 'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png',
        name: 'Andy Jimies',
      },
      {
        id: 5,
        avatar: 'https://img.freepik.com/free-icon/man_318-157501.jpg',
        name: 'Johnie Jimies',
      },
    ]

    var selectedUsersIds;

    try{
   selectedUsersIds = JSON.parse(localStorage.selectedUsersIds)
    }catch {
      selectedUsersIds = []
    }


userList = userList.map(function(user){
user.isSelected = selectedUsersIds.includes(user.id)

return user;
})
    return{
      userList

    }
  }
}
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
