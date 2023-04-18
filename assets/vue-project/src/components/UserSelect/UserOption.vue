<template>
    <div class="user-option" :class="{'user-option--selected': user.isSelected}">
        <div class="user-option__user">
            <div class="user-option__avatar">
                <UserAvatar :avatar="user.avatar"/>
            </div>

            {{  user.name }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from './UserAvatar.vue';


export default defineComponent({
    components:{
        UserAvatar,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
})
</script>

<style scoped>

.user-option {
    border-left: 2px solid transparent;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    cursor: pointer;
}

.user-option__user {
    display: flex;
    align-items: center;
}
.user-option__avatar {
    height: 32px;
    width: 32px;
    margin-right: 12px;
}

.user-option--selected {
    border-left-color: blue;
    background: lightblue;
}
</style>