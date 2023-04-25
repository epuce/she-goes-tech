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
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">

                    <td>{{ user.name }}</td>
                    <td>{{ user.urname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address }}</td>
                    <td>
                        <button @click="deleteUser(index)">Delete</button>
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
            users: [],
            address: '',
            name: '',
            surname: '',
            email: '',
            index: '',

        };
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
}
</style>

