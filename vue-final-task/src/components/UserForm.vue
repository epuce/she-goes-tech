<!-- CSS OK -->

<template>
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
      />
    </div>
    <div class="email-form-field">
      <label for="email" class="email-form-field_label">Email</label>
      <br />
      <input
        name="email"
        type="text"
        class="email-form-field_input"
        v-model="nameInput"
      />
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
          <select name="select" type="select" class="select-form-field_input">
            <option value="hour">Hour</option>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, defineExpose } from "vue";

export default defineComponent({
  components: {},

  setup() {
    var nameInput = ref("");
    var emailInput = ref("");
    var agreeToSpecialDeals = ref(false);
    var isFormValid = ref(true);
    var emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function saveForm() {
      if (nameInput.value.length < 3) {
        isFormValid.value = false;
      } else {
        isFormValid.value = true;
      }

      if (!emailRegEx.test(emailInput.value)) {
        isFormValid.value = false;
      } else {
        isFormValid.value = true;
      }

      if (isFormValid.value) {
        var user = {
          name: nameInput.value,
          email: emailInput.value,
        };
        return user;
      }
    }

    defineExpose({ 
      saveForm
    })

    return {
      nameInput,
      emailInput,
      agreeToSpecialDeals,
      isFormValid,
      saveForm,
    };
  },
});
</script>

<style>
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
</style>
