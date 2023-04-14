<template>
    <div class="user-comments">
        <div class="user-comments__comments"></div>
        <div class="user-comments__user">
            <form>
                <label>
                    First name

                    <input v-modal="user.first_name">
                </label>

                <label>
                    Last name

                    <input v-modal="user.last_name">
                </label>

                <div>
                    <button type="button" @click="onUserSave()">Save</button>
                </div>
            </form>
            <div class="user-list">
                <div v-for="user in userList" :key="user.id" class="user-list__user">
                    {{ user.first_name }} {{ user.last_name }}
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
            id: null,

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

            fetch('http://localhost:8002/api/users', {
                method: "POST",
                body: JSON.stringify(payload),
            })
            .then(resp => resp.json())
            .then(resp => {
                if(!resp.error) {
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


        return {
            userList,
            onUserSave,
            user,
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
    background: rgba(0, 0, 0, 0.1);
}

.user-comments__user {
    background: rgba(0, 0, 0, 0.05);
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
    margin-bottom: 8px;
    cursor: pointer;
}

.user-list__user:hover {
    background-color: rgba(33, 33, 114, 0.05);
}
</style>