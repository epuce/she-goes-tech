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
  width: 200px;
  height: 100%;
  background-color: darkgray;
  position: fixed;
  /* margin-left: -200px; */
  margin-left: 0;
  transition: margin-left 1s ease-in-out;
}


</style>
