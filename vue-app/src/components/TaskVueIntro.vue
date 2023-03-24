<template >
    <div>
         <button @click="onClick()">{{buttonText}}</button>
       
    </div>
       
  
</template>
<script>
import { defineComponent } from 'vue';
 
export default defineComponent ({
    data() {
    return {
      buttonText: 'Click me',
    }
  },
  methods: {
    onClick() {
      this.buttonText = 'Clicked';
    },
  }
})



</script>
<style >
    
</style>