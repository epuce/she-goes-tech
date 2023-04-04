<template lang="">
    <div class="gallery-wrapper">
        <div class="user-card" v-for="(user, index) in users" :key="user.id">
            <div class="user-card__picture">
                <img :src="user.image" alt="user image" 
                    :class="{
                        expanded: expanded
                    }"
                    @click="expanded = true"
                >
            </div>
            <div class="user-card__name"> {{user.firstname}} {{user.lastname}} </div>
            <div class="user-card__email"> {{user.email}} </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent ({
    setup() {
        var users = ref([])
        var size = ref('250px')
        var expanded = false

        fetch('https://fakerapi.it/api/v1/persons', {
            method: 'GET'
        }).then(function(response){
            return response.json()
        }).then(function(returnData){
            users.value = returnData.data
        })

        // var imgResize = function(index) {
        //     // if (usersId === index)
        //     console.log(index)
        //     console.log(usersId)
        //     size.value = '500px'
        // }

        return {
            users,
            size,
            expanded,
        }
    }
})
</script>
<style >
.gallery-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}

.user-card__picture img {
    width: v-bind(size);
    box-sizing: border-box;
    cursor: pointer;
}
.expanded {
    width: 500px;
}
.user-card__name {
    font-weight: bold;
}

.user-card__email {
    font-size: smaller;
}
</style>