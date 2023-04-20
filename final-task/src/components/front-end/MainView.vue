<template>
    <div>
        <div class="header">
        <FormSlideout />
        <TableMeal :mealList="mealList" @add-to-list="addToList"/>
    </div>

    <div class="table">

    </div>
    </div>
</template>

<script>

import { defineComponent, ref} from 'vue';
import FormSlideout from './FormSlideout.vue';
import TableMeal from './TableMeal.vue';
export default defineComponent({
    setup(){

        const addToList = (data) => {
            mealList.value.push(data)
        }
        
        const mealList = ref([]);

        return{
            addToList,
            mealList
        }
        

    
    },
    components: {
    // FormCategory,
    // TableCategory
    FormSlideout,
    TableMeal,
    addToList
},
})
</script>
<style></style>