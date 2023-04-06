<template>
    <div class="checkbox-input">
        <input name="checkbox" type="checkbox" class="checkbox-input_input"  v-model="toggle"
  :true-value="showSelect">
        <lable for="checkbox" class="checkbox-input_lable">Send me special deals</lable>
        <br/>
        <div v-if="showSelect === true">
        <lable for="select" class="select-input_lable">I'm willing to receive them every:</lable>
        <select name="select" type="select" class="select-input_input">
            <option value="hour">Hour</option>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
        </select>
    </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style>
.checkbox-input {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
}

.checkbox-input_lable,.select-input_lable  {
    color: white;
    font-family: sans-serif;
    font-size: small;
}

.checkbox-input_input, .select-input_input {
    border-radius: 5px;
    border: transparent;
}

.select-input_lable {
    margin-top: 10px;
    width: 100%;
}

.select-input_input {
    width: 100%;
    margin-top: 3px;
}
</style>