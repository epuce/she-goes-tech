<template>
    <div>
        <FormMeal :food="meal" @fill-form="fillForm" :meal-list="mealList" @add-to-list="addToList" v-if="showSlideout"
            @openPopup="closeOpen" />
        <TableMeal :meal-list="mealList" @on-meal-delete="onMealDelete" />
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
            
        const addToList = (data) => {
            mealList.value.push(data)
            isOpen.value = true;
        }

        var showSlideout = ref(true);
        var isOpen = ref(false)

        const closeOpen = () => {
            isOpen.value = true;
            showSlideout.value = false;
        }

        const onMealDelete = (mealId) => {
            mealList.value = mealList.value.filter(meal => meal.id !== mealId);
            fetch("http://localhost:8002/api/meals")
                .then(resp => resp.json())
                .then(resp => {
                    mealList.value = resp.data;
                });
        }

        return {
            mealList,
            addToList,
            showSlideout,
            onMealDelete,
            isOpen,
            closeOpen
        }

    },
    components: {
        TableMeal,
        FormMeal,
        MyPopup,
    },
})
</script>

<style>
.btn-popup {
    float: right;
}
</style>