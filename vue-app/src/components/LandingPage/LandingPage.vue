<template>
  <div class="page-wrapper">
    <Transition>
      <OpenForm
        v-if="isOpenForm"
        @open-popup="($event) => (isOpenPopup = true)"
      />
    </Transition>
    <OpenBtn
      name="open"
      @click="($event) => (isOpenForm = !isOpenForm)"
      type="button"
      text="Open form"
    />

    <PopupSubscribe v-if="isOpenPopup" @close-popup="isOpenPopup = false" />
    <DataTable />
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
    var isOpenPopup = ref(false);
    // var buttonText = ref("Open form");
    return {isOpenForm, isOpenPopup};
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
