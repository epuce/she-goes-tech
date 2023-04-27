<template>
  <div>
    <table class="table-wrapper">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.userEmail }}</td>
          <td>{{ user.userCity }}</td>
          <td><button @click="deleteUser(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      userList: JSON.parse(localStorage.getItem("userList")) || [],
    };
  },
  methods: {
    deleteUser(index) {
      var userList = JSON.parse(localStorage.getItem("userList")) || [];
      if (Array.isArray(userList)) {
        userList.splice(index, 1);
        localStorage.setItem("userList", JSON.stringify(userList));
        this.userList = JSON.parse(localStorage.getItem("userList")) || [];
      }
    },
  },
});
</script>
<style>
.table-wrapper {
  position: relative;
  top: 100px;
  left: 150px;
  width: 600px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-top: 50px;
}

button {
  background: #f68084;
  border: none;
  border-radius: 8px;
  color: antiquewhite;
  font-weight: 600;
}

button:hover {
  cursor: pointer;
  background: #f25a5f;
}
</style>
