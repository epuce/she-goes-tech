<template lang="">
  <div>
    <label
      >Name
      <input v-model="user.name" />
    </label>
    <!-- we use attribute disabled: no click events -->
    <button @click="saveUser()" :disabled="isSaveDisabled">Save</button>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <!-- we use : when we pass value to a variable, in size case it is just a text -->
            <UserAvatar :avatar="user.avatar" size="32px" />
          </td>
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>
            <button @click="fillForm(user.id)">Edit</button>
          </td>
          <td>
            <button @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
import UserAvatar from "./UserSelect/UserAvatar.vue";

export default defineComponent({
  components: {
    UserAvatar,
  },
  // the main activity will be happening in setup method
  setup() {
    var isSaveDisabled = ref(false);
    // we use ref() because this is dynamic data, we will put the data from the response. Default is an empty list
    var users = ref([]);

    // v-model holds user.name connection
    var user = ref({
      name: "",
      id: null,
    });

    // inside comma we first provide url. Url is called end-point. When we ask for data, it is called API call (API only return data, it does not return fonts, images, css and etc). In the second parameter we provide the method, e.g., GET, POST
    fetch("https://reqres.in/api/users", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (returnData) {
        users.value = returnData.data;
      });
    // when the response is received, we do something with it. We convert response to object

    //we get information for only one specific user
    var fillForm = function (userId) {
      fetch("https://reqres.in/api/users/" + userId, {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (returnData) {
          user.value = {
            name: returnData.data.first_name,
            id: returnData.data.id,
          };
        });
    };

    var saveUser = function () {
      isSaveDisabled.value = true;
      if (user.value.id) {
        fetch("https://reqres.in/api/users/" + user.value.id, {
          // PUT means update, it will update the original data
          method: "PUT",
          body: JSON.stringify({
            name: user.value.name,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (returnData) {
            console.log(returnData);

            // we reset the values so that we wouldn;t see the name we added
            user.value = {
              id: null,
              name: "",
            };
            isSaveDisabled.value = false;
          });
      } else {
        // POST will create new data
        fetch("https://reqres.in/api/users/", {
          method: "POST",
          body: JSON.stringify({
            name: user.value.name,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function () {
            user.value.name = "";
            isSaveDisabled.value = false;
          });
      }
    };

    var deleteUser = function (userId) {
      // To delte the user we use DELETE method
      fetch("https://reqres.in/api/users/" + userId, {
        method: "DELETE",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (returnData) {
          console.log(returnData);
        });
    };
    return {
      users,
      fillForm,
      user,
      saveUser,
      isSaveDisabled,
      deleteUser,
    };
  },
});
</script>
<style lang=""></style>
