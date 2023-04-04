<template>
  <div class="picture-gallery">
    <div v-for="(user, index) in users" :key="index" class="user-item">
      <img
        :src="user.image"
        alt="avatar image"
        @click="imageLarger(user.image)"
        :class="{ large : isLarger }" 
      />
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
    var isLarger = ref(false);

    fetch("https://fakerapi.it/api/v1/persons", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (returnData) {
        users.value = returnData.data;
      });

//  Expand the picture (without the text) when clicking on it
    // var imageLarger = function () {
    //     users.image.isLarger = users.image.isLarger
    // };

    return {
      users,
      // imageLarger,
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
  /* width: calc(100% / 6); */
  /* border: 1px solid red; */
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


.large {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 9999; */
}

</style>
