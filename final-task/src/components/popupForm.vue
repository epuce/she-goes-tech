<template>
  <div class="popup-wrapper">
    <div class="popup-form">
      <form @submit.prevent="addClient">
        <div class="error-msg" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </div>
        <label >Name </label
        ><input type="text" v-model="newClient" />
        <label for="new-email">Email</label
        ><input id="new-email" type="email" v-model="newEmail" />
        <label for="new-date">Select the date</label
        ><input id="new-date" type="date" v-model="newDate" />
        <label for="new-instructor"
          ><input
            id="new-instructor"
            type="checkbox"
            v-model="checkboxClick"
            class="input-checkbox"
          />Book a surf Instructor
        </label>

        <select
          :class="{
            'popup-form__select--hidden': !checkboxClick,
            'popup-form__select--visible': checkboxClick,
          }"
          name="instructor"
          v-model="newInstructor"
        >
          <option value="">Please select instructor</option>
          <option class="select-option" value="Wayan">Wayan</option>
          <option class="select-option" value="David">David</option>
          <option class="select-option" value="John">John</option>
        </select>
        <input
          class="popup-form_add-btn"
          type="submit"
          value="Add a new entry"
        />
      </form>
      <button class="btn_close" @click="onClose()">Close</button>
    </div>
  </div>
  <!-- <PopupSubmitted
  v-if="isSubmitOpen"/> -->
</template>

<script>
import { defineComponent, ref } from "vue";
// import PopupSubmitted from "./popupSubmitted.vue";

export default defineComponent({
  //   components: {
  //     PopupSubmitted,
  //   },

  setup(props, { emit }) {
    var onClose = function () {
      emit("close-popup");
    };
    // let isSubmitOpen = ref('');

    const newClient = ref("");
    const newEmail = ref("");
    const newDate = ref("");
    const checkboxClick = ref(false);
    const newInstructor = ref("");
    const errors = ref([]);

    function isValidForm() {
      errors.value = [];
      if (newClient.value.trim() === "") {
        console.log("please enter name");
        errors.value.push("please enter name");
      }
      if (newEmail.value.trim() === "") {
        console.log("please enter email");
        errors.value.push("please enter email");
      }
      if (checkboxClick.value && newInstructor.value.trim() === "") {
        console.log("please select the instructor");
        errors.value.push("please select the instructor");
      }
      if (newDate.value.trim() === "") {
        console.log("please select a date");
        errors.value.push("please select a date");
      }
      if (errors.value.length == 0) {
        console.log("valid");
        return true;
      } else {
        console.log("invalid", errors.value.length, errors.value);
        return false;
      }
    }

    function addClient() {
      if (!isValidForm()) {
        return;
      }
      //   isSubmitOpen.value = true;

      let newBooking = {
        clientName: newClient.value,
        clientEmail: newEmail.value,
        clientDate: newDate.value,
        wasClicked: checkboxClick.value,
        clientInstructor: checkboxClick.value ? newInstructor.value : "",
      };

      emit("new-booking", newBooking);
      onClose();

      newClient.value = "";
      newEmail.value = "";
      newDate.value = "";
      checkboxClick.value = false;
      newInstructor.value = "";
      // isSubmitOpen.value = true;
      alert("New entry was successful");
    }

    // var checkboxClick = ref(false);
    // let formName = ref("");
    // let error = ref("");
    // var validateInput = () => {
    //   error.value = formName.value === "" ? "The Input field is required" : "";
    //   // with computed() return input.value === "" ? "Name field is required!" : "";
    // };

    return {
      onClose,
      //can i just return new Booking as an object instead of all these values separately?
      newClient,
      newEmail,
      newDate,
      checkboxClick,
      newInstructor,
      addClient,
      isValidForm,
      errors,
      // isSubmitOpen,
    };
  },
});
</script>

<style>
.popup-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}
.popup-form {
  padding: 32px;
  width: 70%;
  background: #cad2c5;
  position: fixed;
}
form {
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

input {
  font-weight: bold;
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 5px 5px;
}
.select-options:focus {
  background-color: #354f52 !important;
}

label {
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  float: left;
}

.popup-form__select--hidden {
  display: none;
}

.popup-form__select--visible {
  width: 100%;
  border-radius: 5px;
  padding: 5px 5px;
}

.popup-form_add-btn {
  background-color: #354f52;
  text-align: center;
  color: white;
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border-radius: 4px;
}

.btn_close {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #84a98c;
  border: none;
  border-radius: 4px;
  padding: 10px;
}
.error-msg {
  color: red;
  text-align: left;
  font-size: small;
}
.input-checkbox {
  display: inline-block;
  width: initial;
  margin-right: 5px;
}
</style>
