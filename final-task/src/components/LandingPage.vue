<template>
    <div class="landing-page">

        <h1 class="cta">Spice up your week with our weekly flower delivery!</h1>

        <button class="subscribeBtn" @click="showRegistrationForm = true">Subscribe</button>

        <RegistrationForm v-if="showRegistrationForm" @close="closeRegistrationForm = false" :add-user="addUser" />

    </div>
</template >

<script>
import { defineComponent } from 'vue';
import RegistrationForm from './RegistrationForm.vue';

export default {
    name: 'LandingPage',
    components: {
        RegistrationForm,
    },

    data() {
        return {
            showRegistrationForm: false,
        };
    },

    methods: {
        addUser(user) {
            this.$emit('user-added', user);
        },
    },
};
</script>

<style>
.landing-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.cta {
    font-size: 30px;
    text-align: center;
    width: 500px;
    margin-bottom: 20px;
    font-family: 'Lato', sans-serif;
    color: #333;
    line-height: 1.5;
}

.subscribeBtn {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #998463;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    color: white;
    transition: all 0.3s ease-in-out;
    font-size: medium;
    box-shadow: 5px 5px 5px #c3c2c2;
}

.subscribeBtn:hover {
    background-color: #6f5336;
}</style >
