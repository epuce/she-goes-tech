<template>
  <div>
  <!-- <MainView heading="Something1" btnType="warning"/> -->
  <!-- <MainView heading="Something2"/>-->
<MainView/>
<!--<UserSelect :users="userList"/>
<router-link to="/list">List</router-link>
<router-view></router-view>

<UserView/>-->

</div>
</template>

<script>
import MainView from './components/MainView.vue'
//import UserSelect from './components/UserSelect/UserSelect.vue';
//import UserView from './components/UserView.vue';

export default {
  name: 'App',
  components: {
    MainView
   // UserSelect,
   // UserView
},
  data() {
      var userList = [
        {
        id: 1,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: "Jim Jimmies",
        
      },
      {
        id: 7,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        name: "Jack Jimmies",
       
      },
      {
        id: 10,
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: "Jil Jimmies",
       
      },
      {
        id: 2,
        avatar: 'https://www.w3schools.com/w3images/avatar6.png',
        name: "Andy Jimmies",
        
      },
      {
        id: 5,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        name: "John Jimmies",
       
      },
    ];

      var selectedUserIds;
      try {
        selectedUserIds = JSON.parse(localStorage.selectedUserIds)
      } catch {
        selectedUserIds =[];
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
