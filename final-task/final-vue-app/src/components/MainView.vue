<template>
  <div>
    <MainVisuals />
    <!-- <ParticipantTable @fillForm="fillForm" :participant-list="participantList"/> -->
    <ParticipantTable :participant-list="participantList" @delete-participant="deleteParticipant" />
    <MainFooter />
    <button class="btn__signup" @click="showForm = true">Sign up form</button>
    <SignupPopup :user="participant" v-if="showForm" @close-signup-popup="showForm = false" @addToList="addToList" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SignupPopup from "./SignupPopup.vue"
import MainVisuals from "./MainVisuals.vue"
import MainFooter from "./MainFooter.vue"
import ParticipantTable from "./ParticipantTable.vue"

export default defineComponent({
  components: {
    SignupPopup,
    MainVisuals,
    MainFooter,
    ParticipantTable,
  },

  setup() {
    var showForm = ref(false)
    var participant = ref('')
    var participantList = ref([])

    // var fillForm = (user) => {
    //   participant.value = user
    // }

    fetch('http://localhost:8002/api/participants')
      .then(resp => resp.json())
      .then(resp => {
        participantList.value = resp.data
      })

    var addToList = function (payload) {
      participantList.value.push(payload)
    }

    var deleteParticipant = function (participantId) {
      participantList.value = participantList.value.filter((participant) => participant.id !== participantId)
    }

    return {
      showForm,
      // fillForm,
      participant,
      addToList,
      participantList,
      deleteParticipant
    }
  },

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