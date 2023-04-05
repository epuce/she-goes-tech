<template>
    <div class="email-input">
        <lable for="email" class="email-input_lable">Email</lable>
        <input name="email" type="text" class="email-input_input">
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style>
.email-input{
margin: 10px;
}

.email-input_lable {
    color: white;
}

.email-input_input {
    border-radius: 5px;
    border: transparent;
}
</style>