<template>
  <div class="user-select">
    <div class="user-select__header">
      <label class="user-select__header-label"
        >Add users
        <input
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
        <UserOption :user="user" @click="onUserClick(index)" />
      </div>
    </div>
    <div class="user-select__footer">
      <!-- default value of type is "submit" -->
      <button class="user-select__add-btn" type="button">Add</button>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
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
    //we clone the original props so that we could avoid modifying the original data
    var userList = ref(props.users);

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

    return {
      onUserClick,
      userList,
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
}
.user-select__footer {
  padding: 16px;
  border-top: 1px solid lightgray;
}
</style>
