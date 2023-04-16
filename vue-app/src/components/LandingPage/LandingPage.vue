<template>
  <div class="page-wrapper">
    <OpenForm v-if="isOpenForm" />
    <OpenBtn @click="($event) => (isOpenForm = !isOpenForm)" />
    <DataTable />
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
import OpenForm from "./OpenForm.vue";
import OpenBtn from "./OpenBtn.vue";
import DataTable from "./DataTable.vue";

export default defineComponent({
  components: {
    OpenForm,
    OpenBtn,
    DataTable,
  },
  setup() {
    const isOpenForm = ref(false);

    return {isOpenForm};
  },
});
</script>
<style>
.page-wrapper {
  display: flex;
  align-items: center;
}
</style>
