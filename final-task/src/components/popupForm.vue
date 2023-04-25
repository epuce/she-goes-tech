<template>
  <div class="popup-wrapper">
    <div class="popup-form">
      <form>
        <label class="popup-form_name"
          >Name
          <input
            type="text"
            placeholder="Enter client's name"
            v-model="input"
            @keyup="validateInput"
            @blur="validateInput"
          />
        </label>

        <div class="popup-form_error" v-if="error">
          {{ error }}
        </div>

        <label class="popup-form_email"
          >E-mail<input type="email" placeholder="enter client's e-mail"
        /></label>

        <label>Select the date <input type="date" /></label>

        <label>Need to book a surf instructor</label>
        <input type="checkbox" v-model="checkboxClick" />

        <select
          :class="{
            'popup-form__select--hidden': !checkboxClick,
            'popup-form__select--visible': checkboxClick,
          }"
          name="instructor"
        >
          <option>Wayan</option>
          <option>Kadek</option>
          <option>John</option>
        </select>

        <button class="popup-form_add-btn">Add a record</button>

        <button class="btn_close" @click="onClose()">Close</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    var onClose = function () {
      emit("close-popup");
    };

    var checkboxClick = ref(false);
    let input = ref("");
    let error = ref("");
    var validateInput = () => {
      error.value = input.value === "" ? "The Input field is required" : "";
      // with computed() return input.value === "" ? "Name field is required!" : "";
    };

    return {
      onClose,
      checkboxClick,
      input,
      error,
      validateInput,
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
  background: #ffffff;
  position: relative;
}

.popup-form_name,
.popup-form_email,
input {
  font-weight: bold;
  text-align: left;
  display: block;
  text-transform: uppercase;
  display: block;
  width: 100%;
}

.popup-form__select--hidden {
  display: none;
}

.popup-form__select--visible {
  display: inline-block;
  width: 100%;
  border-radius: 5px;
  padding: 10px 5px;
}

.popup-form_add-btn {
  background-color: navy;
  color: white;
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border-radius: 4px;
}

.btn_close {
  position: absolute;
  top: 10px;
  right: 10px;
}
.popup-form_error {
  color: red;
  text-align: left;
}
</style>
