<template>
  <div class="form-container">
    <form class="login-form">
      <div class="input-wrapper">
        <label for="username">Username </label>
        <input id="username" v-model="user.user_name" type="text" required />
        <p>
          {{ errorMessageUser }}
        </p>
      </div>
      <div class="input-wrapper">
        <label for="email">E-mail </label>
        <input id="email" type="email" required v-model="user.email" />
        <p>
          {{ errorMessageEmail }}
        </p>
      </div>
      <div class="special-deals-wrapper">
        <input
          id="checkbox"
          type="checkbox"
          @click="($event) => (checkboxClicked = !checkboxClicked)"
          v-model="user.offers"
        />
        <label for="checkbox">Send me special deals</label>
      </div>
      <div v-if="checkboxClicked">
        <div class="select-wrapper">
          <label for="select-time">I'm willing to received them every:</label>
          <select
            id="select-time"
            :required="checkboxClicked"
            v-model="user.cycle"
          >
            <option disabled value>Please choose one option:</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
      </div>
      <div class="button-wrapper">
        <button class="subscribe-btn" type="button" @click="onSubmit()">
          Subscribe
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  // watch: {
  //   userName(value) {
  //     this.user.value.user_name = value;
  //     this.validateUsername(value);
  //   },
  //   userEmail(value) {
  //     this.user.value.email = value;
  //     this.validateEmail(value);
  //   },
  // },
  watch: {
    "user.user_name": function (value) {
      this.user.user_name = value;
      this.validateUsername(value);
    },
    "user.email": function (value) {
      this.user.email = value;
      this.validateEmail(value);
    },
  },

  setup(props, {emit}) {
    const checkboxClicked = ref(false);
    const errorMessageUser = ref("");
    const errorMessageEmail = ref("");
    const emailRegEx = new RegExp("[^@]+@[^@]+\\.[^@]+");
    const isValidUser = ref(null);
    const isValidEmail = ref(null);
    const userList = ref([]);
    const user = ref({
      user_name: "",
      email: "",
      offers: "",
      cycle: "",
      id: null,
    });

    const validateEmail = function () {
      if (!emailRegEx.test(user.value.email) && user.value.email.length !== 0) {
        errorMessageEmail.value = "Email is invalid";
        isValidEmail.value = false;
      } else if (user.value.email.length === 0) {
        errorMessageEmail.value = "Required";
        isValidEmail.value = false;
      } else {
        errorMessageEmail.value = "";
        isValidEmail.value = true;
      }
    };

    const validateUsername = function () {
      if (
        user.value.user_name.length < 4 &&
        user.value.user_name.length !== 0
      ) {
        errorMessageUser.value = "User name requires at least 4 characters";
        isValidUser.value = false;
      } else if (user.value.user_name.length === 0) {
        errorMessageUser.value = "Required";
        isValidUser.value = false;
      } else {
        errorMessageUser.value = "";
        isValidUser.value = true;
      }
    };

    // fetch("http://localhost:8002/api/landingPage")
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     userList.value = resp.data;
    //   });

    const onSubmit = function () {
      validateUsername();
      validateEmail();

      if (isValidUser.value && isValidEmail.value) {
        emit("open-popup", user.value.user_name);

        const payload = {
          user_name: user.value.user_name,
          email: user.value.email,
          special_offers: user.value.offers,
          offer_cycle: user.value.cycle,
        };

        if (user.value.id) {
          fetch(`http://localhost:8002/api/landingPage/${user.value.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          })
            .then((resp) => resp.json())
            .then((resp) => {
              if (!resp.error) {
                const userIndex = userList.value.findIndex(
                  (item) => item.id === user.value.id
                );
                userList.value[userIndex] = {
                  ...userList.value[userIndex],
                  ...payload,
                };
                user.value = {
                  first_name: "",
                  last_name: "",
                  id: null,
                };
              }
            });
        } else {
          fetch("http://localhost:8002/api/landingPage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:8002",
            },
            body: JSON.stringify(payload),
          })
            .then((resp) => resp.json())
            .then((resp) => {
              console.log(resp);
              if (!resp.error) {
                userList.value.push({
                  ...payload,
                  id: resp.data.insertId,
                });
                // user.value = user.value;
              }
            });
        }
      }
    };

    return {
      // userName,
      // userEmail,
      checkboxClicked,
      validateUsername,
      validateEmail,
      errorMessageUser,
      errorMessageEmail,
      onSubmit,
      isValidUser,
      isValidEmail,
      userList,
      user,
    };
  },
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
}

.form-container {
  height: 100vh;
  min-width: 30rem;
  max-width: 50rem;
  padding: 2.4rem;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  background-color: #fdf2e9;
  background-image: linear-gradient(
    to right bottom,
    rgba(242, 179, 128, 0.919),
    #e67e22
  );
  transition: all 0.5s ease-in;
}
.input-wrapper,
.select-wrapper,
.special-deals-wrapper,
.button-wrapper {
  padding: 0.8rem;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.8rem;
}
label {
  display: block;
  font-size: 1.4rem;
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
  /* margin-bottom: 1.2rem;
  margin-left: 1.2rem; */
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
  width: 100%;
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
  font-size: 1.2rem;
  font-family: inherit;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
}
</style>
