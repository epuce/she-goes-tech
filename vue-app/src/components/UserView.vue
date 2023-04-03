<template>
    <div>
        <label>
            Name

            <input v-model="user.name">
        </label>
        <button @click="saveUser()">Save</button>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user) in users" :key="user.id">
                    <td>
                        <UserAvatar :avatar="user.avatar" size="32px" />
                    </td>
                    <td> {{ user.first_name }} {{ user.last_name }}</td>
                    <td>
                        <button @click="fillForm(user.id)">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import UserAvatar from './UserSelect/UserAvatar.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {
        UserAvatar,
    },
    setup() {
        var users = ref([])
        var user = ref({
            name: "",
            id: null,
        })

        fetch(
            "https://reqres.in/api/users",
            {
                method: "GET"
            }
        ).then(function(response) {
            return response.json()
        }).then(function(returnData) {
            users.value = returnData.data
        })

        var fillForm = function(userId) {
            fetch("https://reqres.in/api/users/"+userId, {
                method: "GET"
            }).then(function(response) {
                return response.json()
            }).then(function(returnData) {
                user.value = {
                    name: returnData.data.first_name,
                    id: returnData.data.id,
                }
            })
        }

        var saveUser = function() {
            fetch("https://reqres.in/api/users/"+user.value.id, {
                method: "PUT",
                body: JSON.stringify({
                    name: user.value.name
                })
            }).then(function(response) {
                return response.json()
            }).then(function(returnData) {
                console.log(returnData)
            })
        }

        return {
            users,
            fillForm,
            user,
            saveUser,
        }
    }
})
</script>
<style lang="">
    
</style>