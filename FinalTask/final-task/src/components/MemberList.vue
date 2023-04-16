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
                <th>Delete</th>
            </thead>
            <tbody v-for="user in userList" :key="user.id" class="user-list__user">
                <td>{{ user.id }}</td>
                <td> {{ user.first_name }} {{ user.last_name }} </td>
                <td>{{ user.email }} </td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
        </table>
    </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const user = ref({
            first_name: '',
            last_name: '',
            email: '',
            id: null
        })
        const userList = ref([])

        fetch('http://localhost:8002/api/users')
        .then(resp => resp.json())
        .then(resp => {
            userList.value = resp.data
        })

        return {
            userList,
            user
        }
}
})
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

table th {
    font-size: large;
    font-weight: bold;
    border-bottom: 1px solid  #FCA26E;
    padding-top: 5px;
}

table td {
    font-weight: 400;
    border-bottom: 1px solid  #FCA26E;
    padding-top: 5px;
    }
</style>