<template>
    <div class="checkbox-input">
        <lable for="checkbox" class="check-input_lable">Email</lable>
        <input name="checkbox" type="checkbox" class="checkbox-input_input">
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style>
.checkbox-input{
margin: 10px;
}

.checkbox-input_lable {
    color: white;
}

.checkbox-input_input {
    border-radius: 5px;
    border: transparent;
}
</style>