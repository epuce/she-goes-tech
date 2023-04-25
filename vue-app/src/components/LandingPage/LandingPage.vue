<template>
  <div class="page-wrapper">
    <Transition>
      <OpenForm v-if="isOpenForm" @open-popup="addUsername($event)" />
    </Transition>
    <OpenBtn
      name="open"
      @click="($event) => (isOpenForm = !isOpenForm)"
      type="button"
      text="Open form"
    />
    <PopupSubscribe
      v-if="isOpenPopup"
      @close-popup="(isOpenPopup = false), (isOpenForm = false)"
      :text="userName"
    />
    <DataTable @open-user="amendUser($event)" />
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
import OpenForm from "./OpenForm.vue";
import OpenBtn from "./OpenBtn.vue";
import DataTable from "./DataTable.vue";
import PopupSubscribe from "./PopupSubscribe.vue";

export default defineComponent({
  components: {
    OpenForm,
    OpenBtn,
    DataTable,
    PopupSubscribe,
  },

  setup() {
    const isOpenForm = ref(false);
    const isOpenPopup = ref(false);
    const userName = ref("");
    const selectedUserId = ref("");

    const addUsername = function (name) {
      userName.value = name;
      isOpenPopup.value = !isOpenPopup.value;
    };
    const amendUser = function (userId) {
      selectedUserId.value = userId;
    };
    // var buttonText = ref("Open form");
    return {
      isOpenForm,
      isOpenPopup,
      userName,
      addUsername,
      selectedUserId,
      amendUser,
    };
  },
});
</script>
<style>
.page-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* .form {
  position: relative;
} */
/* .button {
  position: sticky;
  top: 20px;
  right: 30px;
} */
</style>
