<template lang="">
    <div class='grid-wrapper'>
        <div v-for='(user) in users' :key='user.id'>
            <div> 
                <TaskImage :task_image="user.image" @click="expandImg(i)"/>
            </div>
            <div class='user-name'> {{user.firstname}} {{user.lastname}}</div>
            <div class='user-email'> {{user.email}} </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TaskImage from './UserSelect/TaskImage.vue';
export default defineComponent ({
    components: {
        TaskImage,
    },
    setup() {
        var users = ref([])
        fetch('https://fakerapi.it/api/v1/persons', {
            method: 'GET'
        }).then(function(response) {
            return response.json()
        }).then(function(returnData) {
            users.value = returnData.data
            })

        return {
        users,
        TaskImage
        }
    }
})
</script>
<style>
.grid-wrapper {
    display: grid;
    width: 100%;
    height: 500px;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: (25%, 25%);
}

.user-name {
}
    
</style>