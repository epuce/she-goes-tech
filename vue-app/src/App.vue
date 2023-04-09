<template>
  <div>
    <UserSelect :users="userList" />
    <router-link to="/">Main</router-link>
    <br>
    <router-link to="/list">List</router-link>

    <router-view></router-view>
    <UserView />
    <TaskServerRequest />
  </div>
</template>

<script>
import UserSelect from './components/UserSelect/UserSelect.vue';
import UserView from './components/UserView.vue';
import TaskServerRequest from './components/TaskServerRequest.vue';

export default {
  name: 'App',
  components: {
    UserSelect,
    UserView,
    TaskServerRequest,
},
  data () {
    var userList = [
      {
        id: 1,
        avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
        name: 'Jim Jimmies',
      },
      {
        id: 7,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Jack Jimmies',
      },
      {
        id: 10,
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Jil Jimmies',
      },
      {
        id: 2,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Andy Jimmies',
      },
      {
        id: 4,
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Johnies Jimmies',
      }
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>