<template>
  <div>
    <!-- <MainView heading="Some cool text" btnType="warning"/> -->
    <!-- <MainView heading="This also works"/> -->
    <!-- <MainView /> -->
    <!-- <UserSelect :users="userList" /> -->
    <!-- <router-link to="/">Main</router-link>
    <br />
    <router-link to="/list">List</router-link>

    <router-view></router-view> -->
    <!-- <UserView /> -->
    <UserCommentsView />
  </div>
</template>

<script>
// import MainView from './components/MainView.vue'
// import UserSelect from './components/UserSelect/UserSelect.vue';
// import UserSelect from './components/UserSelectVaida/UserSelect.vue';
// import UserView from './components/UserView.vue';

import UserCommentsView from './components/UserSelectVaida/UserCommentsView.vue';

export default {
  name: 'App',
  components: {
    UserCommentsView
},
  methods: {

  },
  data() {
    var userList = [
      {
        id: 5,
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Jim Jimmies',
      },
      {
        id: 2,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Jack Jimmies',
      },
      {
        id: 12,
        avatar: 'https://www.w3schools.com/w3images/avatar6.png',
        name: 'Jil Jimmies',
      },
      {
        id: 7,
        avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
        name: 'Andy Jimmies',
      },
      {
        id: 3,
        avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        name: 'Jammy Jimmies',
      }
    ];

    var selectedUserIds = []
    try{
    selectedUserIds = JSON.parse(localStorage.selectedUserIds);
    } catch{
    selectedUserIds = []
    }

    userList = userList.map(function (user) {
      user.isSelected = selectedUserIds.includes(user.id);
      return user;
    })

    return {
      userList,
    }
  }
}


</script>

<style>
  body{
    margin: 0;
  }
</style>
