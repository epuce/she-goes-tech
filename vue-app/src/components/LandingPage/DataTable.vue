<template>
  <div class="table-container">
    <table class="user-table js-user-table-wrapper">
      <thead>
        <th>#</th>
        <th>Username</th>
        <th>E-mail</th>
        <th>Special offers</th>
        <th>Offer cycle</th>
        <th></th>
      </thead>
      <tbody class="js-user-table"></tbody>
    </table>
  </div>
</template>
<script>
import {defineComponent} from "vue";
export default defineComponent({});
</script>
<style>
.table-container {
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

table {
  display: inline-table;
}
.user-table {
  /* display: none; */
  border-spacing: 0;

  /* to use border only on one side between cells: */
  border-collapse: collapse;
}
.user-table td,
.user-table th {
  border: 1px solid #999999;
}
</style>
