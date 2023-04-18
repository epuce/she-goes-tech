<template>
    <img :src="avatar" class="avatar" alt="avatar-img">
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        avatar: {
            type: String,
            required: true,
        }
    },
})
</script>

<style scoped>
.avatar {
    width: 100%;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    box-sizing: border-box;
}
</style>