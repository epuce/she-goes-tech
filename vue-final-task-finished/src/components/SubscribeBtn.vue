<template>
  <div class="subscribe-btn-container">
    <button class="subscribe-btn">Subscribe</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
.subscribe-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.subscribe-btn {
  background-color: #278d27;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
