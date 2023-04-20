<template>
    <div class="subscribeWindow" id="myDiv">
      <div class="header">
        <div>
            <div class="welcomeText" :style="{ display: showWelcomeText ? 'block' : 'none' }">
            <h2>Welcome!</h2>
            <p>To keep connected with us <br />
            please fill out the form!</p></div>
            <div :style="{ display: showThanxText ? 'block' : 'none' }" id="text"></div>
        </div>
      </div>
      <div class="footer">
        <button
          class="buttonSubscribe"
          @click="toggleDivs(), toggleButtonSubscribe()"
          :style="{ display: showButtonSubscribe ? 'block' : 'none' }"
        >
          Subscribe
        </button>
        <button class="buttonClose"
        :style="{ display: showButtonClose ? 'block' : 'none' }"
        @click="!toggleButtonClose(), !toggleButtonSubscribe(), !toggleWelcomeText(), toggleThanxText()"
        >X</button>
      </div>
    </div>
  <div class="formWindow" id="formWindow">
    <div class="columnLeft">
      <div class="header"></div>
      <div class="footer"></div>
    </div>
    <div class="columnRight">
      <form>
        <div class="headerForm">
          <label>Name</label>
          <input v-model="user.first_name" id="nameThx"/>
          <label>Surname</label>
          <input v-model="user.last_name" />
          <label>Email</label>
          <input v-model="user.email" />
          <div class="subscriptionRow">
            <CheckBox
              label="Subscribe"
              @update-checkbox="toggleDropdown"/>
          </div>
          <div :style="{ display: displayDropdown}">
            <VueDropdown>Dropdown</VueDropdown>
          </div>
        </div>
        <div class="footer">
          <button
            type="button"
            class="buttonSubscribe"
            @click="toggleColumnRight(), onUserSave(), updateText(), toggleButtonClose(), toggleWelcomeText()">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import CheckBox from "./CheckBox.vue";
import VueDropdown from "./VueDropdown";
export default defineComponent({
    components: {
        CheckBox,
        VueDropdown
    },
    setup() {
        const user = ref({
            first_name: '',
            last_name: '',
            email: '',
            id: null
        })

        const userList = ref([])
        fetch('http://localhost:8002/api/users')
        .then(resp => resp.json())
        .then(resp => {
            userList.value = resp.data
        })

        const onUserSave = () => {
            const payload = {
                first_name: user.value.first_name,
                last_name: user.value.last_name,
                email: user.value.email,
            }

            fetch('http://localhost:8002/api/users', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  },
                body: JSON.stringify(payload),
              })
              .then(resp => resp.json())
              .then(resp => {
                if (!resp.error) {
                  userList.value.push({
                    ...payload,
                    id: resp.data.insertId
                  })
                  user.value = {
                    first_name: '',
                    last_name: '',
                    email: ''
                  }
                }
              })
        }

        const updateText = () => {
            const text = document.getElementById('text');
            text.textContent = 'Thank you for subscribing ' + document.getElementById("nameThx").value + ' !'
            text.classList.add('textThx');
        }

        return {
            onUserSave,
            updateText,
            user
        }
    },

    data() {
          return {
            showButtonSubscribe: true,
            isChecked: false,
            displayDropdown: 'none',
            showButtonClose: false,
            showWelcomeText: true,
            showThanxText: true
          }
        },

    methods: {
            toggleButtonSubscribe() {
                this.showButtonSubscribe = !this.showButtonSubscribe
            },
            toggleDivs() {
                const element = document.getElementById('myDiv');
                element.classList.add('subscribeWindowTwo');
                const formWindow = document.getElementById('formWindow');
                formWindow.classList.add('formWindowTwo');
            },

            toggleDropdown(isChecked) {
              this.displayDropdown = isChecked ? 'none' : 'block';
            },

            toggleColumnRight() {
                const element = document.getElementById('myDiv');
                element.classList.remove('subscribeWindowTwo');
                const formWindow = document.getElementById('formWindow');
                formWindow.classList.remove('formWindowTwo');
            },
            toggleButtonClose() {
                this.showButtonClose = !this.showButtonClose
            },
            toggleWelcomeText() {
                this.showWelcomeText = !this.showWelcomeText
            },
            toggleThanxText() {
                this.showThanxText = !this.showThanxText
            }


    },
})
</script>

<style>
.subscribeWindow {
  color: azure;
  width: 650px;
  background-color: rgba(24, 37, 37, 0.8);
  border-radius: 30px;
  box-shadow: 10px 25px 30px rgba(24, 37, 37, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  transition: width 0.5s linear, margin-left 0.5s linear;
}

.subscribeWindowTwo {
  width: 226px;
  margin-left: -212px;
  border-radius: 30px 0px 0px 30px;
}

.formWindow {
  color: azure;
  width: 650px;
  height: 400px;
  border-radius: 30px;
  box-shadow: 10px 25px 30px rgba(24, 37, 37, 0.8);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;

  transition: opacity 1s, visibility 1s linear;
}

.formWindowTwo {
  opacity: 1;
  visibility: visible;
}

.columnLeft {
  width: 226px;
  float: left;
  background-color: none;
  border-radius: 30px 0px 0px 30px;
}
.columnRight {
  float: right;
  width: 424px;
  background-color: rgba(24, 37, 37, 0.4);
  border-radius: 0px 30px 30px 0px;
}
.header {
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerForm {
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
}
.headerForm input {
  background: none;
  border: none;
  border-bottom: 1px solid #fca26e;
  height: 30px;
  margin-bottom: 10px;
  color: azure;
  font-size: large;
}
.headerForm label {
  text-align: left;
  font-weight: 400;
  font-size: medium;
}
.subscriptionRow {
  text-align: left;
  margin-bottom: 10px;
}
.subscriptionRow input {
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: none;
  border-color: #fca26e;
}

.checkbox {
  height: 15px;
  width: 15px;
  background-color: none;
}
h1 {
  margin: 0;
  font-size: 50px;
}
.footer {
  height: 80px;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}
.buttonSubscribe {
  padding: 10px 25px 10px 25px;
  border-radius: 25px;
  border: 2px solid #fca26e;
  font-size: large;
  color: #fca26e;
  background: none;
  position: relative;
  bottom: 0;
  margin-bottom: 20px;
  box-shadow: 0 0 5px #fca26e;
}
.buttonSubscribe:hover {
  color: white;
  background: #fca26e;
}
.buttonClose {
  padding: 10px 15px 10px 15px;
  border-radius: 25px;
  border: 2px solid #fca26e;
  font-size: large;
  color: #fca26e;
  background: none;
  float: right;
  bottom: 0;
  margin-bottom: 20px;
  box-shadow: 0 0 5px #fca26e;
  display: none;
}
.buttonClose:hover {
  color: white;
  background: #fca26e;
}

input:focus {
  outline: none !important;
}

.inputInvalid {
  background: none;
  border: none;
  border-bottom: 1px solid #a91b09;
  height: 30px;
  margin-bottom: 20px;
  color: azure;
}

.textThx {
  font-size: x-large;
}
</style>
