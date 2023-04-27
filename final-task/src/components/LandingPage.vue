<template>
  <div>
    <div class="page-header">
      <h1>{{ pageHeading }}</h1>
      <h4>
        Please enter the data of each surfboar rental booking and indicate
        whether a surf instructor will be necessary. If that's the case, please
        select the instructor chosen by the client from the drop-down menu.
      </h4>
      <button class="open-btn" @click="isOpen = true">
        Create a new record
      </button>
    </div>
    <div class="content">
      <PopupForm
        v-if="isOpen"
        @close-popup="isOpen = false"
        @new-booking="newBooking"
      ></PopupForm>
      <LogTable :clientData="clientData"></LogTable>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PopupForm from "./popupForm.vue";
import LogTable from "./LogTable.vue";

export default defineComponent({
  components: {
    PopupForm,
    LogTable,
  },

  setup() {
    var pageHeading = "Surfboard rentals registration";
    var isOpen = ref(false);

    var clientData = ref(
      JSON.parse(localStorage.getItem("surfdatabase") || "[]")
    );

    // ref([
    //   {
    //   id: "",
    //   clientName: "test",
    //   clientEmail: "test",
    //   clientDate: "",
    //   wasClicked: "",
    //   clientInstructor: "",
    // },
    //   ]);

    // localStorage.getItem("surfdatabase") !== null
    // [JSON.parse(localStorage.getItem("surfdatabase"))];
    //     ||
    //   [
    //   {
    //   id: "",
    //   clientName: "test",
    //   clientEmail: "test",
    //   clientDate: "",
    //   wasClicked: "",
    //   clientInstructor: "",
    // },
    //   ];

    var newBooking = function (data) {
      console.log("data", data);
      const id = clientData.value.length + 1;
      data["id"] = id;
      clientData.value.push(data);

      const updatedTable = JSON.stringify(clientData.value);
      localStorage.setItem("surfdatabase", updatedTable);
      //this doesnt work for some reason - data saves in storage, but doesnt pass to logtable
      //clientData.push(newData);
    };

    return {
      pageHeading,
      isOpen,
      newBooking,
      clientData,
    };
  },
});
</script>

<style>
.page-header h4 {
  font-weight: normal;
  padding: 0px 50px;
}
.open-btn {
  background-color: #354f52;
  color: white;
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border-radius: 4px;
}
</style>
