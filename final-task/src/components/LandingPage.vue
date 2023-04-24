<template>
    <div class="landing-page">
        <h1 class="CTA">Brighten up your week with our weekly flower bouquet delivery subscription!</h1>
        <button @click="showForm">Subscribe</button>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';



export default {
    methods: {
        showForm() {
            // code to show the form here
        }
    }
}

// export default defineComponent({
//     components: {
//         Form
//     },
// })
</script>

  
<style>
body {
    margin: 0;
    background-color: #f5deb3;
}

.landing-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    transform: translateX(200px);
    transition: transform 0.3s ease-in-out;
}

.cta {
    text-align: center;
}

button {
    background-color: #998463;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.form-container {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: left 0.5s;
    z-index: 10;
}

.form-container.show {
    left: 0;
}
</style>
  