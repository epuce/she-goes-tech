<template>
  <div class="pageHeader">
    <router-link to="/">
      <img class="buttonHome" src="./assets/HomeIcon.png" />
    </router-link>
    <router-link to="/members">
      <button class="buttonMembers">Members</button>
    </router-link>
  </div>

  <router-view></router-view>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  border: 2px solid #fca26e;
  font-size: large;
  color: #fca26e;
  background-color: rgba(24, 37, 37, 0.5);
  box-shadow: 0 0 5px #fca26e;
  bottom: 0;
  float: right;
  margin-top: 10px;
  margin-right: 20px;
}

.buttonMembers:hover {
  color: white;
  background: #fca26e;
}

.buttonHome {
  height: 35px;
  float: left;
  margin-top: 15px;
  margin-left: 30px;
}
</style>
