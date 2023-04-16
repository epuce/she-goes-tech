<template>
  <div class="user-select">
    <div class="user-select__header">
      <label class="user-select__header-label"
        >Add users
        <!-- to read input value we use v-model. We use @input event because it reads the changes happening when the input content changes-->
        <!-- @input="($event) => onSearchChange()" -->
        <input
          v-model="searchInput"
          placeholder="Type to narrow down the list"
          class="user-select__header-input"
        />
      </label>
    </div>
    <div class="user-select__body">
      <!-- we loop through the users (under users prop) array (=list). The looping happens inside html. Array is identified by the key which is an index (:key="index")-->
      <div v-for="(user, index) in userList" :key="index">
        <!-- we read user.name  -->
        <!-- {{ user.name }} -->

        <!-- we are reading an index and pass it to event listener function -->
        <UserOption
          v-if="user.isDisplayed"
          :user="user"
          @click="onUserClick(index)"
        />
      </div>
    </div>
    <div class="user-select__footer">
      <!-- default value of type is "submit" -->
      <button
        @click="($event) => saveSelectedUsers()"
        class="user-select__add-btn"
        type="button"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref, watch} from "vue";
import UserOption from "./UserOption.vue";

export default defineComponent({
  //to pass data we use props key
  components: {
    UserOption,
  },

  props: {
    // key us user and a value is an object
    users: {
      type: Array,
      required: true,
    },
  },
  //We read props because we need get users one by one
  setup(props) {
    var searchInput = ref("");
    //we clone the original props so that we could avoid modifying the original data
    var userList = ref(
      props.users.map(function (user) {
        user.isDisplayed = true; //we add isDisplayed=true to the array which is in App.vue
        return user;
      })
    );

    var onUserClick = function (index) {
      var user = userList.value[index];
      // var user = props.users[index];

      user.isSelected = !user.isSelected;

      // below is the same as above
      // if (user.isSelected) {
      //   user.isSelected = false;
      // } else {
      //   user.isSelected = true;
      // }
    };
    var onSearchChange = function () {
      userList.value = userList.value.map(function (user) {
        //we check if user name in array we have is the same as inPut value we typed in. If the same, show that user
        if (
          user.name
            .toLowerCase()
            .includes(searchInput.value.toLowerCase().trim()) //with trim we remove spaces at the end and beginning. Spaces in between are not taken into account
        ) {
          user.isDisplayed = true;
        } else {
          user.isDisplayed = false;
        }
        return user; //we return an updated user
      });
      //we need to know if the text we srite is already in the list
    };
    var saveSelectedUsers = function () {
      //filtering our list. We go through the users. IF IT IS SELECTED, WE ADD IT TO A NEW ARRAY OF selectedUsers
      var selectedUsers = userList.value.filter(function (user) {
        return user.isSelected;
      });
      var selectedUserIds = selectedUsers.map(function (selectedUser) {
        return selectedUser.id;
      });
      console.log(selectedUsers, selectedUserIds);
      localStorage.selectedUserIds = JSON.stringify(selectedUserIds);
    };

    //Altenative to listener next to the input: WATCHER. First item is the property we are watching, then second is the function we will execute. We are listening when the data changes
    watch(searchInput, onSearchChange);

    return {
      onUserClick,
      userList,
      searchInput,
      onSearchChange, //to expose it within HTML we need to return it
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
.user-select__header-label {
  font-weight: bold;
  display: block;
  text-align: left;
}
.user-select__header-input {
  /* this will ensure that default values are not applied */
  outline: none !important;
  border: none !important;
  /* for input to take the full width of the component */
  display: block;
  width: 100%;
}
.user-select__header {
  padding: 16px 14px;
  border-bottom: 1px solid lightgray;
}
.user-select__add-btn {
  padding: 8px 12px;
  background: skyblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.user-select__footer {
  padding: 16px;
  border-top: 1px solid lightgray;
}
</style>
