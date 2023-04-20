<template>
    <div>
        <div class="header">
        <FormSlideout />
        <TableMeal />
        <!-- <FormCategory /> -->
        <!-- <TableCategory /> -->
    </div>

    <div class="table">

    </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import FormSlideout from './FormSlideout.vue';
import TableMeal from './TableMeal.vue';
// import FormCategory from './FormCategory.vue';
// import TableCategory from './TableCategory.vue';
export default defineComponent({
    setup(){
    
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