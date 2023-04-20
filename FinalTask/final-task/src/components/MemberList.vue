<template>
  <div>
    <div class="tableMembers">
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Special offer</th>
          <th>Offer cycle</th>
          <th>Delete</th>
        </thead>
        <tbody v-for="user in userList" :key="user.id" class="user-list__user">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td></td>
          <td></td>
          <td>
            <img
              src="../assets/Trash-Icon.svg"
              @click="onUserDelete(user.id)"
              class="user-list__delete"
            />
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const user = ref({
      first_name: "",
      last_name: "",
      email: "",
      user_id: null,
      id: null,
    });

    const userList = ref([]);
    fetch("http://localhost:8002/api/users")
      .then((resp) => resp.json())
      .then((resp) => {
        userList.value = resp.data;
      });

    const onUserDelete = (userId) => {
      fetch(`http://localhost:8002/api/users/${userId}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(() => {
          userList.value = userList.value.filter((user) => user.id !== userId);
        });
    };

    return {
      userList,
      user,
      onUserDelete,
    };
  },
});
</script>
<style>
.tableMembers {
  position: absolute;
  top: 25%;
  left: 15%;
  right: 15%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  color: white;
  width: 100%;
}

table th {
  font-size: x-large;
  font-weight: bold;
  border-bottom: 1px solid #fca26e;
  padding-top: 5px;
}

table td {
  font-size: large;
  font-weight: 400;
  border-bottom: 1px solid #fca26e;
  padding-top: 5px;
}

.user-list__delete path {
  fill: #fca26e;
}
.user-list__delete {
  display: none;
  margin-right: 2px;
  height: 18px;
  cursor: pointer;
}

.user-list__user:hover .user-list__delete {
  display: inline-block;
}
</style>
