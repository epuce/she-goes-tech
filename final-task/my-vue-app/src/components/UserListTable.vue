<template>
  <div>
    <div>
      <input type="text" />
      <input type="text" />
    </div>

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
        <tr v-for="(user, index) in users" :key="index">
          <td></td>
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
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    var users = ref([]);
    var user = ref({
      userName: "",
      userEmail: "",
      userCity:"",
      userId: null,
    });
    return {
      user,
      users,
    };
  },
});
</script>
<style>
.table-wrapper {
  position: relative;
  top: 100px;
  width: 70%;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
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
