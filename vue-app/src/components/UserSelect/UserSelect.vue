<template>
    <div class="user-select">
        <div class="user-select__header">
            <label class="user-select__header-label">
                Add users

                <input 
                    v-model="searchInput"
                    @input="onSearchChange()"
                    class="user-select__header-input" 
                    placeholder="Type down to narrow the list">
            </label>
        </div>
        <div class="user-select__body">
            <div v-for="(user, index) in tmpUsers" :key="index">
                <UserOption v-if="user.isDisplayed" :user="user" @click="onUserClick(index)"/>
            </div>
        </div>
        <div class="user-select__footer">
            <button type="button" class="user-select__add-btn">
                Add
            </button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import UserOption from './UserOption.vue';

export default defineComponent({
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
        var tmpUsers = ref(props.users.map(function(user) {
            user.isDisplayed = true

            return user
        }))

        var onUserClick = function(index) {
            var user = tmpUsers.value[index]

            user.isSelected = !user.isSelected; 
        }

        var onSearchChange = function() {
            tmpUsers.value = tmpUsers.value.map(function(user) {
                if (
                    user.name.toLowerCase().includes(
                        searchInput.value.toLowerCase().trim()
                    )
                ) {
                    user.isDisplayed = true
                } else {
                    user.isDisplayed = false
                }

                return user;
            })
        }

        return {
            onUserClick,
            tmpUsers,
            searchInput,
            onSearchChange,
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