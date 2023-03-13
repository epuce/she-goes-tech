<template>
  <div>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/listView">list view</router-link>
      <router-link to="/not-found">route not found</router-link>
    </p>
    <router-view></router-view>
  </div>

</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
})
</script>
