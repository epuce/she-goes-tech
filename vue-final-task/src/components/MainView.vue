<template>
  <div class="main-view-wrapper">
    <UserFormContainer
      @show-popup="showPopup()"
      ref="UserFormContainer"
      @save-subscriber="saveSubscriber"
      :username-input="selectedUser"
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in list" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.specialDeals }}</td>
            <td>{{ user.offerCycle }}</td>
            <td>
              <button
                class="subscriber-table__update-btn"
                @click="fillUserform(user)"
              >
                Update
              </button>
            </td>
            <td>
              <button
                class="subscriber-table__delete-btn"
                @click="deleteUser(index)"
              >
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ThankyouPopup
      v-if="isSubscribed"
      @close-popup="closePopup()"
      :user-name="list[list.length - 1].name"
    />
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
    const list = ref(getUserList());
    var selectedUser = ref({})

    const showPopup = () => {
      isSubscribed.value = !isSubscribed.value;
    };

    const closePopup = () => {
      isSubscribed.value = false;
      UserFormContainer.value.openForm();
    };

    const saveSubscriber = (user) => {
      list.value.push(user);
      localStorage.list = JSON.stringify(list.value);
    };

    function getUserList() {
      try {
        var list = JSON.parse(localStorage.list);
      } catch {
        if (!Array.isArray(list)) {
          list = [];
        }
      }

      return list;
    }

    const deleteUser = (index) => {
      list.value.splice(index, 1);
      localStorage.list = JSON.stringify(list.value);
    };

    function fillUserform (tmpUser) {
      selectedUser.value = { ...tmpUser };
      UserFormContainer.value.openForm();

      console.log(selectedUser)
    }

    return {
      isSubscribed,
      showPopup,
      UserFormContainer,
      closePopup,
      saveSubscriber,
      getUserList,
      list,
      deleteUser,
      fillUserform,
      selectedUser
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
