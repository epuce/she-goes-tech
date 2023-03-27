<template>
    <div 
        class="user-option" 
        :class="{
            'user-option--selected': user.isSelected
        }"
        >
        <div class="user-option__avatar"></div>

        {{ user.name }}
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        user: {
            type: Object,
            required: true,
        }
    }
})
</script>

<style>
.user-option {
    border-left: 2px solid transparent;
    display: flex;
    align-items: center;
    padding: 6px 12px;
}

.user-option--selected {
    background: lightblue;
    border-left-color: blue;
}
</style>