<template>
  <div class="page-wrapper">
    <Transition>
      <OpenForm
        v-if="isOpenForm"
        @open-popup="addUsername($event)"
        :userId="selectedUserId"
        @update-data="updateTable($event)"
      />
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
    <DataTable
      :testProp="trigger"
      @open-user="amendUser($event)"
      :update="updateUser"
    />
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
    const selectedUserId = ref(0);
    const trigger = ref(false);
    const updateUser = ref(false);

    const addUsername = function (name) {
      userName.value = name;
      isOpenPopup.value = !isOpenPopup.value;
      trigger.value = !trigger.value;
    };
    const amendUser = function (id) {
      isOpenForm.value = true;
      selectedUserId.value = id;
    };
    const updateTable = function () {
      updateUser.value = !updateUser.value;
    };

    return {
      isOpenForm,
      isOpenPopup,
      userName,
      addUsername,
      selectedUserId,
      amendUser,
      trigger,
      updateTable,
      updateUser,
    };
  },
});
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #45260a;
  font-size: 62.5%;
}

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
</style>
