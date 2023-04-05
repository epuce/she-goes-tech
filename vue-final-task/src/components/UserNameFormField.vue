<template>
    <div class="username-input">
        <lable for="username" class="username-input_lable">Username</lable>
        <input name="username" type="text" class="username-input_input">
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style>
.username-input{
margin: 10px;
}

.username-input_lable {
    color: white;
}

.username-input_input {
    border-radius: 5px;
    border: transparent;
}
</style>