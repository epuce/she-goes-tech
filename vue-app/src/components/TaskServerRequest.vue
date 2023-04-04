<template>
  <div>
    <div class="col-grid">
      <figure class="flex-container" v-for="user in users" :key="user.id">
        <TaskServerRequestPicture
          :picture="user.image"
          width="300px"
          height="350px"
          @click="transform(user.id)"
          :class="{
            'img-transform': buttonTransform,
          }"
        />

        <p class="name-surname">{{ user.firstname }} {{ user.lastname }}</p>
        <p class="email">{{ user.email }}</p>
      </figure>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import TaskServerRequestPicture from "./TaskServerRequestPicture.vue";

export default defineComponent({
  components: {
    TaskServerRequestPicture,
  },
  setup() {
    var users = ref([]);
    var buttonTransform = ref(false);
    var user = ref({
      id: null,
    });

    var transform = function (userId) {
      if (buttonTransform.value === false) {
        fetch("https://reqres.in/api/users/" + userId, {
          method: "GET",
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (returnData) {
            user.value = {
              id: returnData.data.id,
            };
            buttonTransform.value = true;
          });
      } else {
        buttonTransform.value = false;
      }
      // buttonTransform.value = false;
    };

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
      buttonTransform,
      transform,
    };
  },
});
</script>

<style>
.col-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 9.6rem;
}
.flex-container {
  display: flex;
  flex-direction: column;
  text-align: start;
}
p {
  margin: 0;
}
.name-surname {
  font-weight: 700;
}
.img-transform {
  transform: scale(2);
}
</style>
