<template>
          <div class="pageHeader">
            <router-link to="/">
              <img class="buttonHome" src="./assets/HomeIcon.png">
            </router-link>
            <router-link to="/members">
              <button class="buttonMembers">Members</button>
          </router-link>
        </div>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
   
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
  margin: 0;
  background-image: url(./assets/hero-img.png);
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  margin: -8px;
  padding: 0px;
}

.pageHeader {
    height: 80px;
}


.buttonMembers {
    padding: 10px 25px 10px 25px;
    border-radius: 25px;
    border: 2px solid #FCA26E;
    font-size: large;
    color: #FCA26E;
    background-color: rgba(24, 37, 37, 0.5);
    box-shadow: 0 0 5px #FCA26E;
    bottom: 0;
    float: right;
    margin-top: 10px;
    margin-right: 20px;
}

.buttonMembers:hover {
    color: white;
    background: #FCA26E;
}

.buttonHome {
    height: 35px;
    float: left;
    margin-top: 15px;
    margin-left: 30px;
}
</style>
