<template>
  <div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Date</th>
            <th>Instructor</th>
            <th>Instructor name</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td>{{ client.id }}</td>
            <td>{{ client.clientName }}</td>
            <td>{{ client.clientEmail }}</td>
            <td>{{ client.clientDate }}</td>
            <td>{{ client.wasClicked }}</td>
            <td>{{ client.clientInstructor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="temp-form">
      <label
        >Name
        <input type="text" v-model="newClient" />
      </label>
      <label>
        Email
        <input type="email" v-model="newEmail" />
      </label>
      <label>Select the date <input type="date" v-model="newDate" /> </label>
      <label>Need to book a surf instructor</label>
      <input type="checkbox" v-model="checkboxClick" />

      <select
        :class="{
          'popup-form__select--hidden': !checkboxClick,
          'popup-form__select--visible': checkboxClick,
        }"
        name="instructor"
        v-model="newInstructor"
      >
        <option>Wayan</option>
        <option>Kadek</option>
        <option>John</option>
      </select>
      <button @click="addClient()">Add new record</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // give each client a unique id
    let id = 1;
    const newClient = ref("");
    const newEmail = ref("");
    const newDate = ref("");
    const checkboxClick = ref("");
    const newInstructor = ref("");

    const clients = ref([]);

    function addClient() {
      clients.value.push({
        id,
        clientName: newClient.value,
        clientEmail: newEmail.value,
        clientDate: newDate.value,
        wasClicked: checkboxClick.value,
        clientInstructor: newInstructor.value,
      });

      console.log({
        id,
        clientName: newClient.value,
        clientEmail: newEmail.value,
        clientDate: newDate.value,
        wasClicked: checkboxClick.value,
        clientInstructor: newInstructor.value,
      });

      newClient.value = "";
      newEmail.value = "";

      id++;
    }

    return {
      newClient,
      newEmail,
      newDate,
      checkboxClick,
      newInstructor,
      addClient,
      clients,
    };
  },
});
</script>

<style>
.table-wrapper {
  border: 2px solid gray;
  width: 100%;
  max-width: 500px;
  margin: auto;
  margin-top: 20px;
}
table {
  width: 100%;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
