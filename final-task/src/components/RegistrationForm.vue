<template>
    <div>
        <form class="registration-form" @submit.prevent>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name" ref="nameInput" />
            </div>

            <div class=" form-group">
                <label for="surname">Surname</label>
                <input type="text" id="surname" v-model="surname" ref="surnameInput" />
            </div>

            <div class=" form-group">
                <label for="email">E-mail</label>
                <input type="email" />
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="checkbox" v-model="isChecked" />
                <label for="checkbox">I want to receive a free catalog</label>
            </div>
            <div class="form-group" v-if="isChecked">
                <label for="address">Address</label>
                <input type="text" />
            </div>


            <button class="saveBtn" type="submit" @click.prevent="validateForm">Save</button>
            <Popup v-if="isPopupVisible" @close-popup="closePopup" :name="name" />


        </form>

    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Popup from './Popup.vue';

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

        function validateForm() {
            var nameInput = document.getElementById('name');
            var surnameInput = document.getElementById('surname');

            if (name.value.length >= 3 && surname.value.length >= 3) {
                isPopupVisible.value = true;
                nameInput.classList.remove('invalid');
                surnameInput.classList.remove('invalid');
            } else {
                if (name.value.length < 3) {
                    nameInput.classList.add('invalid');
                } else {
                    nameInput.classList.remove('invalid');
                }

                if (surname.value.length < 3) {
                    surnameInput.classList.add('invalid');
                } else {
                    surnameInput.classList.remove('invalid');
                }
            }
        }

        function save() {

        }


        function closePopup() {
            isPopupVisible.value = false;
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
            closePopup,
        };
    }
},
);
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

.invalid {
    border: 1px solid red;
}
</style>