<template>
  <div class="main-container">
    <div>
      <OpenButton v-if="isOpenFormBtn" @click="isOpenForm = true; isOpenFormBtn=false" />
      <FormView v-if="isOpenForm" 
      @close-form="isOpenForm = false"
      
      />
    </div>

    <div>
      <UserListTable />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import FormView from "./FormView.vue";
import OpenButton from "./OpenButton.vue";
import UserListTable from "./UserListTable.vue";

export default defineComponent({
  components: {
    FormView,
    UserListTable,
    OpenButton,
  },
  setup (){
    var isOpenFormBtn = ref (true);
    var isOpenForm = ref (false)

    return {
      isOpenFormBtn,
      isOpenForm

    }
  }

});
</script>
<style>
.main-container {
  width: 100vw;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  display: grid;
  min-height: 100vh;
  grid-template-columns: 50% 50%;
}
</style>
