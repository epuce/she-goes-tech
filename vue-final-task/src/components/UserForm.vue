<template>
  <div class="user-form-container" >
    <UserNameFormField/>
    <EmailFormField/>
    <CheckboxFormField/>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import UserNameFormField from "./UserNameFormField.vue";
import EmailFormField from "./EmailFormField.vue";
import CheckboxFormField from "./CheckboxFormField.vue"
export default defineComponent({
    components: {
    UserNameFormField,
    EmailFormField,
    CheckboxFormField
}
});
</script>
<style>
.user-form-container {
  max-width: 220px;
  min-width: 220px;
  height: 100%;
  background-color: #7e7b7b;
  margin-left: -220px;
  transition: margin-left 1s ease-in-out;
  padding: 10px;
  box-sizing: border-box;
}


</style>
