<template>
  <div class="table-container">
    <table class="user-table">
      <thead>
        <th>#</th>
        <th>Username</th>
        <th>E-mail</th>
        <th>Special offers</th>
        <th>Offer cycle</th>
        <th></th>
      </thead>
      <tbody class="user-table__body">
        <tr
          v-for="item in userList"
          :key="item.id"
          :class="{
            'user-list__active': user.id === item.id,
          }"
          @click="onUserSelect(item.id)"
        >
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
          <!-- @mouseover="hover = true"
          @mouseleave="hover = false" -->
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
  },
  props: {
    testProp: {
      type: Boolean,
      required: true,
    },
  },

  setup(props, {emit}) {
    // const clickedUser = ref(false);
    const hover = ref(false);
    const userList = ref([]);
    const user = ref({
      user_name: "",
      email: "",
      offers: false,
      cycle: "",
      id: null,
    });

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

    const onUserSelect = (userId) => {
      // hover.value = true;
      console.log(userId);
      emit("open-user", userId);

      // fetch(`http://localhost:8002/api/landingPage/${userId}`)
      //   .then((resp) => resp.json())
      //   .then(() => {
      //     userList.value = userList.value.filter((user) => user.id === userId);
      //   });
    };

    return {
      userList,
      user,
      onUserDelete,
      onUserSelect,
      displayData,
      hover,
      // clickedUser,
    };
  },
});
</script>
<style>
.table-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
}

.user-table {
  /* display: inline-table; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: 70%;
  margin-top: 80px;
  /* max-width: 80%; */
  border-spacing: 0;
  border-collapse: collapse;
  height: auto;
}
.user-table td,
.user-table th {
  padding: 10px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #45260a;
  border: 1px solid rgb(153, 153, 153, 0.3);
  font-size: 1.6rem;
}
.user-table th {
  background-color: rgb(69, 38, 10, 0.9);
  color: #fff;
  border: 1px solid #999999;
  text-align: left;
}

.user-list__delete path {
  fill: rgba(0, 0, 0, 0.8);
}
.user-list__delete {
  /* display: none; */
  /* float: right; */
  margin-right: 2px;
  cursor: pointer;
}
.user-list__active {
  cursor: pointer;
  background: rgba(0, 0, 100, 0.2);
}
</style>
