<template lang="">
    <div>
       <div v-for="(user) in users" :key="user.id">
        <!-- <img :src="user.image" @click=expandingImg(i)> -->
    {{user}}
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent ({
    setup() {
        var users = ref([])

        fetch ("https://fakerapi.it/api/v1/persons", {
            method: "GET"
        }).then(function (response) {
                return response.json()
            }).then(function (returnData) {
                users.value = returnData.data

            })

        // var expandingImg = function(i) {

        // }

    return {
        users,
    }
    }
})
</script>
<style lang="">
    
</style>