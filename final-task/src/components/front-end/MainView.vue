<template>
    <div>
        <FormMeal :mealList="mealList" @add-to-list="addToList"/>

    <div class="table">
        <TableMeal :mealList="mealList"/>
    </div>
    </div>
</template>

<script>

import { defineComponent, ref} from 'vue';
import TableMeal from './TableMeal.vue';
import FormMeal from './FormMeal.vue';
export default defineComponent({
    setup(){
        
        const mealList = ref([]);        

        const addToList = (data) => {
            mealList.value.push(data)
        }
        
        return{
            mealList,
            addToList,
        }
    
    },
    components: {
    TableMeal,
    FormMeal
},
})
</script>
<style></style>