<template>
  <div class="main-view-wrapper">
    <UserFormContainer
      @show-popup="showPopup()"
      ref="UserFormContainer"
      @save-subscriber="saveSubscriber"
      :user="user"
    />
    <UserTable
      :user-list="userList"
      @delete-user="deleteUser"
      @fill-user-form="fillUserForm"
    />
    <ThankyouPopup
      v-if="isSubscribed"
      @close-popup="closePopup()"
      :username="user.username"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import UserFormContainer from "./UserFormContainer.vue";
import ThankyouPopup from "./ThankyouPopup.vue";
import UserTable from "./UserTable.vue";

export default defineComponent({
  components: {
    UserFormContainer,
    ThankyouPopup,
    UserTable,
  },

  setup() {
    const isSubscribed = ref(false);
    const UserFormContainer = ref();
    var userList = ref([]);
    var user = ref({
      id: "",
      username: "",
      email: "",
      special_offers: ref(false),
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
        special_offers: subscriber.special_offers,
        offer_cycle: subscriber.offer_cycle,
      };

      if (subscriber.id) {
        fetch(`http://localhost:8002/api/users/${subscriber.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user.value),
        })
          .then((resp) => resp.json())
          .then((resp) => {
            if (!resp.error) {
              const userIndex = userList.value.findIndex(
                (item) => item.id === subscriber.id
              );

              userList.value[userIndex] = {
                ...userList.value[userIndex],
                ...user.value,
              };
            }
          });
      } else {
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
              console.log(user);
              user.value.id = resp.data.insertId;
              userList.value.push({
                ...user.value,
              });
              console.log(userList.value);
            }
          });
      }
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

    function fillUserForm(tmpUser) {
      UserFormContainer.value.openForm();
      console.log(user);
      user.value = {
        id: tmpUser.id,
        username: tmpUser.username,
        email: tmpUser.email,
        special_offers: tmpUser.special_offers,
        offer_cycle: tmpUser.offer_cycle,
      };
    }

    return {
      isSubscribed,
      showPopup,
      UserFormContainer,
      closePopup,
      saveSubscriber,
      user,
      userList,
      deleteUser,
      fillUserForm,
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
</style>
