<template>
    <div class="user-comments">
        <div class="user-comments__comments"></div>
        <div class="user-comments__user">
            <form>
                <label>
                    First name

                    <input>
                </label>

                <label>
                    Last name

                    <input>
                </label>

                <div>
                    <button type="button">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    
})
</script>
<style>
.user-comments {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
}

.user-comments__comments, 
.user-comments__user {
    padding: 16px;
}

.user-comments__comments {
    background: rgba(0,0,0, 0.1);
}

.user-comments__user {
    background: rgba(0,0,0, 0.05);
}
.user-comments__user form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.user-comments__user input {
    display: block;
}
</style>