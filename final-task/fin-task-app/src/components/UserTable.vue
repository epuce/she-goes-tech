<template>
    <div>
        <table class="user-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>E-mail</th>
                    <th>Sample gift</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
    
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td></td>
                    <td> {{ user.first_name }} </td>
                    <td> {{ user.last_name }} </td>
                    <td> {{ user.email }} </td>
                    <td> {{ user.sample_option }} </td>
                    <td> {{ user.sample_product }} </td>
                    <td>
                        <font-awesome-icon 
                            icon="fa-trash-can" 
                            style="color:red;"
                            class="icon-delete"
                            @click="handleDelete(index)"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
    
    setup() {
        //var users = ref([])
        //should GET data from data base or localstorage
        var users = JSON.parse(localStorage.userList)
        
        var handleDelete = function(index) {
            console.log(index)
            console.log(users)

            users.splice(index, 1)
            //save data to localstorage
            localStorage.userList = JSON.stringify(users)
            //read data from localstorage
            users = JSON.parse(localStorage.userList)
        }

        //users = JSON.parse(localStorage.userList)

        return {
            users,
            handleDelete
        }
        
    }
})

</script>

<style>
.user-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.user-table th {
    border: 1px solid grey;
    background: rgba(105, 158, 193, 0.3);
    padding: 16px;
}
.user-table td, .user-table tr {
    border: 1px solid grey;
    padding: 8px;
}

.user-table tr:nth-child(even) {
    background: rgba(199, 199, 99, 0.308);
}

.user-table tbody tr:hover {
    background: rgba(110, 110, 76, 0.3);
}

.user-table td {
    text-align: left;
}

.user-table td:nth-child(7) {
    text-align: center;
    cursor: pointer;
}

.icon-delete:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.24);
}
</style>