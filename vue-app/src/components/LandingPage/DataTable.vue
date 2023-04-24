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
  width: 100%;
  display: flex;
  /* margin-top: 100px; */
  /* align-items: center; */
  justify-content: center;
}

table {
  /* display: inline-table; */
}
.user-table {
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  margin-top: 100px;
  min-width: 70%;
  height: 50px;
  border-spacing: 0;
  border-collapse: collapse;
}
.user-table td,
.user-table th {
  padding: 10px;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  color: #45260a;
  font-size: 1.4rem;
}
.user-table th {
  background-color: #fdf2e9;
  border: 1px solid #999999;
}
.js-user-table {
  display: none;
}
</style>
