<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Things TO DO</th>
                    <th>Deadline</th>
                    <th>Send Reminder</th>
                    <th>Phone Number</th>
                    <th>Mark as Done</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in toDoList" :key="index">
                    <td> {{ data.toDo }}</td>
                    <td> {{ data.deadline }} </td>
                    <td> {{ data.sendReminder }} </td>
                    <td> {{ data.phone }} </td>
                    <td @click="onDelete(index)" class="doneBtn">✗</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        let toDoList = ref([]);
        if (localStorage.getItem("toDoList") !== null) {
            toDoList.value = JSON.parse(localStorage.getItem("toDoList"));
        }

        const onDelete = (index) => {
            toDoList.value.pop(index) 
            localStorage.toDoList = JSON.stringify(toDoList.value)

        }

        return {
            toDoList,
            onDelete,
        }
    }
})
</script>
<style>
.doneBtn {
    cursor: pointer;
    color: red;
}

td, th, table {
    min-width: 150px;
    border: 1px solid lightgray;
    border-collapse: collapse;
    text-align: center;
}


</style>