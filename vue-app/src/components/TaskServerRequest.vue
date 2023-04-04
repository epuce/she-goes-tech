<template>
  <div>
    <div class="main-container" >
      <div class="user-card" v-for="user in users" :key="user.id">
        <img :src="user.image" class="imgPicture" alt="" />
          <h3>{{ user.firstname }} {{ user.lastname }}</h3>
          <p>{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    var users = ref([]);
    var user = ref({
      name: "",
      email: "",
      image: "",
    });

    fetch("https://fakerapi.it/api/v1/persons", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (returnData) {
        users.value = returnData.data;
      });

    return {
      users,
      user,
    };
  },
});
</script>
<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.user-card {
    font-size: 0.7rem;
    margin: 10px;
    box-sizing: border-box;
    text-align: start;
    flex-direction: column;
}
.imgPicture {
  height: 150px;
}
h3, p {
    margin: 2px;
}

</style>
