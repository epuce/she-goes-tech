<template>
  <div>
  <!-- <MainView heading='Some cool text' btnType="warning"/>
  <MainView heading="This also works"/>
  <MainView/> -->
  <UserSelect :users="userList"/>
</div>
</template>

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
  addcount: function() {
  this.ClickCount = this.ClickCount+1
}
},

data() {
    var userList = [
      {
        avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1679935369~exp=1679935969~hmac=9ac569f5d59c6b1431d9943c3ea01505f075f97bbb3da9fd67f7fe31242990dd', 
        name: 'Jim Jimy',
        isSelected: false,
      },
      {
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 
        name: 'Jack Jimy',
        isSelected: true,
      },
      {
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png', 
        name: 'June Jimy',
        isSelected: false,
      },
      {
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 
        name: 'Jessy Jimy',
        isSelected: false,
      },
      {
        avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1679935530~exp=1679936130~hmac=6bbd93228cce4a76cf1572502f41d6a8e62aaaf1dd8ac1fa3e1641ec5dbfbf45', 
        name: 'Juke Jimy',
        isSelected: false,
      }
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
