<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>User name</th>
          <th>E-mail</th>
          <th>Special offers</th>
          <th>Offer cycle</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{ user.id }}></td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.offer }}</td>
          <td>{{ user.cycle }}</td>
          <td>
            <button @click="deleteUser(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  setup() {
    var userList = ref([]);
    var user = ref({
      id: 0,
      name: "",
      email: "",
      offer: false,
      cycle: "",
    });

    return {
      user,
      userList,
    };
  },
});
</script>
<style>
.table-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
}

table {
  border-collapse: collapse;
  width: 75%;
  margin-top: 60px;
  height: auto;
}

td,
th {
  padding: 5px;
  border: 1px solid;
}

th {
  background-color: lightgray;
}
</style>
