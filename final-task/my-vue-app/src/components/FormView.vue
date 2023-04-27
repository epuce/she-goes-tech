<template>
  <div>
    <div class="form-container">
      <form class="form-wrapper" action="">
        <Label>
          Username <br />
          <input v-model="user.userName" type="text" id="userName" ref="userNameIput"/>
          <div v-if="userNameValidation" class="errorMessage">Username must be at leats 3 charecters</div>
        </Label>
        <Label>
          E-mail <br />
          <input v-model="user.userEmail" type="email" id="userEmail" ref="userEmailInput" />
          <div v-if="userEmailValidation" class="errorMessage">Email must be at leats 3 charecters</div>
        </Label>

        <Label>
          City <br />
          <select  type="text" v-model="user.userCity">
            <option ></option>
            <option value="Vilnius">Vilnius</option>
            <option value="Riga">Riga</option>
            <option value="Tallin">Tallin</option>
          </select>
        </Label>

        <br />

        <Label class="checkbox-wrapper">
          <input type="checkbox" v-model="isChecked" />
          <p>Check the box to confirm your choices</p>
        </Label>
        <button type="button" v-if="isChecked" @click="isOpenPopup = true;" >
          Submit
        </button>
      </form>
    </div>

    <MyPopup
      :text="user.userName"
      v-if="isOpenPopup"
      @close-popup="
        isOpenPopup = false;
        onSubmit();
      "
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import MyPopup from "./MyPopup.vue";
var localStorage = window.localStorage;

export default defineComponent({
  components: {
    MyPopup,
  },

  setup(props, { emit }) {


    var validationForm = function () {
      var userNameInput = document.getElementById('userName');
      var userEmailInput = document.getElementById('userEmail');
      if(userName.value.length >=3 && userEmail.value.length>=3){
        isOpenPopup.value = true;
        userNameInput.classList.remove('invalid');
        userEmailInput.classList.remove('invalid');
        onSubmit()
        var userName = ref('')
        var userEmail = ref('')
      }else{
        if (userName.value.length < 3){
            userNameInput.classList.add('invalid');
            userNameValidation.value = true;
        }else{
          userNameInput.classList.remove('invalid');
          userNameValidation.value=false;
        }
        if (userEmail.value.length < 3){
            userEmailInput.classList.add('invalid');
            userEmailValidation.value = true;
        }else{
          userEmailInput.classList.remove('invalid');
          userEmailValidation.value=false;
        }

      }
    };

    var onSubmit = function () {
      var newUser = {
        userName: user.value.userName,
        userEmail: user.value.userEmail,
        userCity: user.value.userCity,
      };

      var userList = JSON.parse(localStorage.getItem("userList")) || [];

      userList.push(newUser);
      localStorage.setItem("userList", JSON.stringify(userList));
      userList = JSON.parse(localStorage.getItem("userList")) || [];

      isOpenPopup.value = false;
      user.value.userName = "";
      user.value.userEmail = "";
      user.value.userCity = "";

      userList.push(newUser);

      emit("close-form");
    };
    var userNameValidation = ref(false);
    var userEmailValidation = ref(false);
    var userList = ref([]);
    var user = ref({
      id: null,
      userName: "",
      userEmail: "",
      userCity: "",
    });
    var isOpenPopup = ref(false);
    var isChecked = ref(false);

    return {
      user,
      userList,
      onSubmit,
      isOpenPopup,
      isChecked,
      userNameValidation,
      userEmailValidation,
      validationForm,
      
    };
  },
});
</script>
<style>
.form-container {
  /* display: flex; */

  position: relative;
  top: 100px;
  left: 40%;
  height: 500px;
  width: 400px;
  background: #514b4c;
  /* justify-content: center; */
  padding-top: 50px;
  border-radius: 40px;
  margin: 10px;
}

.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: left;
}
.checkbox-wrapper p {
  font-size: 12px;
  color: #f68084;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  margin: none;
  padding: none;
}

form input, select {
  border: none;
  border-radius: 12px;
  margin-bottom: 15px;
  height: 32px;
  width: 200px;
  padding: 5px;
  color: #747071;
  font-weight: 500;
}

form button {
  border: none;
  border-radius: 12px;
  margin-top: 20px;
  height: 32px;
  width: 200px;
  background: #f68084;
  font-weight: 700;
  color: antiquewhite;
}

form button:hover {
  color: #f1e1ee;
  text-shadow: 0 0 5px #f5ebf4;
  transform: translateY(-0.15em);
  transition: 0.2s;
}

label {
  text-align: start;
  color: white;
  margin-bottom: 5px;
}

#userName.invalid,
#userEmail.invalid{
  border: #f68084 1px solid;
}

.errorMessage {
  color: #f68084;
}
</style>
