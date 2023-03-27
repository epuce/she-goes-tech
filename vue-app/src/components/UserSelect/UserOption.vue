<!-- we add the dynamic class, the logic inside is dynamic. We will have IF based on which we will apply this class or not -->
<template>
  <div
    class="user-option"
    :class="{
      'user-option--selected': user.isSelected,
    }"
  >
    <!-- Above we evaluate if  user.isSelected is true.If it is, we add the class -->
    <div class="user-option__avatar">
      <UserAvatar :avatar="user.avatar" />
    </div>
    {{ user.name }}
  </div>
</template>

<script>
import {defineComponent} from "vue";
import UserAvatar from "./UserAvatar.vue";

export default defineComponent({
  components: {UserAvatar},

  props: {
    user: {
      //we deconstruct an array, inside there's an object

      type: Object,
      required: true,
    },
  },
});
</script>

<style>
.user-option {
  border-left: 2px solid transparent;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
}
.user-option--selected {
  background: lightblue;
  border-left-color: blue;
}

.user-option__avatar {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
</style>
