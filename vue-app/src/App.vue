<template>
  <div>
    <MainView heading="Some cool text" btnType="warning"/>
    <MainView heading="This also works"/>
    <MainView/>
    <UserSelect :users="userList"/>

    <router-link to="/">Main</router-link>
    <br />
    <router-link to="/list">List</router-link>

    <router-view></router-view>

    <UserView />
  </div>
</template>

<script>
import MainView from './components/MainView.vue'

import UserSelect from './components/UserSelect/UserSelect.vue';
import UserView from './components/UserView.vue';

export default {
  name: 'App',
  components: {
    MainView,
    UserSelect,
    UserView
  },
  methods: {
   
  },
  /*data() {
    var userList = [
      {
        id: 1,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000',
        name: 'Jim Jimmies',
      },
      {
        id: 7,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU',
        name: 'Jack Daniels',
      },
      {
        id: 10,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWBnyvJtrWYVL5q2Nwl1UkCOxOPxFGoORjg&usqp=CAU',
        name: 'Jil Jimmies',
      },
      {
        id: 23,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8P6POnmXE2YJlFMqlJ-b2F_t8bdqTq4CAb-mQWDeI813MCCXefNOg9RjN2AQZwPzy3Y&usqp=CAU',
        name: 'Andy Jimmies',
      },
      {
        id: 2,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tQh_tPf03EMGr93KsBinmgw3nm1sqnwr51fFN4nt7bgwQwfWgQ1sMh8qzEbboM7rYWg&usqp=CAU',
        name: 'Johnie Jimmies',
      },
    ];

    var selectedUserIds = JSON.parse(localStorage.selectedUserIds)

    userList = userList.map(function(user) {
      user.isSelected = selectedUserIds.includes(user.id)

      return user;
    })

    return {
      userList
    }
  }*/
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
