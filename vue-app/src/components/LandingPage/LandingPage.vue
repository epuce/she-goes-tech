<template>
    <div>
        <p>Some kind of text offering to sign up for some kind of service.</p>
        <button class="signup-btn" @click="toggleForm">Sign Up</button>
        <FormFields ref="form" />
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import FormFields from './FormFields.vue'
export default defineComponent({
    components: {
        FormFields
    },
})
</script>
<style></style>