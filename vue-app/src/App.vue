<template>
  <div>
    <!-- <MainView heading="Some cool text" btnType="warning" /> -->
    <!-- <MainView heading="This also works"/> -->
    <!-- <MainView/> -->
    <UserSelect :users="userList"/>
  </div>
</template>

<!-- App.vue(btnType) -> MainView.vue(type) -> MyBtn.vue -->

<script>
// import MainView from './components/MainView.vue'
import UserSelect from './components/UserSelect/UserSelect.vue'

export default {
  name: 'App',
  components: {
    // MainView
    UserSelect
  },
  methods: {
  },
  data() {
    var userList = [
      {
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Jam Jimmies',
        isSelected: false,
      },
      {
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Jack Jimmies',
        isSelected: true,
      },      
      {
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Jamson Jimmies',
        isSelected: false,
      },
      {
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Andy',
        isSelected: false,
      },      
      {
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Johnie Jimmies',
        isSelected: false,
      },
    ];

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
