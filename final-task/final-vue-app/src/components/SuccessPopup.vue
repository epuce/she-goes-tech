<template>
  <div class="successPopup__wrapper">
    <div class="successPopup">
      <button class="successBtn__close" @click="onClose()">X</button>
      <h2>Success, {{ first_name }}</h2>
      <!-- // TODO: link with input of name -->
      <!-- Can we refresh page upon pressing close button? Maybe add a function here -->

      <!-- <p>{{ participant.first_name }}</p> -->

      <p>
        Thank you for signing up to a class!
      </p>

    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    first_name: {
      type: String,
    },
  },
  setup(props, { emit }) {
    var onClose = function () {
      emit("close-success-popup");
    };
    return {
      onClose,
    };
  },
});
</script>
<style>
.successBtn__close {
  float: right;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 4px;
  padding: 5px;
}

.successBtn__close:hover {
  color: darkred;
}

.successPopup__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}

.successPopup {
  padding: 32px;
  width: 30%;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  /* border-radius: 10px; */
}
</style>