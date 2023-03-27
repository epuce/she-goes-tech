<template> 
    <div class="user-option" 
        :class="{
        'user-option--selected': user.isSelected
    }">
        <div class="user-option__avatar">
            <UserAvatar :avatar="user.avatar" />
        </div>

        {{ user.name }}
    </div>
</template>

<script> 
import { defineComponent } from 'vue';
import UserAvatar from './UserAvatar.vue';

export default defineComponent({
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    components: { UserAvatar }
})

</script>


<style> 
.user-option {
    border-left: 2px solid transparent;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    cursor: pointer;
}

.user-option--selected {
    background: lightblue;
    border-left-color: blue;
}

.user-option__avatar {
    width: 32px;
    height: 32px;
    margin-right: 12px;
}
</style>