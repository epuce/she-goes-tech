<!-- <template>
  <div>
    <LandingPage />
  </div>
</template >


<script>

import LandingPage from './components/LandingPage/LandingPage.vue';

export default {
  name: 'App',
  components: {

    LandingPage,

  },
  methods: {

  },

  data() { }
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
</style> -->

<template>
  <div>
    <!-- <MainView heading="Some cool text" btnType="'warning'"/>
                                <MainView heading ='This also works'/>
                                <MainView/> -->
    <!-- <UserSelect :users='userList' /> -->
    <UserView />
  </div>
</template >


<script>
// import MainView from './components/MainView.vue';
// import UserSelect from './components/UserSelect/UserSelect.vue';
// import UserView from './components/UserView.vue';
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
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Jim Jimmy',
        isSelected: false,
      },
      {
        id: 8,
        avatar: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
        name: 'Joe Jackson',
        isSelected: true,
      },
      {
        id: 4,
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Jacky Joseph',
        isSelected: false,
      },
      {
        id: 11,
        avatar: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
        name: 'Tim Jimmy',
        isSelected: false,
      },
      {
        id: 13,
        avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
        name: 'Jenny Jimson',
        isSelected: false,
      },
    ]
    return {
      userList,
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
