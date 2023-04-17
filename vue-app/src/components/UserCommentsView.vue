<template>
    <div class="user-comments">
        <div class="user-comments__comments"></div>
        <div class="user-comments__user">
            <form>
                <label>
                    First name

                    <input v-model="user.first_name">
                </label>

                <label>
                    Last name

                    <input v-model="user.last_name">
                </label>

                <div>
                    <button type="button" @click="onUserSave()">Save</button>
                </div>
            </form>

            <div class="user-list">
                <div v-for="item in userList" 
                    :key="item.id"
                    class="user-list__user"
                    :class="{
                        'user-list__user--active': user.id === item.id
                    }"
                    @click="fillUserForm(item)">
                    
                    {{ item.first_name }} {{ item.last_name }}

                    <font-awesome-icon 
                        icon="fa-trash"
                        @click="onUserDelete(item.id)"
                        class="user-list__delete" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const user = ref({
            first_name: '',
            last_name: '',
            id: null
        })
        const userList = ref([])

        fetch('http://localhost:8002/api/users')
        .then(resp => resp.json())
        .then(resp => {
            userList.value = resp.data
        })

        const onUserSave = () => {
            const payload = {
                first_name: user.value.first_name,
                last_name: user.value.last_name,
            }

            if (user.value.id) {
                fetch(`http://localhost:8002/api/users/${user.value.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
                .then(resp => resp.json())
                .then(resp => {
                    if (!resp.error) {
                        const userIndex = userList.value.findIndex((item) => item.id === user.value.id)

                        userList.value[userIndex] = {
                            ...userList.value[userIndex],
                            ...payload,
                        }

                        user.value = {
                            first_name: "",
                            last_name: "",
                            id: null
                        }
                    }
                })
            } else {
                fetch('http://localhost:8002/api/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                })
                .then(resp => resp.json())
                .then(resp => {
                    if (!resp.error) {
                        userList.value.push({
                            ...payload,
                            id: resp.data.insertId
                        })
                        
                        user.value = {
                            first_name: '',
                            last_name: '',
                        }
                    }
                })
            }
        }

        const onUserDelete = (userId) => {
            fetch(`http://localhost:8002/api/users/${userId}`, {
                method: 'DELETE'
            })
            .then(resp => resp.json())
            .then(() => {
                userList.value = userList.value.filter((user) => user.id !== userId)
            })
        }

        const fillUserForm = (tmpUser) => {
            user.value = {...tmpUser};
        }

        return {
            userList,
            onUserSave,
            user,
            onUserDelete,
            fillUserForm
        }
    }
    
})
</script>
<style>
.user-comments {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
}

.user-comments__comments, 
.user-comments__user {
    padding: 16px;
}

.user-comments__comments {
    background: rgba(0,0,0, 0.1);
}

.user-comments__user {
    background: rgba(0,0,0, 0.05);
}
.user-comments__user form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.user-comments__user input {
    display: block;
}

.user-list {
    padding: 16px 0;
}

.user-list__user {
    padding: 2px 0;
    margin-bottom: 8px;
    cursor: pointer; 
}

.user-list__user:hover,
.user-list__user--active {
    background: rgba(33,33,144, 0.05);
}

.user-list__user:hover .user-list__delete {
    display: inline-block;
}

.user-list__delete path {
    fill: rgba(0,0,0, 0.3)
}

.user-list__delete {
    display: none;
    float: right;
    margin-right: 2px;
}
</style>