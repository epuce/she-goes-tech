<template>
    <UserSelect :users="userList" />
</template>

<script>
import { defineComponent } from 'vue';
import UserSelect from './UserSelect/UserSelect.vue';

export default defineComponent({
    components: {
        UserSelect
    },
    setup() {
        const userList = [
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Jack Mix',
                isSelected: true
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Jim Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
            {
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                name: 'Andy Mix',
                isSelected: false
            },
        ];

        return {
            userList
        }
    }
})
</script>