<template>
  <div class="subscriber-table-wrapper">
    <table class="subscriber-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>E-mail</th>
          <th>Special offers</th>
          <th>Offer cycle</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.special_offers }}</td>
          <td>{{ user.offer_cycle }}</td>
          <td>
            <button
              class="subscriber-table__update-btn"
              @click="fillUserForm(user)"
            >
              <font-awesome-icon 
              :icon="['far', 'pen-to-square']" />
            </button>
          </td>
          <td>
            <button
              class="subscriber-table__delete-btn"
              @click="deleteUser(user.id)"
            >
              <font-awesome-icon 
              :icon="['fa', 'trash']" />
            </button>
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
    userList: {
      type: Array,
      default: () => [],
    },
  },

  setup(props, { emit }) {
    function deleteUser(userId) {
      emit("delete-user", userId);
    }

    function fillUserForm(user) {
      emit("fill-user-form", user);
    }

    return {
      deleteUser,
      fillUserForm,
    };
  },
});
</script>
<style>
.subscriber-table-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
  padding-left: 45px;
  min-width: fit-content;
}

.subscriber-table,
.subscriber-table th,
.subscriber-table td {
  border: 1px solid #bcb8b8;
  border-collapse: collapse;
}

.subscriber-table-wrapper tr {
  height: 30px;
}

.subscriber-table-wrapper th,
td {
  padding: 2px 15px 2px 15px;
  white-space: nowrap;
}

.subscriber-table thead {
  background-color: #dfdada;
  font-family: sans-serif;
  font-size: small;
}

.subscriber-table {
  box-shadow: -1px 3px 26px -7px rgba(0, 0, 0, 0.45);
}

.subscriber-table__delete-btn {
  border: none;
  background: none;
  font-size: 12px;
  cursor: pointer;
}
.subscriber-table__update-btn {
  border: none;
  background: none;
  font-size: 12px;
  cursor: pointer;
}
</style>
