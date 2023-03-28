<template>
<div class="user-select">
    <div class="user-select__header">
        <label class="user-select__header-label">
            Add user

            <input 
                v-model="searchInput" 
                @input="onSearchChange()"
                class="user-select__header-input"
                placeholder="Type down to narrow the list">
        </label>
    </div>
    <div class="user-select__body">
        <div v-for="(user, index) in userList" :key='index'>
            <UserOption v-if='user.isDisplayed' :user="user" @click="onUserClick(index)"/>
        </div>
    </div>
    <div class="user-select__footer">
        <button @click="saveSelectedUsers()" type="button" class="user-select__add-btn">Add</button>
    </div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import UserOption from './UserOption.vue';
export default defineComponent ({
    components: {
    UserOption
},

    props: {
        users: {
            type: Array,
            required: true
        }
    },

    setup(props) {
        var searchInput = ref('')
        var userList = ref(props.users.map(function(user) {
            user.isDisplayed = true

            return user 
        }))

        var onUserClick = function(index) {
            var user = userList.value[index]

            // if (user.isSelected) {
            //     user.isSelected = false
            // } else {
            //     user.isSelected = true
            // }

            user.isSelected = !user.isSelected;
        }

        var onSearchChange = function() {
            userList.value = userList.value.map(function(user) {

            if (user.name.toLowerCase().includes(searchInput.value.toLowerCase().trim())) {
                user.isDisplayed = true
            } else {
                user.isDisplayed = false
            }

            return user;
        })   
    }

        // for ref structures we read value

        var saveSelectedUsers = function() {
            var selectedUsers = userList.value.filter(function(user) {
                return user.isSelected;
            })

            var selectedUserIds = selectedUsers.map(function(selectedUsers) {
                return selectedUsers.id;
            })
    
            localStorage.selectedUserIds = JSON.stringify(selectedUserIds)
            // console.log(selectedUsers)
            }
         

        return {
            onUserClick,
            userList,
            searchInput,
            onSearchChange,
            saveSelectedUsers,
        }
    }
})

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
    text-align: left;
    display: block;
    cursor: pointer;
}

.user-select__header-input {
    border: none !important;
    outline: none !important;
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
    padding: 18px;
    border-top: 1px solid lightgray;

}

</style>