<template lang="">
    <div class="wrapper">
        <div class="item" v-for="(item) in items" :key="item.id">
            <img :src="item.image"/>
            <div class="firstLastName">{{item.firstname}} {{item.lastname}}</div>
            <div class="email">{{item.email}}</div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        var items = ref([])
        fetch("https://fakerapi.it/api/v1/persons", {
            method: "GET"
        }).then(function (response) {
            return response.json()
        }).then(function (returnedData) {
            items.value = returnedData.data
        })
        return {
            items,
        }
    }
}) 
</script>
<style>
.wrapper {
    display: flex;
    flex-direction: row;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    flex-wrap: wrap;
    width: 800px;

}

.item {
    padding: 15px;
}

.firstLastName {
    font-weight: bold;
    font-size: 10px;
}

.email {
    font-size: 6px;
}

img {
    width: 120px;
    height: 120px
}

img:hover {
    cursor: pointer;
}
</style>