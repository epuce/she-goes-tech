<template>
  <div class="table-container">
    <h1>Get first meal for free!</h1>
    <table class="user-table">
      <thead>
        <th>#</th>
        <th>Username</th>
        <th>E-mail</th>
        <th>Special offers</th>
        <th>Offer cycle</th>
        <th class="user-table__delete"></th>
      </thead>
      <tbody class="user-table__body">
        <tr v-for="item in userList" :key="item.id" @click="onUserSelect(item)">
          <td>{{ item.id }}</td>
          <td>{{ item.user_name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.special_offers }}</td>
          <td>{{ item.offer_cycle }}</td>
          <td>
            <font-awesome-icon
              icon="fa-solid fa-trash"
              @click.stop="onUserDelete(item.id)"
              class="user-list__delete"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
export default defineComponent({
  watch: {
    testProp: function () {
      this.displayData();
    },
    update: function () {
      this.displayData();
    },
  },
  props: {
    testProp: {
      type: Boolean,
      required: true,
    },
    update: {
      type: Boolean,
      required: true,
    },
  },

  setup(props, {emit}) {
    const hover = ref(false);
    const userList = ref([]);

    fetch("http://localhost:8002/api/landingPage")
      .then((resp) => resp.json())
      .then((resp) => {
        userList.value = resp.data;
      });

    const displayData = function () {
      fetch("http://localhost:8002/api/landingPage")
        .then((resp) => resp.json())
        .then((resp) => {
          userList.value = resp.data;
        });
    };

    const onUserDelete = (userId) => {
      fetch(`http://localhost:8002/api/landingPage/${userId}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(() => {
          userList.value = userList.value.filter((user) => user.id !== userId);
        });
    };

    const onUserSelect = (selectedUser) => {
      emit("open-user", selectedUser.id);
    };

    return {
      userList,
      onUserDelete,
      onUserSelect,
      displayData,
      hover,
    };
  },
});
</script>
<style>
.table-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
}
h1 {
  margin-top: 4rem;
  font-size: 3.6rem;
  text-align: center;
}
.user-table {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: 70%;
  margin-top: 80px;
  border-spacing: 0;
  border-collapse: collapse;
  height: auto;
}
.user-table td,
.user-table th {
  padding: 1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #45260a;
  border: 1px solid rgb(153, 153, 153, 0.2);
  font-size: 1.6rem;
}
.user-table th {
  background-color: #45260a;
  color: #fff;
  border: 1px solid #999999;
}
.user-table__delete {
  text-align: center;
}
.user-list__delete path {
  fill: rgba(0, 0, 0, 0.8);
}
.user-list__delete {
  margin-right: 0.2rem;
  cursor: pointer;
}

tr:hover {
  cursor: pointer;
  background: #fdf2e9;
}
</style>
