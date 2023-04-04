<template>
  <main>
    <!-- <MainView heading="Some cool text" btnType="warning"/>
    <MainView heading="Some super cool text"/>
    <MainView/> -->
    <!-- <UserSelect :users="userList"/>

    <router-link to="/">Main</router-link>
    <br>
    <router-link to="/list">List</router-link>

    <router-view></router-view> -->
    <TaskServerRequest/>
    <!-- <UserView /> -->
  </main>
</template>

<script>
import UserSelect from './components/UserSelect/UserSelect.vue';
import UserView from './components/UserView.vue';
import TaskServerRequest from './components/TaskServerRequest.vue';

export default {
  name: 'App',
  components: {
    //UserSelect,
    //UserView,
    TaskServerRequest,
  },
  methods: {

  },
  data () {
    var userList = [
      {
        id: 1,
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        name: 'Jam Jimmies',
      },
      {
        id: 8,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        name: 'Jack Jimmies',
      },
      {
        id: 11,
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Andy',
      },
      {
        id: 22,
        avatar: 'https://www.blexar.com/avatar.png',
        name: 'Johnie Jimmies',
      },
      {
        id: 15,
        avatar: 'https://www.blexar.com/avatar.png',
        name: 'Jil Jimmies',
      },
    ];

    var selectedUserIds;

    try {
      var selectedUserIds = JSON.parse(localStorage.selectedUserIds) 
    } catch {
      selectedUserIds = []
    }
    

      userList = userList.map(function(user) {
        user.isSelected = selectedUserIds.includes(user.id) //this adds to the data in app.vue by key "isSelected"
        
        return user;
      })

    return {
      userList
    }
  }
}
</script>

