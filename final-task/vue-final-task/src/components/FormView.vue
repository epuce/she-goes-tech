<template>
  <div class="form--container">
    <form class="subscribe--form">
      <div class="input--wrapper">
        <label class="user-name">
          Username
          <input v-model="user.name" required/>
        </label>
        <label class="e-mail">
          E-mail
          <input type="email" v-model="user.email" required/>
        </label>
        <label class="check-box">
          <input
            v-model="user.offer"
            @click="isChecked = !isChecked"
            type="checkbox"
          />
          Send me special deals
        </label>
        <label class="option--box" v-if="isChecked">
          I am wiiling to recive them every:
          <select name="cycle" v-model="user.cycle">
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </label>
        <MyBtn name="subscribe" text="Subscribe" @click="isOpenPopup = true"/>
      </div>
    </form>
    <SubscribePopup v-if="isOpenPopup" :popUpText="userName" @close-popup="isOpenPopup = false"/>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import SubscribePopup from "./SubscribePopup.vue";
import MyBtn from "./MyBtn.vue";

export default defineComponent({
  components: { MyBtn, SubscribePopup },

  setup() {
    var isOpenPopup = ref(false);
    var userName = ("fixed value");
    var isChecked = ref(false);
    var inputUser = ref([]);
    var user = ref({
      index: 0,
      name: "",
      email: "",
      offer: Boolean,
      cycle: "",
    });

    var updateUser = function (input, value) {
      this.user[input] = value
    }

    return {
      userName,
      isChecked,
      user,
      inputUser,
      isOpenPopup,
      updateUser
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
