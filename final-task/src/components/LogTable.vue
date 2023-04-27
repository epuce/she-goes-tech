<template>
  <div @new-booking="console.log">
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
          <tr v-for="client in clientData" :key="client.id">
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

    <!-- <form class="temp-form" @submit.prevent="addClient">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
      <label
        >Name
        <input type="text" v-model="newClient" />
      </label>
      <label>
        Email
        <input type="email" v-model="newEmail" />
      </label>
      <label
        >Select the date
        <input type="date" v-model="newDate" />
      </label>
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
      <input type="submit" value="Add a new entry" />
    </form> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    clientData: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const clients = ref([]);
    console.log("props", props.clientData);

    // function validateForm() {
    //   errors.value = []
    //     if (newClient.value.trim() === "") {
    //     console.log("please enter name");
    //     errors.value.push("please enter name");
    //   }
    //   if (newEmail.value.trim() === "") {
    //     console.log("please enter email");
    //     errors.value.push("please enter email");
    //   }
    //   if (errors.value.length == 0) {
    //     console.log('valid')
    //     return true;
    //   } else {
    //     console.log("invalid", errors.value.length, errors.value)
    //     return false;
    //   }
    // }

    // function addClient() {
    //   // if (newClient.value.trim() === "") {
    //   //   return;
    //   // }
    //   // if (newEmail.value.trim() === "") {
    //   //   return;
    //   // }

    //   // if (!checkboxClick) {
    //   //     return;
    //   //     //clientInstructor = "";
    //   // }

    //   if (!validateForm()) {
    //     //alert("īnvalid");
    //     return;
    //   }

    //   clients.value.push({
    //     id,
    //     clientName: newClient.value,
    //     clientEmail: newEmail.value,
    //     clientDate: newDate.value,
    //     wasClicked: checkboxClick.value,
    //     clientInstructor: checkboxClick.value ? newInstructor.value : "",
    //   });

    //   newClient.value = "";
    //   newEmail.value = "";
    //   id++;
    //   newDate.value = "";
    //   checkboxClick.value = false;
    //   newInstructor.value = "";
    // }

    return {
      clients,
    };
  },
});
</script>

<style>
.table-wrapper {
  width: 100%;
  max-width: 750px;
  margin: auto;
  margin-top: 20px;
}
table {
  width: 100%;
  border: 0.5px solid #52796f;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #52796f;
  color: white;
}
tr:nth-child(even) {
  background-color: #cad2c5;
}
.temp-form {
  width: 60%;
  margin: auto;
}
</style>
