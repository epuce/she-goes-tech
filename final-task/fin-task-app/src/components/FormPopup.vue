<template>
    <div class="popup__wrapper">
        <div class="popup__body">
            <font-awesome-icon 
                icon="fa-solid fa-xmark" 
                class="btn-close" 
                @click="onClose()"
            />
            <h3>Please fill in the form to subscribe for Dr. Hauschka Face Care Tips and Tricks</h3>
            <form>
                <label >
                    <span>First name</span>
                    <input 
                        v-model="user.first_name"
                        :class="{'validation-error': !isNameValid }"
                    >
                    <span 
                        v-if="!isNameValid"
                        class="error-message">
                         Please check your first name 
                    </span>
                </label>
    
                <label >
                    <span>Last name</span>
                    <input 
                        v-model="user.last_name"
                        :class="{'validation-error': !isSurnameValid }"
                    >
                    <span 
                        v-if="!isSurnameValid"
                        class="error-message">
                         Please check your last name 
                    </span>
                </label>

                <label >
                    <span>Email</span>
                    <input 
                        v-model="user.email"
                        :class="{'validation-error': !isEmailValid }"
                    >
                    <span 
                        v-if="!isEmailValid"
                        class="error-message">
                         Please check your email 
                    </span>
                </label>

                <label class="input-type__checkbox" >
                    <input 
                        type="checkbox" 
                        class="input__checkbox" 
                        v-model="user.sample_option"
                        @click="checkboxSelected = !checkboxSelected"
                    >
                    <span>Receive a gift sample</span>
                </label>

                <label class="input-type__selection" v-if="checkboxSelected">
                    Please select a sample product:
                    <select 
                        class="input-type__selection selection-list" 
                        v-model="user.sample_product"
                        >
                        <option 
                            class="selection-list__item" 
                            disabled hidden>
                            Product list
                        </option>
                        <option 
                            class="selection-list__item" >
                            Facial Mask
                        </option>
                        <option 
                            class="selection-list__item" >
                            Facial Cleanser
                        </option>
                        <option 
                            class="selection-list__item" >
                            Regenerating Face Care
                        </option>
                        <option 
                            class="selection-list__item" >
                            Night Care
                        </option>
                    </select>
                </label>

                <div class="btn-subscribe__container">
                    <ButtonDefault 
                        text="Subscribe"
                        @click="onFormSubmit"
                        :type="btnType"
                        :class="{'btn--inactive': !isFormValid }"
                        
                    />
                </div>
            </form>
            <MessagePopup
                v-if="showMessage" 
                @close-popup="showMessage = false, onClose()"
                :text="user.first_name"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ButtonDefault from './ButtonDefault.vue';
import MessagePopup from './MessagePopup.vue';

export default defineComponent ({
    components: {
        ButtonDefault,
        MessagePopup,
    },
    props: {
        btnType: {
            type: String,
            required: false,
            default: undefined,
        },
        isFormValid: {
            type: Boolean,
        },
        isNameValid: {
            type: Boolean,
        },
        isSurnameValid: {
            type: Boolean,
        },
        isEmailValid: {
            type: Boolean,
        },

    },
    setup(props, {emit}) {
        var user = ref({
            id: null,
            first_name: '',
            last_name: '',
            email: '',
            sample_option: '',
            sample_product:''
        })
        var showMessage = ref(false)
        var onClose = function() {
            emit ('close-popup')
        }
        var checkboxSelected = ref(false)

        var onFormSubmit = function() {
            
            var payload = {
                id: user.value.id,
                first_name: user.value.first_name,
                last_name: user.value.last_name,
                email: user.value.email,
                sample_option: user.value.sample_option,
                sample_product:user.value.sample_product,
            }

            console.log(payload)
            
            emit ('add-new-user', payload, showMessage)
            
        }
        
        return {
            user,
            showMessage,
            onClose,
            checkboxSelected,
            onFormSubmit,
        }
    }
})

</script>

<style>
.popup__wrapper {
    position: fixed;
    z-index: 9990;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
}

.popup__body {
    padding: 32px;
    width: 70%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;
}

form {
    display: flex;
    flex-direction: column;
    align-items: left;
}

form label {
    display: flex;
    flex-direction: column;
    padding: 8px;
}

form label span {
    font-size: 13px;
    font-weight: 600;
}

form label span.error-message {
    color: red;
    font-size: 11px;
}

form label.input-type__checkbox {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

form input.input__checkbox {
    height: 20px;
    width: 20px;
    outline: none;
    cursor: pointer;
    border: 1px solid #d1d1d1;
    accent-color: #34495e;
}

form input, 
form .input-type__selection > .selection-list {
    border-radius: 4px;
    border: 1px solid #d1d1d1;
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
    outline: none;
    padding: 8px;
    -webkit-transition: .18s ease-out;
    -moz-transition: .18s ease-out;
    -o-transition: .18s ease-out;
    transition: .18s ease-out;
}

form input:hover {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
}

form  input:focus {
    color: #4b515d;
    border: 1px solid #B8B6B6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
}
form input.validation-error {
    border-color: red;
}

form .input-type__selection > .selection-list {
    margin-top: 5px;
}

.btn-subscribe__container {
    display: flex;
    justify-content: center;
    padding: 16px 8px;
}
.btn-subscribe {
    width: 100%;
    text-transform: uppercase;
    font-family: inherit;
    font-weight: 500;
    padding: 8px 16px;
    border: solid 1px #80808024;
    background: rgba(84, 110, 72, 0.639);
    border-radius: 4px;
    box-shadow: rgba(84, 110, 72, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
}
    
.btn-subscribe:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
                rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.btn-subscribe:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.24);
}

.btn-close {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 25px;
    top: 25px;
    border-radius: 50%;
    padding: 5px;
}

.btn-close:hover {
    background: #4b515d1c;
    box-shadow: 3px 2px 3px 1px rgba(0, 0, 0, 0.24);
    cursor: pointer;
}

.btn-close:active {
    transform: scale(0.98);
}
</style>