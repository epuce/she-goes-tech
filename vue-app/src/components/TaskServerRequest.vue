<template lang="">
        <div class="user-wrapper" v-for="(user) in users" :key="user.id">
            <div class="user">
            <img class="user-img" :src="user.image" @click="expandImg(user.id)">
            <div class="user-name"> {{user.firstname}} {{user.lastname}}</div>
            <div class= "user-email"> {{user.email}}</div>
        </div>
            </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup(){
        var users = ref([])
        var expandImg= function(){
            console.log("Labadiena")

        }
        fetch("https://fakerapi.it/api/v1/persons",{
            method: "GET"
        }).then(function(response){
            return response.json();
        }).then(function(returnData){
            users.value = returnData.data;
        })
        return{
           users, 
           expandImg,
        }
    }

})

</script>
<style>
.user-wrapper{
    display: flex;
    flex-direction: row;
}
.user-img{
    width:250px;
}
.user-name{
    text-align: left;
}
.user-email{
    text-align: left;
}
    
</style>