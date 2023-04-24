<template>
  <div
    class="user-form-container"
    :class="isFormOpen ? 'user-form--opened' : ''"
    @close-form="isFormOpen = !isFormOpen"
  >
    <div class="user-form">
      <div class="username-form-field">
        <label for="username" class="username-form-field__label"
          >Username</label
        >
        <input
          name="username"
          type="text"
          class="username-form-field__input"
          v-model="nameInput"
          :class="!isNameValid ? 'form-not-valid' : ''"
        />
      </div>
      <div class="error-message" v-if="!isNameValid">
        <p>PLEASE ENTER A VALID USERNAME</p>
      </div>
      <div class="email-form-field">
        <label for="email" class="email-form-field__label">Email</label>
        <br />
        <input
          name="email"
          type="text"
          class="email-form-field__input"
          v-model="emailInput"
          :class="!isEmailValid ? 'form-not-valid' : ''"
        />
      </div>
      <div class="error-message" v-if="!isEmailValid">
        <p>PLEASE ENTER A VALID EMAIL</p>
      </div>
      <div class="checkbox-form-field">
        <input
          id="checkbox"
          name="checkbox"
          type="checkbox"
          class="checkbox-form-field__input"
          v-model="agreeToSpecialDeals"
        />
        <label for="checkbox" class="checkbox-form-field__label"
          >Send me special deals</label
        >
        <br />
        <transition name="fade">
          <div class="select-form-field" v-if="agreeToSpecialDeals">
            <label for="select" class="select-form-field__label"
              >I'm willing to receive them every:</label
            >
            <select
              name="select"
              type="select"
              class="select-form-field__input"
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

  props: {
    user: {
    type: Object,
    default: () => ({
      username: "",
      email: "",
      special_deals: false,
      offer_cycle: ""
    })
  }
  },

  setup(props, { emit }) {
    const isFormOpen = ref(false);
    const nameInput = ref(props.user.username);
    const emailInput = ref("");
    const agreeToSpecialDeals = ref(false);
    const offerFrequency = ref("Hour");
    const isNameValid = ref(true);
    const isEmailValid = ref(true);
    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const subscriber = ref({
      username: "",
      email: "",
      special_deals: false,
      offer_cycle: "",
    });

    const openForm = () => {
      isFormOpen.value = !isFormOpen.value;
    };

    const saveForm = () => {
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
        subscriber.value = {
          username: nameInput.value,
          email: emailInput.value,
          special_deals: agreeToSpecialDeals.value,
          offer_cycle: offerFrequency.value,
        };
        emit("show-popup");
        
        if(!agreeToSpecialDeals.value) {
          subscriber.value.offer_cycle = ''
        }
        emit("save-subscriber", subscriber.value);

        nameInput.value = "";
        emailInput.value = "";
        agreeToSpecialDeals.value = false;
        offerFrequency.value = "";
      }
    };

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
      isEmailValid
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

.username-form-field__label,
.email-form-field__label,
.checkbox-form-field__label,
.select-form-field__label {
  color: white;
  font-family: sans-serif;
  font-size: small;
}

.username-form-field__input,
.email-form-field__input,
.select-form-field__input {
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

.checkbox-form-field__input {
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
