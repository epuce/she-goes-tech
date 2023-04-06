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
.username-input_lable {
    color: white;
    font-family: sans-serif;
    font-size: small;
}

.username-input_input {
    border-radius: 5px;
    border: transparent;
    width: 100%;
    box-sizing: border-box;
}
</style>