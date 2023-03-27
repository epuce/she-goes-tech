
<!-- this is for the user avatar -->

<template>
    <img :src="avatar" class="user-avatar" alt="user avatar"/>
    <!--  a column : enas we are reading this from js part, here from props (from app.vue?) -->
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
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
    box-sizing:border-box;
    /*box sizing menas that elements with inludes padding and border, except for margin*/
}
</style>