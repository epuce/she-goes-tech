<template>
    <div>
        <form class="registration-form" @submit.prevent>

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name" ref="nameInput" />
                <div v-if="nameInvalid" class="error-message">Please enter a valid name (at least 3 characters)</div>
            </div>

            <div class=" form-group">
                <label for="surname">Surname</label>
                <input type="text" id="surname" v-model="surname" ref="surnameInput" />
                <div v-if="surnameInvalid" class="error-message">Please enter a valid surname (at least 3 characters)</div>
            </div>

            <div class=" form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model="email" />
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="checkbox" v-model="isChecked" />
                <label for="checkbox">I want to receive a free catalog</label>
            </div>

            <div class="form-group" v-if="isChecked">
                <label for="address">Address</label>
                <input type="text" id="address" v-model="address" />
            </div>

            <button class="saveBtn" type="submit" @click.prevent="validateForm">Save</button>

            <Popup v-if="isPopupVisible" @close="isPopupVisible = false; clearForm()" :name="name" />

        </form>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Popup from './Popup.vue';
var localStorage = window.localStorage;

export default defineComponent({
    components: {
        Popup,
    },
    setup() {
        var name = ref('');
        var surname = ref('');
        var email = ref('');
        var address = ref('');
        var isChecked = ref(false);
        var isPopupVisible = ref(false);
        var nameInvalid = ref(false);
        var surnameInvalid = ref(false);

        function validateForm() {
            var nameInput = document.getElementById('name');
            var surnameInput = document.getElementById('surname');
            if (name.value.length >= 3 && surname.value.length >= 3) {
                isPopupVisible.value = true;
                nameInput.classList.remove('invalid');
                surnameInput.classList.remove('invalid');
                save()
            } else {
                if (name.value.length < 3) {
                    nameInput.classList.add('invalid');
                    nameInvalid.value = true;
                } else {
                    nameInput.classList.remove('invalid');
                    nameInvalid.value = false;
                }
                if (surname.value.length < 3) {
                    surnameInput.classList.add('invalid');
                    surnameInvalid.value = true;
                } else {
                    surnameInput.classList.remove('invalid');
                    surnameInvalid.value = false;
                }
            }
        }

        function save() {
            var user = {
                name: name.value,
                surname: surname.value,
                email: email.value,
                address: address.value,
            };
            var users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }

        function clearForm() {
            name.value = '';
            surname.value = '';
            email.value = '';
            address.value = '';
            isChecked.value = false;
            nameInvalid.value = false;
            surnameInvalid.value = false;
        }

        return {
            name,
            surname,
            email,
            address,
            isChecked,
            isPopupVisible,
            validateForm,
            save,
            clearForm,
            nameInvalid,
            surnameInvalid,

        };
    }
});
</script>


<style>
.registration-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    gap: 10px;
    font-family: sans-serif;
    color: #333;
}

label {
    font-size: 15px;
    padding-right: 10px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.checkbox-container {
    display: block;
    align-items: center;
    margin-top: 10px;
}

.saveBtn {
    color: white;
    background-color: #333;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
}

.saveBtn:hover {
    background-color: #222;
}

#name,
#surname,
#email,
#address {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

#name.invalid,
#surname.invalid,
#email.invalid,
#address.invalid {
    border: 1px solid red;
}

.error-message {
    color: red;
    font-size: 12px;
}</style>