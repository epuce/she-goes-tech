<template>
  <div class="form--container">
    <form class="subscribe--form">
      <div class="input--wrapper">
        <label class="user-name">
          Username
          <input v-model="userName" required />
        </label>
        <label class="e-mail">
          E-mail
          <input type="email" v-model="userEmail" required />
        </label>
        <label class="check-box">
          <input
            v-model="userIsChecked"
            @click="isChecked = !isChecked"
            type="checkbox"
          />
          Send me special deals
        </label>
        <label class="option--box" v-if="userIsChecked">
          I am wiiling to recive them every:
          <select name="cycle" v-model="userCycle">
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </label>
        <MyBtn name="subscribe" text="Subscribe" @click="onSubscribe()" />
      </div>
    </form>
    <SubscribePopup
      v-if="isOpenPopup"
      :popUpText="userName"
      @close-popup="isOpenPopup = false"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import SubscribePopup from "./SubscribePopup.vue";
import MyBtn from "./MyBtn.vue";

export default defineComponent({
  components: { MyBtn, SubscribePopup },

  setup(props, { emit }) {
    var isOpenPopup = ref(false);
    var userName = ref("");
    var userEmail = ref("");
    var userOffer = ref("");
    var userIsChecked = ref(false);
    var userCycle = ref("");
    var onSubscribe = function () {
      var subscriber = {
        name: userName.value,
        email: userEmail.value,
        offer: userIsChecked.value,
        cycle: userCycle.value,
      };

      localStorage.subscriber = JSON.stringify(subscriber);

      emit("save-form", subscriber)
      this.isOpenPopup = true;

      // userName.value = "";
      // userEmail.value = "";
      // userIsChecked.value = "";
      // userCycle.value = "";
    };

    return {
      userName,
      userIsChecked,
      isOpenPopup,
      userEmail,
      userOffer,
      onSubscribe,
      userCycle,
    };
  },
});
</script>
<style>
* {
  margin: 0;
}
.form--container {
  width: 250px;
  height: 100vh;
  background-color: gray;
}
.subscribe--form {
  padding: 20px 20px;
  color: white;
}

.input--wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.user-name input,
.e-mail input {
  width: 100%;
  height: 20px;
  border: none;
  border-radius: 4px;
}

.option--box {
  display: flex;
  flex-direction: column;
}
</style>
