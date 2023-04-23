<template>
  <div>
    <MainVisuals />
    <!-- <FrontTable/> -->
    <ParticipantTable />
    <!-- <MainFooter/> -->
    <button class="btn__signup" @click="showForm = true">Sign up form</button>
    <SignupPopup v-if="showForm" @close-signup-popup="showForm = false" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SignupPopup from "./SignupPopup.vue"
import MainVisuals from "./MainVisuals.vue"
// import MainFooter from "./MainFooter.vue"
import ParticipantTable from "./ParticipantTable.vue"

export default defineComponent({
  components: {
    SignupPopup,
    MainVisuals,
    // MainFooter,
    ParticipantTable,
  },
  setup() {
    var showForm = ref(false) // True to show form all the time
    return {
      showForm,
    }
  }
})
</script>

<style>
.btn__signup {
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 20px;
  background-color: #444442;
  color: white;
  font-size: larger;
  border-radius: 8px;
  box-shadow: 0 0 5px grey;
  border: 1px solid #f6f4f3;
  margin: 0;
  cursor: pointer;
}

.btn__signup:hover {
  background-color: #2a2a29;
}
</style>