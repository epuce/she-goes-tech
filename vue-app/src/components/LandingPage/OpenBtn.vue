<template>
  <div class="button-container">
    <button
      :class="{
        'open-button': name === 'open',
        'subscribe-button': name === 'subscribe',
      }"
      type="type"
    >
      {{ text }}
    </button>
  </div>
</template>
<script>
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: "open",
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
  },
});
</script>
<style>
.button-container {
  height: 100vh;
  position: relative;
  display: flex;
  /* align-items: center; */
}
.open-button {
  position: absolute;
  top: 220px;
  display: inline-block;
  height: 4.5rem;
  width: 18rem;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.2rem;
  color: #fff;
  background-color: #e67e22;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
  transform: rotate(90deg) translateY(150%);
}

.open-button:hover {
  background-color: #cf711f;
}
.subscribe-button {
}
</style>
