
<!-- this is for the userselect view -->

<template>
  <div class="user-select">
    <div class="user-select_header">
      <label class="user-select_header-label">
        Add users
        <input
          class="user-select_header-input"
          placeholder="Type to narrow down the list"
        />
      </label>
    </div>
    <div class="user-select_body">
        <div v-for="(user, index) in userList" :key="index">
            <!-- we are looked in the users array, looping over it and reading the user name from the lsit items -->
                
            <UserOption :user="user" @click="onUserClick(index)"/>
            <!-- we use index as parameter for onclick function, so that we would know on which user is clicking (index from v-for loop) -->
            <!-- here we import each user from useroption component 
            :user (prop in userOption) is equal to user from the v-for loop-->
        </div>
    </div>
    <div class="user-select_footer">
      <button type="button" class="user-select_add-btn">Add</button>
    </div>
    <!-- Naming convention vue component name + the part name -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import UserOption from './UserOption.vue'

export default defineComponent({
    components: {
        UserOption
    },
    props: {
        users: {
            type: Array, /*the type is array, because user list is an array*/
            required: true
        }
    },
    setup(props) { /*to read the props, we need to specify it by adding it as a parameter to the setup function*/

        var userList = ref (props.users) /*we are creating a reference to props.users (we are cloning it) and not modifying the original value*/

        var onUserClick = function (index) {
            var user = userList.value[index]
            // if (user.isSelected) {
            //     user.isSelected = false 
            // } else {
            //     user.isSelected = true
            // }
            //or the easier way
            user.isSelected = !user.isSelected
        }

        return {
            onUserClick,
            userList
        }
    }

    /* in the composition api the data and methods are both under setup, but here (in the options api) 
    they are seperated and data holds data, but methods hold fnctions*/

});
</script>

<style>
.user-select {
  width: 100%;
  max-width: 350px;
  border: 1px solid lightgrey;
  border-radius: 6px;
}

.user-select_header-label {
  font-weight: bold;
  /* or 700 value is the same a skeyword bold */
  display: block; /*inline elements take up the its whole place at all times (only as much as it needs, therefore we have to change it to block to take up the whole line and we can then move it to the left*/
  text-align: left;
}

.user-select_header-input {
  border: none !important; /*we force the border to not be displayed in any case*/
  outline: none !important;
  display: block; /*so that it would take up the whole line*/
  width: 100%;
}

.user-select_header {
  padding: 16px 14px; /*first value top and bottom, the second value left and right*/
  border-bottom: 1px solid lightgray;
}

.user-select_add-btn {
    padding: 8px 12px;
    background: skyblue;
    border: none;
    border-radius: 4px;
}

.user-select_footer {
    padding: 16px;
    border-top: 1px solid lightgray;
}
</style>
