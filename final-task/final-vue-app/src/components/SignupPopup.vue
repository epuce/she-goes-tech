<template>
  <div class="popup__wrapper">
    <div class="popup">
      <div class="signup__wrapper">
        <alert show dismissible variant="danger" v-if="errors.length > 0" class="validation-error__wrapper">
          <div v-for="error in errors" :key="error" class="validation-error__alert">
            {{ error }}
          </div>
        </alert>
        <h2>Join a class:</h2>
        <form @submit.prevent="submitForm" class="signup-form">
          <label>First name:

            <input id="firstName" v-model="firstName" type="text" name="firstName"
              :class="{ 'validation-error__input': !firstName && showError }" /><br />
          </label>

          <label>Last name:

            <!-- <input id="lastName" v-model="lastName" type="text" name="lastName" :class="!lastName ? 'validation-error__input' : ''"/><br /> -->
            <!-- <input id="lastName" v-model="lastName" type="text" name="lastName" :class="{ 'validation-error__input': showError}"/><br /> -->
            <input id="lastName" v-model="lastName" type="text" name="lastName"
              :class="{ 'validation-error__input': !lastName && showError }" /><br />

          </label>

          <label>Email:

            <input type="email" name="email" v-model="email"
              :class="{ 'validation-error__input': !email && showError }" /><br />
          </label>

          <label>Class type:
            <br>
            <select>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select><br />
          </label>

          <label>Date:
            <br>
            <input type="date" name="date" min="2023-04-27" max="2023-05-31" />
            <!-- can we show only a limited amount of days?  is there a prettier solution in VUE or other -->
          </label>

          <label>
            <input type="checkbox" name="checkbox" v-model="checked" @click="showPhone = true" />
            Send a reminder

          </label>

          <label v-if="checked">Phone:
            <input type="tel" name="phone" /><br>
          </label>

          <button class="btn__submit" @click="submitForm" type="button">Submit</button>
          <!-- <button class="btn__submit"  @click="showSuccess = true" type="button">Submit</button> -->
        </form>
      </div>

      <SuccessPopup v-if="showSuccess" @close-success-popup="showSuccess = false" />
      <button class="btn__close" @click="onClose()">X</button>

    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import SuccessPopup from "./SuccessPopup.vue"

export default defineComponent({
  components: {
    SuccessPopup,
  },
  // props: {
  //   text: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data() {
    return {
      checked: false,
      errors: [],
      firstName: '',
      lastName: '',
      email: '',
      showValidation: false,
    }
  },

  methods: {
    submitForm() {
      this.errors = [];
      if (!this.firstName) {
        this.errors.push('First name is required');
      }
      if (!this.lastName) {
        this.errors.push('Last name is required');
        this.showError = true
      }
      if (!this.email) {
        this.errors.push('Email is required');
      } else {
        var emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegEx.test(this.email)) {
          this.errors.push("Invalid email address");
        } 
      }
      if (this.errors.length === 0 && this.firstName && this.lastName && this.email) {
        this.showError = false
        this.showSuccess = true
      }
    },

  },

  setup(props, { emit }) {
    var onClose = function () {
      emit("close-signup-popup");
    };
    var showSuccess = ref(false)
    var showPhone = ref(false)

    return {
      onClose,
      showSuccess,
      showPhone,
    };
  },


});
</script>
<style>
.popup__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  height: 100%;
  justify-content: right;
  backdrop-filter: blur(3px);
}

.popup {
  /* padding: 40px; */
  width: 30%;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

}


.btn__close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: transparent;
  /* border-radius: 4px; */
  padding: 5px;
}

.btn__close:hover {
  color: darkred;
}

.signup__wrapper {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  padding: 10%;
}

.signup__wrapper h2 {
  margin-bottom: 20px;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.signup-form input,
select {
  padding: 5px;
}


.signup-form select {
  display: inline-block;
  width: 100%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
}


.btn__submit {
  background-color: #444442;
  color: white;
  padding: 14px 20px;
  /* margin: 8px 0; */
  margin: 0;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  font-weight: bold;
  /* width: 100%; */
}

.btn__submit:hover {
  background-color: #2a2a29;
}

.validation-error__wrapper {
  display: block;
  border-radius: 4px;
  border: 2px solid darkred;
  padding: 7px;
  margin-bottom: 25px;
  background-color: rgb(253, 221, 226);
}

.validation-error__alert {
  color: darkred;
  font-size: 15px;
}


.validation-error__input {
  border: 2px solid darkred;
  border-radius: 4px;
}
</style>
  