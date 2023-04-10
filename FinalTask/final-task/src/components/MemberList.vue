<template>
    <div>
        <div class="tableMembers">
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Special offer</th>
                <th>Offer cycle</th>
                <th></th>
            </thead>
            <tbody>
                <td>1</td>
                <td>Linda</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
        </table>
    </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({})
</script>
<style>
.tableMembers {
    position: absolute;
    top: 25%;
    left: 15%;
    right: 15%
    }

table {        
    border-collapse: collapse;
    border-spacing: 0;
    color: white;
    width: 100%;   
    }

table td, table th {
    border-bottom: 1px solid  #FCA26E;
    }
</style>