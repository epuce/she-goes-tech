<template>
    <div>
      <div class="gallery-container">
        <div v-for="(person, id) in persons" :key="id" class="person-wrapper">
          <img :src="person.avatar" @click="togglePictureSize()" class="small-img" />
          <h1 class="person-name">
            {{ person.first_name }} {{ person.last_name }}
          </h1>
          <h2 class="person-email">{{ person.email }}</h2>
          <div 
            class="big-image-wrapper"
            v-if="isPictureBig"
            @click="togglePictureSize()"
          > 
            <img class="big-image" :src="person.avatar" />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      var persons = ref([]);
      var isPictureBig = ref(false);
  
      fetch("https://reqres.in/api/users", {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (returnData) {
          persons.value = returnData.data;
        });
  
      var togglePictureSize = function () {
        isPictureBig.value = !isPictureBig.value;
      };
  
      return {
        persons,
        isPictureBig,
        togglePictureSize,
      };
    },
  });
  </script>
  <style>
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    width: 100%;
  }
  
  .person-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
  }
  
  .person-name {
    font-size: 10px;
    margin-top: 2px;
    margin-bottom: 0;
  }
  
  .person-email {
    font-size: 8px;
    margin-bottom: 10%;
    margin-top: 0;
  }
  
  .person-name,
  .person-email {
    text-align: left;
  }
  
  .small-img {
    width: 126px;
    cursor: pointer;
  }
  
  .big-image-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 228, 196, 0.192);
    width: 100%;
    height: 100%;
  }
  
  .big-image {
    width: 70%;
    margin-top: 5%;
    cursor: pointer;
  }
  </style>
  