<template>
    <img :src="task_image" class="task-image" alt="task image" />
   
   </template>
   
   <script>
   import { defineComponent } from 'vue';
   export default defineComponent ({
       props: {
           task_image: {
               type: String,
               required: true,
           },
           size: {
               type: String,
               required: false,
               default: '100%',
           }
       }
   })
   
   </script>
   
   <style>
   
   .task-image {
        width: 160px;
        height: 180px;
   }
   
   </style>