<template>
        <div class="subscribeWindow" :style="{ display: showDiv1 ? 'block' : 'none' }">
            <div>
                <div class="header">
                    <div>
                    <h1>Welcome!</h1>
                    <p>To keep connected with us <br />
                    please fill out the form!</p>
                    </div>
                </div>
                <div class="footer">
                    <button class="buttonSubscribe" @click="toggleDivs">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="formWindow" :style="{ display: showDiv2 ? 'block' : 'none' }">
            <div class="columnLeft">
                <div class="header">
                    <div>
                    <h3>Welcome!</h3>
                    <p>To keep connected with us <br />
                    please fill out the form!</p>
                    </div>
                </div>
                <div class="footer">
                </div>
            </div>
            <div class="columnRight">
                <form>
                    <div class="headerForm">
                        <label>Name</label>
                        <input>
                        <label>Email</label>
                        <input>
                        <div class="subscriptionRow">
                        <CheckBox label="Subscribe" value="foo" v-model="MySelectedValues" />
                        </div>
                        <VueDropdown class="my-dropdown-toggle"
                            :options="arrayOfObjects" 
                            :selected="object" 
                            v-on:updateOption="methodToRunOnSelect" 
                            :placeholder="'Select an Item'"
                            :closeOnOutsideClick="boolean">></VueDropdown>
                    </div>
                    <div class="footer">
                        <button class="buttonSubscribe">Submit</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
import { defineComponent } from 'vue';
import CheckBox from './CheckBox.vue';
import VueDropdown from './VueDropdown';

export default defineComponent ({
    data() {
          return {
            arrayOfObjects: [""],
            object: {
              name: 'How often do you want to receive news?',
            },
            showDiv1: true,
            showDiv2: false
          }
        },

    components: {
        CheckBox,
        VueDropdown
    },

    methods: {
            methodToRunOnSelect(payload) {
                this.object = payload;
            },
            toggleDivs() {
                this.showDiv1 = !this.showDiv1
                this.showDiv2 = !this.showDiv2
            }
        }
})
</script>

<style>
.my-dropdown-toggle {
  border-radius: 5px;
}

::v-deep .dropdown-toggle {
    color: #ffffff;
    font-size: 25px;
    font-weight: 800;
  }

::v-deep .dropdown-toggle-placeholder {
    color: rgba(252,162,110,0.5);
  }

.subscribeWindow {
    color:azure;
    width: 650px;
    height: 400px;
    background-color: rgba(24, 37, 37, 0.9);
    border-radius: 30px;
    box-shadow: 10px 25px 30px rgba(24,37,37,0.8);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: block;
}

.formWindow {
    color:azure;
    width: 650px;
    height: 400px;
    border-radius: 30px;
    box-shadow: 10px 25px 30px rgba(24,37,37,0.8);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: none;
    
}

.columnLeft {
    float: left;
    width: 35%;
    background-color: rgba(24, 37, 37, 0.9);
    border-radius: 30px 0px 0px 30px;
}

.columnRight {
    float: right;
    width: 65%;
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
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-top: 80px;
    padding-left: 40px;
    padding-right: 40px;
}

.headerForm input {
    background: none;
    border: none;
    border-bottom: 1px solid #FCA26E;
    height: 30px;
    margin-bottom: 20px;
    color: azure;
}

.headerForm label {
    text-align: left;
    font-weight: 500;
    font-size: large;
}

.subscriptionRow {
    text-align: left;
}

.subscriptionRow input {
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: none;
    border-color: #FCA26E;
}

.checkmark {
  
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
    border: 2px solid #FCA26E;
    font-size: large;
    color: #FCA26E;
    background: none;
    position: relative;
    bottom: 0;
    margin-bottom: 20px;
    box-shadow: 0 0 5px #FCA26E;
}

.buttonSubscribe:hover {
    color: white;
    background: #FCA26E;
}

    
</style>