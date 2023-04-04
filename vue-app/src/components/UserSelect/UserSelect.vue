<template>
    <div class="user-select">
        <div class="user-select__header">
            <label class="user-select__header-label">
                Add User

                <input
                    v-model="searchInput"
                    @input="onSearchChange()"
                    class="user-select__header-input"    
                    placeholder="Type down to narrow the list">
            </label>
        </div>
        <div class="user-select__body">
            <div v-for="(user, index) in userList" :key="index">
            <UserOption v-if="user.isDisplayed" :user="user" @click="onUserClick(index)"/>
            </div>
        </div>
        <div class="user-select__footer">
            <button @click="saveSelectedUsers()" type="button" class="user-select__add-btn">
                Add
            </button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import UserOption from './UserOption.vue';

export default defineComponent ({
    components: {
        UserOption
    },
    props: {
        users: {
            type: Array,
            required: true,
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
            user.isSelected = !user.isSelected
            
            //Option 2 user.isSelected = user.isSelected ? false : true;

            /*if (user.isSelected) {
               user.isSelected = false
             } else {
               user.isSelected = true
            }*/
        }

        var onSearchChange = function() {
            userList.value = userList.value.map(function(user) {
                if (user.name.toLowerCase().includes(searchInput.value.toLowerCase().trim())) {
                    user.isDisplayed = true
                } else {
                    user.isDisplayed = false
                }
                
                return user;
                //user.isDisplayed = !user.isDisplayed;
            })
        }

        var saveSelectedUsers = function() {
            var selectedUsers = userList.value.filter(function(user) {
                return user.isSelected
            })
            
            var selectedUserIds = selectedUsers.map(function(selectedUser) {
                return selectedUser.id;
            })
            localStorage.selectedUserIds = JSON.stringify(selectedUserIds)
        }

        watch (searchInput, onSearchChange)

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
    max-width: 280px;
    border-radius: 6px;
    margin: 40px;
    box-shadow: 5px 5px 5px 5px rgba(100, 100, 100, 0.2);
}

.user-select__header {
    padding: 16px 14px;
    border-bottom: 1px solid lightgray;
}

.user-select__header-label {
    /* 700 === bold */
    font-weight: bold;
    text-align: left;
    display: block;
}

.user-select__header-input {
    border: none !important;
    outline: none !important;
    display: block;
    width: 100%;
}

.user-select__add-btn {
    padding: 8px 12px;
    border: none;
    background: skyblue;
    border-radius: 8px;
    cursor: pointer;
}

.user-select__footer {
    padding: 16px;
    border-top: 1px solid lightgray;
}

</style>