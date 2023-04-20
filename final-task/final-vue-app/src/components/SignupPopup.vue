<template>
  <div class="popup__wrapper">
    <div class="popup">
      <div class="signup__wrapper">
        <h2>Join a class:</h2>
        <form @submit.prevent="submitForm" class="signup-form">
          <label>Name:

            <input id="name" v-model="name" type="text" name="name" /><br />
            <div v-if="!nameIsValid" class="validation-error">Please enter a name</div>
          </label>

          <!-- <label>Last name:
            <input type="text" name="last-name" /><br />
          </label> -->

          <label>Email:

            <input type="email" name="email" v-model="email"/><br />
            <div v-if="!emailIsValid" class="validation-error">Please enter a valid email</div>
          </label>

          <label>Class:
            <br>
            <select>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select><br />
          </label>

          <label>Date:
            <br>
            <input type="date" name="date" min="2023-04-20" max="2023-05-31" />
            <!-- can we show only a limited amount of days?  is there a prettier solution in VUE or other -->
          </label>

          <label>
            <input type="checkbox" name="checkbox" v-model="checked" @click="showPhone = true" />
            Send a reminder

          </label>

          <label v-if="checked">Phone:
            <input type="tel" name="phone" /><br>
          </label>

          <button class="btn__submit" @click="submitForm = true" type="button">Submit</button>
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
      name: '',
      email: '',
      nameIsValid: true,
      emailIsValid: true,
      // If isEmailValid = false, a message appears
    }
  },
  
    methods: {
      validateForm() {
      if (name.value.length < 3) {
        nameIsValid.value = false;
      } else {
        nameIsValid.value = true;
      }
      if (!emailRegEx.test(email.value)) {
        emailIsValid.value = false;
      } else {
        emailIsValid.value = true;
      }

      if (isNameValid.value && isEmailValid.value) {
        //return this.emailIsValid && this.nameIsValid
      }
    },
      submitForm() {
        if(validateForm()) {
          console.log('FORM OK')
          // TODO: submit data
        } else {
          console.log('INVALID FORM')
        }
      }
    },




  setup(props, { emit }) {
      var onClose = function () {
        emit("close-signup-popup");
      };
      var showSuccess = ref(false)
      var showPhone = ref(false)

      return {
        onClose,
        // onSubmit,
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

/* <!-- TODO button and input alignment --> */

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
  /* display: block; */
  /* width: 100%;  */
  /* /* margin: 0;  */
  padding: 5px;
}

/* .signup-from input,
select {
  /* padding: 10px 20px; 
  margin: 8px 0;
  display: inline-block;
  border: 1px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
  /* width: 90%; 
} */

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

.validation-error {
  color: red;
  font-size: 12px;
}

/* .signup-form input {
  border-color: red;
} */
</style>
  