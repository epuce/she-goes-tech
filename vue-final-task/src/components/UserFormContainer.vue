<!-- CSS AND JS OK, DONE -->

<template>
  <div class="user-form-container">
    <UserForm />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import UserForm from "./UserForm.vue";

export default defineComponent({
  components: {
    UserForm,
  },
});
</script>

<style>
.user-form-container {
  max-width: 220px;
  min-width: 220px;
  background-color: #7e7b7b;
  margin-left: -220px;
  transition: margin-left 1s ease-in-out;
  padding: 10px;
  box-sizing: border-box;
}
</style>
