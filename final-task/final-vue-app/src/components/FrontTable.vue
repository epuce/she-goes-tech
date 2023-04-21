<template>
    <div class="table-wrapper">
        <h2>Table of participants</h2>
        <!-- <p>Meet the people in your class!</p> -->
        <div class="table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Agne </td>
                        <td>Confused</td>
                        <td>test@test.com</td>
                        <td>Beginner</td>
                        <td> <button>Delete</button></td>
                        <!-- <td> <button @click.stop="onUserDelete(item.id)" class="user-list__delete">Delete</button></td> -->
                    </tr>
                    <tr>
                        <td>{{ id }}</td>
                        <td>{{ firstName }}</td>
                        <td>{{ lastName }}</td>
                        <td>{{ classType }}</td>
                        <td>{{ email }}</td>
                        <td> <button>Delete</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
* {
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
    /* background-color: #f6f4f3; */
}

.table-wrapper {
   
    max-width: 70vw;
    margin: auto;
    height: 100vh;
}


th {
    background-color: #444442;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    color: white;
}

table,
th,
td {
    width: auto;
    margin: auto;
    border: 1px solid;
    border-collapse: collapse;
    padding: 8px;
    border: solid gray 1px;
}

table {
    
    margin-top: 24px;

    width: 100%;
    border-radius: 4px;
}
</style>