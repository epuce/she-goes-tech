<template>
    <div>
        <lable>
            Name
            <input v-model="user.name">
        </lable>
        <button @click="saveUser()" :disabled="isSavedDisabled">Save</button>
        <!-- by having displaed atribute, we don't perform the save, when it is not necessary -->
        <table>
            <thead>
                <tr>
                    <th></th>
                    <!-- row for the avatar -->
                    <th>Name</th>
                    <!-- row for the name -->
                </tr>
            </thead>
            <tbody>
                <!-- we create a loop that will loop over the data that we received (fetched) -->
                <tr v-for="(user) in users" :key="user.id">
                    <td>
                        <UserAvatar :avatar="user.avatar" size="32px"/>
                        <!-- we import user avatar from the user avatar component that we made ourselves and set it equal to the user.avatar from the fetched data
                        and we pass in the size as a prop-->
                    </td>
                    <td>{{ user.first_name }} {{ user.last_name }}</td>
                    <!-- we get the keywords first_name and last_name from the API response (we can see that in DEV tools, under network, under fetched data) -->
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
import {defineComponent, ref} from 'vue';
import UserAvatar from './UserSelect/UserAvatar.vue';

export default defineComponent({
    components: { 
        UserAvatar 
    },
    setup() {
        var users = ref([]);
        /* we create an empty user list.
        we use ref setup, because it is a dynamic data that will change when we loop over the fetched user list*/
        
        var user = ref({
            name: "",
            id:null,
        })

        var isSavedDisabled = ref(false)
        
        /*fetch is a built in function. first paratmeter is an url and the second is object. we are retreiveing the information from a public url.
        the urls ar called endpoints. when we ask for data, those are called API calls (API enpoints return only data(no fonts, pictures etc)
        second porameters is a method. methods are written in capital letters*/
        fetch("https://reqres.in/api/users", {
            method: "GET"
        }).then(function (response) {
            /*when the response is returned, then we parse it (we return it as an object)*/
            return response.json();
        }).then(function (returnData) {
            users.value = returnData.data;
            /*we return the data that we need from the object (we can see that we need the data key from DEV tools*/
        });

        var fillForm = function(userId){
            fetch("https://reqres.in/api/users/"+userId,{
                method: "GET"
                /*GET is default method and technically we could skip specifying it*/
            }).then(function(response){
                return response.json()
            }).then (function(returnData){
                user.value = {
                    name: returnData.data.first_name,
                    id: returnData.data.id
                }
            })
        };

        var saveUser = function() {
            isSavedDisabled.value = true;
            /*we enable the save function when starting the save function*/
            
            if (user.value.id) {
                /*if ID exists, we perfomr a PUT method*/
               fetch("https://reqres.in/api/users/"+user.value.id, {
                method: "PUT",
                body: JSON.stringify({
                    name: user.value.name
                })
                /*update*/
            }).then(function(response){
                return response.json()
            }).then(function(){
                
                /*to clear form after save*/
                user.value = {
                    id: null,
                    name: ''
                }

                isSavedDisabled.value = false;
                /*we disable the button while saving*/
            }) 
            } else {
                /*if the user doesn't exist (user.value.id is false), then we create a new user*/
                fetch("https://reqres.in/api/users", {
                    method: "POST",
                    body: JSON.stringify({
                        name: user.value.name
                    })
                }).then(function(response){
                    return response.json()
                }).then(function(){
                    user.value.name = ''
                    isSavedDisabled.value = false
                })
            }
            
        };

        var deleteUser = function(userId) {
            fetch("https://reqres.in/api/users/"+userId, {
                method: "DELETE"
            }).then(function(response){
                return response.json()
            }).then (function(returnData){
                console.log(returnData)
            })
        }

        return {
            users,
            fillForm,
            user,
            saveUser,
            isSavedDisabled,
            deleteUser
        };
    }
    
})
</script>
<style>
    
</style>