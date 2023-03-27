<template>
    <div class="user-select">
        <div class="user-select__header">
            <label>
                Add users
                
                <div class="user-select__search-input-wrapper">
                    <img 
                        class="user-select__search-icon"
                        src="https://thumbs.dreamstime.com/b/outline-search-icon-vector-illustration-isolated-transparent-background-sign-symbol-black-white-style-207070400.jpg">
                    <input v-model="searchInput" class="user-select__search-input" type="search" placeholder="Type to narrow down the list" @input="onSearchChange">
                </div>
            </label>
        </div>
        <div class="user-select__body">
            <div v-for="(user, index) in userList" :key="index">
                <UserOption v-if="user.shouldShow" :user="user" @click="onClick(index)"/>
            </div>
        </div>


        <div class="user-select__footer">
            <button class="user-select__add-btn" @click="saveUsers()">Add</button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import  UserOption from './UserOption.vue';

export default defineComponent({
    components: {
        UserOption,
    },
    props: {
        users: {
            type: Array,
            required: true,
        }
    },
    setup(props) {
        const searchInput = ref('');
        const userList = ref(props.users.map((user) => ({
            ...user,
            shouldShow: true,
        })))
 
        var onClick = (index) => {
            const user = userList.value[index];

            user.isSelected = !user.isSelected;
        }

        var onSearchChange = () => {
            userList.value = userList.value.map((user) => {
                console.log(user)

                if (user.name.toLowerCase().includes(searchInput.value.trim().toLocaleLowerCase())) {
                    user.shouldShow = true;
                } else {
                    user.shouldShow = false;
                }

                return user;
            })
        }
        

        var saveUsers = () => {
            localStorage.userList = JSON.stringify(userList.value)
        }

        return {
            searchInput,
            userList,
            onClick,
            onSearchChange,
            saveUsers,
        }
    }
})
</script>

<style>

.user-select__search-input-wrapper {
    position: relative;
}

.user-select__search-input {
    display: block;
    border: none !important;
    outline: none !important;
    width: 100%;
    margin-top: 4px;
    padding-left: 20px;
}

.user-select__header {
    padding: 16px 14px;
    position: relative;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.user-select__search-icon {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.user-select__footer {
    display: flex;
    justify-content: center;
    padding: 16px 0;
    position: relative;
    box-shadow: rgba(149, 157, 165, 0.2) 0px -8px 24px;
}

.user-select__add-btn {
    padding: 8px 12px;
    background: lightskyblue;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.user-select {
    width: 100%;
    max-width: 350px;
    border: 1px solid lightgray;
    border-radius: 6px;
}

.user-select__body {
    overflow: auto;
    /* height: 35vh; */
    max-height: 35vh;
}

.user-select__body {
    scrollbar-width: auto;
    scrollbar-color: transparent transparent;
}

.user-select__body::-webkit-scrollbar {
    width: 8px;
}

.user-select__body::-webkit-scrollbar-track {
    background: #ffffff;
}

.user-select__body::-webkit-scrollbar-thumb {
    background-color: #dbd5dc;
    border-radius: 10px;
    border: 1px solid white;
}
</style>