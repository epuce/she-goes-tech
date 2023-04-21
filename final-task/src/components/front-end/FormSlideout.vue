<template>
    <div>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add new meal</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
     <FormMeal :mealList="mealList"/>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import FormMeal from './FormMeal.vue';

export default {
  props:{
    mealList:{
      type: Array,
      required: true,
    }
  },
    components: { FormMeal }
}
</script>
<style>
#offcanvasExample{
  width: 300px;
}
.btn-primary{
  margin-left: 16px;
}
</style>