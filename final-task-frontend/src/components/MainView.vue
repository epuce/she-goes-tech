<template>
    <div>
        <FormMeal :meal-list="mealList" @add-to-list="addToList" />

        <TableMeal :meal-list="mealList" />

        <button @click="isOpen = true">popup</button>

        <MyPopup v-if="isOpen" @close-component="isOpen = false" />

    </div>
</template>

<script>

import { defineComponent, ref } from 'vue';
import TableMeal from './TableMeal.vue';
import FormMeal from './FormMeal.vue';
import MyPopup from './MyPopup.vue';
export default defineComponent({
    setup() {

        var mealList = ref([]);
        
        fetch("http://localhost:8002/api/meals")
            .then(resp => resp.json())
            .then(resp => {
                mealList.value = resp.data;
            });

        var isOpen = ref(false);

        const addToList = (data) => {
            console.log("AddToList", data)
            mealList.value.push(data)
        }


        return {
            mealList,
            addToList,
            isOpen,
        }

    },
    components: {
        TableMeal,
        FormMeal,
        MyPopup
    },
})
</script>

<style>
.btn-popup {
    float: right;
}
</style>