<template lang="">
    <div>
        task server request
<table>
    <tbody>
<tr v-for="user in users" :key="user.id">
    <td>{{user.image}}</td>
    <td>{{user.firstname}} {{user.lastname}}</td>
    <td>{{user.email}}</td>
</tr>
      

    </tbody>
</table>

    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    
    setup() {
        var users = ref([]);
        var user = ref({
            name: "",
            email: "",
            image: "",
        })

        fetch(
            "https://fakerapi.it/api/v1/persons", {
                method: "GET"
            }
        ).then(function(response){
            return response.json()
        }).then(function(returnData){
            users.value = returnData.data 
        })

        return {
            users,
            user
        }

    }


})
</script>
<style lang="">
    
</style>