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
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.offer }}</td>
          <td>{{ user.cycle }}</td>
          <td>
            <button @click="onClick()">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup(props, {emit}) {
    var onClick = function () {
        emit('deleteUser')
    };
    return {
      onClick,
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
