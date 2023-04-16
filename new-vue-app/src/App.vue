<template>
  <div>
    <!--<MainView heading="Some cool text" btnType="warning" />
    <MainView heading="This also works"/>
    <MainView/>
    <UserSelect :users="userList"/>

    <router-link to="/" >Main</router-link>
    <br />
    <router-link to="/list" >List</router-link>
    <br />
    <router-link to="/something" >Something</router-link>
    <router-view></router-view>
    <UserView />-->
    <UserCommentsView></UserCommentsView>
  </div>
</template>

<!-- App.vue(btnType) -> MainView.vue(type) -> MyBtn.vue -->

<script>
//import MainView from './components/MainView.vue'
//import UserSelect from './components/UserSelect/UserSelect.vue'
//import UserView from './components/UserView.vue';

import UserCommentsView from './components/UserCommentsView.vue';


export default {
  name: 'App',
  components: {
    UserCommentsView,
    //MainView,
    //UserSelect,
    //UserView,
},
  methods: {
  },
  data() {
    var userList = [
      {
        id: 1,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Jam Jimmies',
      },
      {
        id: 7,
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Jack Jimmies',
      },      
      {
        id: 10,
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Jamson Jimmies',
      },
      {
        id: 2,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Andy',
      },      
      {
        id: 5,
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Johnie Jimmies',
      },
    ];
    var selectedUserIds;
    try {
      selectedUserIds = JSON.parse(localStorage.selectedUserIds)
    } catch {
      selectedUserIds = []
    }
    userList = userList.map(function(user) {
      user.isSelected = selectedUserIds.includes(user.id)
      return user;
    })
    return {
      userList
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>