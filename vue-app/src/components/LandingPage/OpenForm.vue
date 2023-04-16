<template>
  <div class="form-wrapper">
    <form class="login-form">
      <div class="input-wrapper">
        <label for="username">Username </label>
        <input id="username" v-model="userName" type="text" required />
        <p>
          {{ errorMessageUser }}
        </p>
      </div>
      <div class="input-wrapper">
        <label for="email">E-mail </label>
        <input id="email" type="email" required v-model="userEmail" />
        <p>
          {{ errorMessageEmail }}
        </p>
      </div>
      <div class="special-deals-wrapper">
        <input
          id="checkbox"
          type="checkbox"
          @click="($event) => (checkboxClicked = !checkboxClicked)"
        />
        <label for="checkbox">Send me special deals</label>
      </div>
      <div v-if="checkboxClicked">
        <label for="select-time">I'm willing to received them every:</label>
        <select id="select-time" :required="checkboxClicked">
          <option value>Please choose one option:</option>
          <option value="hour">Hour</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
      <button class="subscribe-btn" @click="onSubmit()">Subscribe</button>
    </form>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const userName = ref("");
    const userEmail = ref("");
    const checkboxClicked = ref(false);
    const errorMessageUser = ref("");
    const errorMessageEmail = ref("");
    const emailRegEx = new RegExp("[^@]+@[^@]+\\.[^@]+");
    const isValidUser = ref(null);
    const isValidEmail = ref(null);
    // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = function () {
      if (!emailRegEx.test(userEmail.value) && userEmail.value.length > 0) {
        errorMessageEmail.value = "Email is invalid";
        isValidEmail.value = false;
      } else {
        errorMessageEmail.value = "";
        isValidEmail.value = true;
      }
    };

    const validateInput = function () {
      if (userName.value.length < 4 && userName.value.length > 0) {
        errorMessageUser.value = "User name requires at least 4 characters";
        isValidUser.value = false;
        validateEmail();
      } else {
        errorMessageUser.value = "";
        isValidUser.value = true;
        validateEmail();
      }
    };
    // const getUserList = function () {
    //   if (isValidUser.value && isValidEmail.value) {
    //     try {
    //       let list = JSON.parse(localStorage.userList);
    //     } catch {
    //       listenerCount list = [];
    //     }
    //     return list;
    //   }
    // };

    const onSubmit = function (event) {
      event.preventDefault();

      validateInput();
      validateEmail();
    };
    //   let list = getUserList();

    //   // if (saveBtn.dataset.index) {
    //   //   list[saveBtn.dataset.index] = user.getUser(); //updates the existing one

    //   //   delete saveBtn.dataset.index; //removed the index attribute
    //   // } else {
    //   //   //add a new item to the list
    //   //   list.push(user.getUser());
    //   // }

    //   // localStorage.userList = JSON.stringify(list);

    //   // nameInput.value = "";
    //   // emailInput.value = "";
    // };
    return {
      userName,
      userEmail,
      checkboxClicked,
      validateInput,
      errorMessageUser,
      errorMessageEmail,
      onSubmit,
      isValidUser,
      isValidEmail,
    };
  },
  // watch: {
  //   email(value) {
  //     userEmail.value = value;
  //     validateEmail(value);
  //   },
  // },
});
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #45260a;
  font-size: 62.5%;
  overflow-x: hidden;
}

.form-wrapper {
  height: 100vh;
  min-width: 30rem;
  padding: 2.4rem;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
  /* transform: translateX(0); */
  transition: all 0.5s ease-in;
  /* display: none;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translateX(100%); */
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2.4rem;
}
label {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

#username,
#email,
select {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-family: inherit;
  color: inherit;
  border: none;
  border-radius: 9px;
  background-color: #fdf2e9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
#username:focus,
#email:focus,
select:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgb(253, 241, 232, 0.5);
}
.special-deals-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}
.special-deals-wrapper label {
  margin: 0;
}
input[type="checkbox"]:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgb(253, 241, 232, 0.5);
}
.subscribe-btn {
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.2rem;
  background-color: #45260a;
  color: #fdf2e9;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
}
.subscribe-btn:hover {
  background-color: #fff;
  color: #555;
}
option {
  font-size: 1.4rem;
  color: #45260a;
}
p {
  font-size: 1.4rem;
  font-family: inherit;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
}
</style>
