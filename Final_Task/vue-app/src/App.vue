<template>
<InputPopup @saved-to-table="reload++"></InputPopup>
<DataTable :key="reload"></DataTable>



</template>

<script>
import DataTable from './components/DataTable.vue';
import InputPopup from './components/InputPopup.vue';

import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    InputPopup,
    DataTable,
    
},
setup() {
  let reload = ref(0);

  return {
    reload,
  }
}
}
</script>

<style>
</style>
