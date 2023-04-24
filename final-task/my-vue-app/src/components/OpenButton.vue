<template>
  <div>
    <button type="button" class="open-form-button">Open Form</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  
});
</script>
<style>
.open-form-button {
  position: relative;
  top: 100px;
  width: 200px;
  height: 60px;
  font-weight: 700;
  font-size: 1.2rem;
  background: #514b4c;
  border: none;
  border-radius: 30px;
  color: #f4f1f1;
  cursor: pointer;
}

.open-form-button:hover {
  text-shadow: 0 0 5px #e655e1;
  transform: translateY(-0.15em);
  transition: 0.2s;
}
</style>
