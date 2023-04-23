<template>
    <div>
        <FormMeal :mealList="mealList" @add-to-list="addToList()"/>

        <TableMeal :mealList="mealList"/>

        <button @click="isOpen=true">popup</button>

        <MyPopup v-if="isOpen" @close-component="isOpen=false"/>
    
    </div>
</template>

<script>

import { defineComponent, ref} from 'vue';
import TableMeal from './TableMeal.vue';
import FormMeal from './FormMeal.vue';
import MyPopup from './MyPopup.vue';
export default defineComponent({
    setup(){
        
        var mealList = ref([]);   

        var isOpen = ref(false);

        const addToList = (data) => {
            mealList.value.push(data)
        }
        
        return{
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
.btn-popup{
    float: right;
}
</style>