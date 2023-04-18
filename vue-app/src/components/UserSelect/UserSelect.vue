<template>
  <div class="user-select">
    <div class="user-select_header">
      <label class="user-select_header-label">
        Add users
        <input
          v-model="searchInput"
          class="user-select_header-input"
          placeholder="Type down to narrow the list">
      </label>
    </div>
    <div class="user-select_body">
      <div v-for="(user, index) in tmpUsers" :key="index">
        <UserOption
          v-if="user.isDisplayed"
          :user="user"
          @click="onUserClick(index)"
        />
      </div>
    </div>
    <div class="user-select_footer">
      <button
        @click="saveSelectedUsers()"
        type="button"
        class="user-select_add-btn"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import UserOption from "./UserOption.vue";

export default defineComponent({
  components: {
    UserOption,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    var searchInput = ref("");
    var tmpUsers = ref(
      props.users.map(function (user) {
        // user.isDisplayed = true;

        // return user;
        return {
          ...user,
          isDisplayed: true,
        }

      })
    );
    var onUserClick = function (index) {
      var user = tmpUsers.value[index]

      user.isSelected = !user.isSelected;
    };

    var onSearchChange = function () {
      tmpUsers.value = tmpUsers.value.map(function (user) {
        if (
          user.name.toLowerCase().includes(searchInput.value.toLowerCase().trim())
        ) {
          user.isDisplayed = true;
        } else {
          user.isDisplayed = false;
        }
        return user;
      });
    };

    var saveSelectedUsers = function () {
      var selectedUsers = tmpUsers.value.filter(function (user) {
        return user.isSelected;
      });

      var selectedUsersIds = selectedUsers.map(function(selectedUsers) {
        return selectedUsers.id;
      });
      localStorage.selectedUsersIds = JSON.stringify(selectedUsersIds);
    };

    watch(searchInput, onSearchChange)

    return {
      onUserClick,
      tmpUsers,
      searchInput,
      onSearchChange,
      saveSelectedUsers,
    };
  },
});
</script>

<style>
.user-select {
  width: 100%;
  max-width: 350px;
  border: 1px solid lightgray;
  border-radius: 6px;
}

.user-select_header-label {
  /* 700 === bold */
  font-weight: bold;
  text-align: left;
  display: block;
}

.user-select_header-input {
  border: none !important;
  outline: none !important;
  display: block;
  width: 100%;
}

.user-select_header {
  padding: 16px 14px;
  border-bottom: 1px solid lightgray;
}

.user-select_add-btn {
  padding: 8px 12px;
  background: skyblue;
  border-radius: 4px;
  border: none;
  color: aliceblue;
  cursor: pointer;
}

.user-select_footer {
  padding: 16px;
  border-top: 1px solid lightgray;
}
</style>
