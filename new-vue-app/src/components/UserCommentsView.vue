
<template>
    <div class="user-comments">
        <div class="user-comments__comments">
            <div class="user-comments__users">
                <div v-for="user in userList"
                    @click="onUserSelect(user.id)"
                    :key="user.id"
                    :title="user.first_name+' '+user.last_name"
                    :class="{
                        'user-comments__user-avatar--active': comments.user_id === user.id
                    }"
                    class="user-comments__user-avatar">

                    {{ user.first_name[0] }} {{ user.last_name[0] }}
                </div>
            </div>
            <div class="user-comments__textarea-wrapper" v-if="comments.user_id">
                <textarea v-model="comments.data" class="user-comments__textarea"></textarea>
                <button type="button" v-if="comments.data.length > 0" @click="onCommentSave()">Save</button>
            </div>
            <div class="comment-list">
                <div v-for="item in comments.list" :key="item.id">
                {{ item.comments }}
                </div>
            </div>
        </div>
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

                <label>
                    Email

                    <input v-model="user.email">
                </label>

                <label>
                    Cycle

                    <input v-model="user.cycle">
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
                    
                    {{ item.first_name }} {{ item.last_name }} {{ item.email }} {{ item.cycle }}

                    <img src="../assets/Trash-Icon-SVG-psofds.svg" 
                        @click.stop="onUserDelete(item.id)"
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
        const comments = ref({
            user_id: null,
            data: '',
            list: []
        })

        const user = ref({
            first_name: '',
            last_name: '',
            cycle: '',
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
                email: user.value.email,
                cycle: user.value.cycle
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
                            email: "",
                            cycle: "",
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
                            email: '',
                            cycle: ''
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

        const onUserSelect = (userId) => {
            comments.value.user_id = userId
            fetch(`http://localhost:8002/api/comments?user_id=${userId}`)
            .then(resp => resp.json())
            .then(resp => {
                comments.value.list = resp.data
            })
        }

        const onCommentSave = () => {
            const payload = {
                comments: comments.value.data,
                user_id: comments.value.user_id
            }
            fetch(`http://localhost:8002/api/comments`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })
            .then(resp => resp.json())
            .then(resp => {
                if (!resp.error) {
                    comments.value.list.push({
                        ...payload,
                        id: resp.data.insertId
                    })
                }
            })
        }

        return {
            userList,
            onUserSave,
            user,
            onUserDelete,
            fillUserForm,
            onUserSelect,
            comments,
            onCommentSave
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
    height: 18px;
}

.user-comments__users {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.user-comments__user-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
}

.user-comments__user-avatar--active {
    background: rgba(0,0,100, 0.2);
}

.user-comments__textarea {
    margin-top: 16px;
    width: 100%;
    height: 100px;
    resize: none;
}

.user-comments__textarea-wrapper {
    position: relative;
}

.user-comments__textarea-wrapper button {
    position: absolute;
    right: 8px;
    bottom: 8px;
}
</style>