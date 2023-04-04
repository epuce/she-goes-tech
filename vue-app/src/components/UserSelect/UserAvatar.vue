<template>
    <img :src="avatar" class="user-avatar" alt="user avatar"/>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent ({
    props: {
        avatar: {
            type: String,
            require: true,
     },
     size: {
        type: String,
        required: false,
        default: '100%',
     }
    }
})
</script>

<style>
.user-avatar{
    width: v-bind(size);
    height: v-bind(size);
    border-radius: 50%;
    border: 2px solid white;
    box-sizing: border-box;
}
</style>