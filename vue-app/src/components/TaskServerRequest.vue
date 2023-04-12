<template>
  <div class="picture-gallery">
    <div v-for="(user, index) in users" :key="index" class="user-item">
      <div      >
        <!-- TODO Add img expansion here -->
        <img :src="user.image" alt="avatar image"  />
      </div>
      <div class="gallery-item-details">
        <p class="name">{{ user.firstname }} {{ user.lastname }}</p>
        <p class="email">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    var users = ref([]);

    fetch("https://fakerapi.it/api/v1/persons", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (returnData) {
        users.value = returnData.data.map(function(user) {
          user.isExpanded = false;

          return user;
        });
      });

    // var expandImg = function (i) {
    //   var user = users.value(i);

    //   user.isExpanded = !user.isExpanded;
    // };

    return {
      users,
      // expandImg,
    };
  },
});

//   setup() {
//     fetch("https://fakerapi.it/api/v1/persons")
//       .then((response) => response.json())
//       .then((data) => (this.persons = data.data));
//   },
// })
</script>

<style>
.picture-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
}

.user-item {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 200px;
}

.user-item img {
  width: 100%;
  height: auto;
}

.user-item p {
  color: black;
  font-family: "Times New Roman", Times, serif;
  padding: 0;
  margin: 5px;
}

.name {
  font-weight: bold;
  text-transform: capitalize;
}

.email {
  font-size: smaller;
}

.img-expanded {
  width: auto;
  height: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 10%;
}
</style>
