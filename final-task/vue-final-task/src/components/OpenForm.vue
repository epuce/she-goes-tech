<template>
  <div class="open-form-button">
    <button type="button">Open Form</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style>
.open-form-button {
    padding-top: 160px;
}
.open-form-button button {
  transform: rotate(90deg);
  height: 40px;
  width: 100px;
  text-align: center;
  background-color: brown;
  border: none;
}
</style>
