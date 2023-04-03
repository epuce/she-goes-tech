<!-- this is specificaly for each user -->

<template>
  <div
    class="user-option"
    :class="{
      /*the logic inside the value of :class is dynamic and can change. some kind of if will apply or remove the class*/
      'user-option--selected': user.isSelected,
      // we apply this class, if the user.isSelected is true
    }"
  >
    <div class="user-option_avatar">
      <UserAvatar :avatar="user.avatar" />
      <!-- we get the :avatar from useAvatar and we pass in the data from app.vue as prop -->
    </div>
    {{ user.name }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import UserAvatar from "./UserAvatar.vue";

export default defineComponent({
  props: {
    /*again the users are passed in from app.vue, therefore we add them as props*/
    user: {
      type: Object /*here the type is Object, because user list in an array of objects*/,
      required: true,
    },
  },
  components: {
    UserAvatar,
  },
});
</script>

<style>
.user-option {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-left: 2px solid transparent;
  cursor: pointer;
}

.user-option--selected {
  background: lightblue;
  border-left-color: blue;
}

.user-option_avatar {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
/*we specify the styleing in the parent thing, the child elements (in this case the avatar compnent) has only the core logic*/
</style>
