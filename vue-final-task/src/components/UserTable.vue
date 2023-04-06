<template>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>E-mail</th>
                    <th>Special offers</th>
                    <th>Offer cycle</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent ({
    
})
</script>
<style>
.table-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-top: 30px;
    min-width: fit-content;
}  

table, th, td {
  border: 1px solid;
  border-collapse: collapse;
}

tr {
    height: 30px
}

th, td {
    padding: 2px 15px 2px 15px;
    white-space: nowrap;
}

thead {
    background-color: #dfdada;
    font-family: sans-serif;
    font-size: small;
}

table {
    box-shadow: -1px 3px 26px -7px rgba(0,0,0,0.45);
}
</style>