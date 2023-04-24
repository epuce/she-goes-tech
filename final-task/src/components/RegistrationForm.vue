<template>
    <div>
        <form class="registration-form" @submit.prevent>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id='name' />
            </div>
            <div class="form-group">
                <label for="Surname">Surname</label>
                <input type="text" />
            </div>
            <div class="form-group">
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


            <button class="save-button" type="button" @click="save">Save</button>
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
        var isChecked = ref(false);
        var isPopupVisible = ref(false);
        var name = ref('');

        function save() {
            // save the data
            isPopupVisible.value = true;
        }
        function closePopup() {
            isPopupVisible.value = false;
        }
        return { isChecked, save, isPopupVisible, closePopup, name };
    },
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

.save-button {
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

.save-button:hover {
    background-color: #222;
}
</style>
