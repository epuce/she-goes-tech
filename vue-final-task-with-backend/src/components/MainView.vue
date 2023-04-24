<template>
  <div class="main-view-wrapper">
    <UserFormContainer
      @show-popup="showPopup()"
      ref="UserFormContainer"
      @save-subscriber="saveSubscriber"
      :user="user"
    />
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.special_deals }}</td>
            <td>{{ user.offer_cycle }}</td>
            <td>
              <button
                class="subscriber-table__update-btn"
                @click="fillUserForm(user)"
              >
                x
              </button>
            </td>
            <td>
              <button
                class="subscriber-table__delete-btn"
                @click="deleteUser(user.id)"
              >
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ThankyouPopup v-if="isSubscribed" @close-popup="closePopup()" />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import UserFormContainer from "./UserFormContainer.vue";
import ThankyouPopup from "./ThankyouPopup.vue";

export default defineComponent({
  components: {
    UserFormContainer,
    ThankyouPopup,
  },

  setup() {
    const isSubscribed = ref(false);
    const UserFormContainer = ref();
    const userList = ref([]);
    var user = ref({
      username: "",
      email: "",
      special_deals: ref(false),
      offer_cycle: "",
    });

    function showPopup() {
      isSubscribed.value = !isSubscribed.value;
    }

    const closePopup = () => {
      isSubscribed.value = false;
      UserFormContainer.value.openForm();
    };

    fetch("http://localhost:8003/api/users/")
      .then((resp) => resp.json())
      .then((resp) => {
        userList.value = resp.data;
      });

    function saveSubscriber(subscriber) {
      user.value = {
        username: subscriber.username,
        email: subscriber.email,
        special_deals: subscriber.special_deals,
        offer_cycle: subscriber.offer_cycle,
      };
      fetch("http://localhost:8003/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8003",
        },
        body: JSON.stringify(user.value),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (!resp.error) {
            console.log(user)
            user.value.id = resp.data.insertId;
            userList.value.push({
              ...user.value,
            });
            console.log(userList.value)
          }
        });
    }

    function deleteUser(userId) {
      fetch(`http://localhost:8003/api/users/${userId}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(() => {
          userList.value = userList.value.filter((user) => user.id !== userId);
        });
    }

    function fillUserForm (tmpUser) {
      user.value = tmpUser ;
      UserFormContainer.value.openForm()

      console.log(user.value)
    }

    return {
      isSubscribed,
      showPopup,
      UserFormContainer,
      closePopup,
      userList,
      saveSubscriber,
      deleteUser,
      fillUserForm,
      user
    };
  },
});
</script>
<style>
body {
  margin: 0;
}
.main-view-wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
}

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
  font-weight: bold;
  font-size: 15px;
  color: red;
  cursor: pointer;
}
</style>
