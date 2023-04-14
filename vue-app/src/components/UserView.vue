<template>
<div>
    <label>
        Name
        <input v-model="user.name">
    </label>

    <button @click="saveUser()" :disabled="isSaveDisabled">Save</button>

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
                    <UserAvatar :avatar="user.avatar" size="32px"/>
                </td>
                <td>{{ user.first_name }} {{ user.last_name }}</td>
                <td>
                    <button @click="fillForm(user.id)">Edit</button>
                </td>
                <td>
                    <button @click="deleteUser(user.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
import { defineComponent, ref } from 'vue';
import UserAvatar from './UserSelectVaida/UserAvatar.vue';
export default defineComponent({
    setup() {
        var isSaveDisabled=ref(false);
        var users = ref([]);
        var user = ref({
            name:"",
            id: null
        });

        fetch("https://reqres.in/api/users", {
            method: "GET"
        }).then(function (response) {
            return response.json();
        }).then(function (returnData) {
            users.value = returnData.data;
        });
        var fillForm = function(userId){
            fetch("https://reqres.in/api/users/" + userId,{
                method:"GET"
            }).then(function(response){
                return response.json()
            }).then(function(returnData){
                user.value = {
                    name: returnData.data.first_name,
                    id: returnData.data.id,
                }
            })
        }
        var saveUser = function(){
            isSaveDisabled.value = true;
            if(user.value.id){            
            fetch("https://reqres.in/api/users/" + user.value.id, {
            method:"PUT",
            body: JSON.stringify({
                name: user.value.name,
            })
            }).then(function(response){
                return response.json()
            }).then(function(){
                user.value={
                    id: null,
                    name:''
                }
                isSaveDisabled.value = false;
            })
        }else{
            fetch('https://reqres.in/api/users', {
                method: "POST",
                body: JSON.stringify({
                    name: user.value.name
                })
            }).then(function(response){
                return response.json;
            }).then(function(){
                user.value.name =''
                isSaveDisabled = false

            })
        }
        }
        var deleteUser = function(userId){
            fetch("https://reqres.in/api/users/" + userId,{
                method: "DELETE"
            }).then(function(response){
                return response.json()
            }).then(function(returnData){
                console.log(returnData)
            })
        }
        return {
            users,
            fillForm, 
            user,
            saveUser,
            isSaveDisabled, 
            deleteUser
        };
    },
    components: { UserAvatar }
})
</script>

<style>
</style>