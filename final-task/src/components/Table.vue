<template>
    <div>
        <table class="userTable">
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Surname </th>
                    <th> Email </th>
                    <th> Address </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">

                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.surname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address }}</td>
                    <td>
                        <button class="deleteBtn" @click="deleteUser(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default {
    data() {
        return {
            users: JSON.parse(localStorage.getItem('users')) || [],

        };
    },
    methods: {
        deleteUser(index) {
            var users = JSON.parse(localStorage.getItem('users')) || [];
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users));
            this.users = JSON.parse(localStorage.getItem('users')) || [];
        },
    },
};

</script>

<style>
.userTable {
    border: 1px solid #333;
    border-collapse: collapse;
    width: 60%;
    margin: 50px 20px;
    color: #333;
    font-family: sans-serif;
}

.userTable th {
    background-color: #555;
    color: #fff;
    padding: 8px;
}

.userTable td {
    border: 1px solid #333;
    padding: 8px;
    text-align: center;
}

.userTable td:first-child {
    font-weight: bold;
}

.deleteBtn {
    background-color: #f44336;
    border: none;
    color: #fff;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 5px;
}

.userTable button:hover {
    background-color: #c62828;
}
</style>

