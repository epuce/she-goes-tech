<template>
    <div>
        <div class="header">
        <FormSlideout />
        <TableMeal :mealList="mealList"/>
    </div>

    <div class="table">

    </div>
    </div>
</template>

<script>

import { defineComponent, ref } from 'vue';
import FormSlideout from './FormSlideout.vue';
import TableMeal from './TableMeal.vue';
export default defineComponent({
    setup(){
        const mealList = ref([]);
        fetch("http://localhost:8002/api/meals")
            .then(resp => resp.json())
            .then(resp => {
            mealList.value = resp.data;
        });
    
    },
    components: {
    // FormCategory,
    // TableCategory
    FormSlideout,
    TableMeal
},
})
</script>
<style></style>