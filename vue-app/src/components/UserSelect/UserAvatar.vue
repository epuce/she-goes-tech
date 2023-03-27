<template>
 <img :src="avatar" class="user-avatar" alt="user avatar" />

</template>

<script>
import { defineComponent } from 'vue';



export default defineComponent ({
    props: {
        avatar: {
            type: String,
            required: true,
        }
    }
})

</script>

<style>

.user-avatar {
    width: 100%;
    border-radius: 50%;
    border: 2px solid white;
    box-sizing: border-box;
    /* everything what's inside the parent is calculated */
}

</style>