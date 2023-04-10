<template>
  <div>
    <div class="col-grid">
      <figure
        class="flex-container"
        v-for="(user, index) in users"
        :key="index"
      >
        <TaskServerRequestPicture
          :picture="user.image"
          alt="avatar image"
          @click="transform(index)"
          :class="{
            'img-transform': fullWidthImageIndex === index,
          }"
        />
        <div>
          <p class="name-surname">{{ user.firstname }} {{ user.lastname }}</p>
          <p class="email">{{ user.email }}</p>
        </div>
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
    var fullWidthImageIndex = ref(null);
    var buttonTransform = ref(false);

    var transform = function (userId) {
      if (fullWidthImageIndex.value === userId) {
        fullWidthImageIndex.value = null;
      } else {
        fullWidthImageIndex.value = userId;
      }
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
      fullWidthImageIndex,
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
  width: 300px;
  height: 350px;
}

p {
  margin: 0;
}
.name-surname {
  font-weight: 700;
}
.img-transform {
  transform: scale(1.2);
}
</style>
