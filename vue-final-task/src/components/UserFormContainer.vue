<template>
  <div
    class="user-form-container"
    :class="isFormOpen ? 'user-form--opened' : ''"
    @close-form="isFormOpen = !isFormOpen"
  >
    <div class="user-form">
      <div class="username-form-field">
        <label for="username-form-field" class="username-form-field_label"
          >Username</label
        >
        <input
          name="username"
          type="text"
          class="username-form-field_input"
          v-model="nameInput"
          :class="!isNameValid ? 'form-not-valid' : ''"
        />
      </div>
      <div class="error-message" v-if="!isNameValid">
        <p>PLEASE ENTER A VALID USERNAME</p>
      </div>
      <div class="email-form-field">
        <label for="email" class="email-form-field_label">Email</label>
        <br />
        <input
          name="email"
          type="text"
          class="email-form-field_input"
          v-model="emailInput"
          :class="!isEmailValid ? 'form-not-valid' : ''"
        />
      </div>
      <div class="error-message" v-if="!isEmailValid">
        <p>PLEASE ENTER A VALID EMAIL</p>
      </div>
      <div class="checkbox-form-field">
        <input
          name="checkbox"
          type="checkbox"
          class="checkbox-form-field_input"
          v-model="agreeToSpecialDeals"
        />
        <label for="checkbox" class="checkbox-form-field_label"
          >Send me special deals</label
        >
        <br />
        <transition name="fade">
          <div class="select-form-field" v-if="agreeToSpecialDeals">
            <label for="select" class="select-form-field_label"
              >I'm willing to receive them every:</label
            >
            <select
              name="select"
              type="select"
              class="select-form-field_input"
              v-model="offerFrequency"
            >
              <option value="Hour">Hour</option>
              <option value="Day">Day</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
            </select>
          </div>
        </transition>
      </div>
      <SubscribeBtn @click="saveForm" />
    </div>
    <button
      type="button"
      class="open-form-btn"
      @click="openForm()"
      :class="isFormOpen ? 'open-form-btn--opened' : ''"
    >
      <span class="open-form-btn__txt"> Open Form </span>
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, defineExpose } from "vue";
import SubscribeBtn from "./SubscribeBtn.vue";

export default defineComponent({
  components: {
    SubscribeBtn,
  },

  setup(props, { emit }) {
    var isFormOpen = ref(false);
    var nameInput = ref("");
    var emailInput = ref("");
    var agreeToSpecialDeals = ref(false);
    var offerFrequency = ref("Hour");
    var isNameValid = ref(true);
    var isEmailValid = ref(true);
    var emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var subscriber = ref({});

    function openForm() {
      isFormOpen.value = !isFormOpen.value;
    }

    function saveForm() {
      if (nameInput.value.length < 3) {
        isNameValid.value = false;
      } else {
        isNameValid.value = true;
      }

      if (!emailRegEx.test(emailInput.value)) {
        isEmailValid.value = false;
      } else {
        isEmailValid.value = true;
      }

      if (isNameValid.value && isEmailValid.value) {
        var subscriber = {
          name: nameInput.value,
          email: emailInput.value,
          specialDeals: agreeToSpecialDeals.value,
          offerCycle: offerFrequency.value,
        };
        emit("save-subscriber", subscriber);
        emit("show-popup");

        nameInput.value = "";
        emailInput.value = "";
        agreeToSpecialDeals.value = false;
        offerFrequency.value = "";
      }
    }

    defineExpose({
      openForm,
    });

    return {
      nameInput,
      emailInput,
      agreeToSpecialDeals,
      saveForm,
      isFormOpen,
      openForm,
      subscriber,
      offerFrequency,
      isNameValid,
      isEmailValid,
    };
  },
});
</script>

<style>
.user-form-container {
  max-width: 220px;
  min-width: 220px;
  background-color: #7e7b7b;
  margin-left: -220px;
  transition: margin-left 1s ease-in-out;
  padding: 10px;
  box-sizing: border-box;
}

.open-form-btn {
  background-color: darkred;
  position: fixed;
  width: 30px;
  height: 90px;
  top: 200px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px darkred;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: left 1s ease-in-out;
}

.open-form-btn--opened {
  left: 220px;
}

.open-form-btn__txt {
  transform: rotate(90deg);
  white-space: nowrap;
  font-weight: 700;
  transition: left 1s ease-in-out;
}

.user-form--opened {
  margin-left: 0;
}

.username-form-field_label,
.email-form-field_label,
.checkbox-form-field_label,
.select-form-field_label {
  color: white;
  font-family: sans-serif;
  font-size: small;
}

.username-form-field_input,
.email-form-field_input,
.select-form-field_input {
  border-radius: 5px;
  border: transparent;
  width: 100%;
  box-sizing: border-box;
}

.email-form-field,
.checkbox-form-field,
.select-form-field {
  margin-top: 10px;
}

.checkbox-form-field {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.checkbox-form-field_input {
  border-radius: 5px;
  border: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.form-not-valid {
  border: 1px solid red;
}

.error-message {
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 10px;
  font-weight: bold;
  color: #921212;
}
</style>
