<template>
    <div>
        <form class="signup-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="email" placeholder="E-mail address" />
            <div class="checkbox-container">
                <input type="checkbox" id="giftbox" />
                <label for="giftbox">I want to receive a sample giftbox</label>
            </div>
            <input type="text" placeholder="Address" />

            <button type="button" @click="save">Save</button>

        </form>

    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        var showForm = ref(false);
        var formActive = ref(false);
        var toggleForm = function () {
            showForm.value = !showForm.value;
            formActive.value = true;
        }
        return { showForm, toggleForm, formActive }
    }
}
</script>
<style>
.signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 100%;
    left: -500px;
    background-color: #f5f5f5;
    padding: 20px;
    position: absolute;
    transition: transform 0.5s ease;

}

.form.hidden {
    display: none;
}

.form.slide-in {
    transform: translateX(400px)
}

;

input {
    margin-bottom: 10px;
}

.checkbox-container {
    display: block;
    align-items: center;
}
</style>