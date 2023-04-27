<template>
  <div class="page__wraper">
    <Transition>
      <FormView v-if="isHidden" @save-form="saveSubscriber" />
    </Transition>
    <MyBtn
      name="open"
      type="button"
      text="Open form"
      @click="isHidden = !isHidden"
    />
    <ListView :users="userList" @deleteUser="userOut()" />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

import FormView from "./FormView.vue";
import MyBtn from "./MyBtn.vue";
import ListView from "./ListView.vue";

export default defineComponent({
  components: { FormView, MyBtn, ListView },
  setup() {
    var isHidden = ref(false);
    var userList = ref(getUserList());

    var saveSubscriber = function (user) {
      userList.value.push(user);
      localStorage.userList = JSON.stringify(userList.value);
    };

    function getUserList() {
      try {
        var userList = JSON.parse(localStorage.userList);
      } catch {
        if (!Array.isArray(userList)) {
          userList = [];
        }
      }
      return userList;
    }
    
    var userOut = function (index) {
      userList.value.splice(index, 1);
      localStorage.userList = JSON.stringify(userList.value);
    };

    return {
      userList,
      isHidden,
      saveSubscriber,
      getUserList,
      userOut,
    };
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.page__wraper {
  overflow: hidden;
  display: flex;
  align-items: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
