<template>
  <div class="button-container">
    <button class="open-button">Open Form</button>
  </div>
</template>
<script>
import {defineComponent} from "vue";
export default defineComponent({});
</script>
<style>
.button-container {
  height: 100vh;
  display: flex;
  align-items: center;
}
.open-button {
  display: inline-block;
  height: 4.7rem;
  width: 18rem;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.2rem;
  color: #fff;
  background-color: #e67e22;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
  transform: rotate(90deg) translateY(150%);
}

.open-button:hover {
  background-color: #cf711f;
}
</style>
