<template>
    <div>
        <div class="left">
            <LandingPage />
        </div>

        <div class="right">
            <Table />
        </div>

    </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import Table from './components/Table.vue';
export default {
    name: 'App',
    components: {
        LandingPage,
        Table,
    }
}
</script>

<style>
body {
    margin: 0;
    background-color: #f7f4ef;
}

.left {
    width: 45%;
    height: 100vh;
    float: left;
    padding-left: 20px;
    /* background-image: url('../assets/images/flowers.jpg'); */
}

.right {
    width: 45%;
    height: 100vh;
    float: right;
    padding-right: 20px;
}
</style>