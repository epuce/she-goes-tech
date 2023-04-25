<template>
    <div class="table-wrapper">
        <h2> Participant table </h2>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <!-- <th>Update</th> -->
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="participant in participantList" :key="participant.id">
                        <td>{{ participant.id }}</td>
                        <td>{{ participant.first_name }}</td>
                        <td>{{ participant.last_name }}</td>
                        <td>{{ participant.email }}</td>
                        <!-- <td> <button @click="fillParticipantForm(participant)" class="participant-list__btn"><img
                                    class="participant-list__btn-icon"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr.svg/640px-OOjs_UI_icon_edit-ltr.svg.png" /></button>
                        </td> -->
                        <td> <button @click.stop="deleteParticipant(participant.id)" class="participant-list__btn"><img
                                    class="participant-list__btn-icon"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/OOjs_UI_icon_trash.svg/640px-OOjs_UI_icon_trash.svg.png" /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <SignupPopup v-if="showForm" @close-signup-popup="showForm = false" />
        </div>

    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import SignupPopup from "./SignupPopup.vue"

export default defineComponent({
    components: {
        SignupPopup,
    },
    props: {
        participantList: {
            type: Array
        }
    },
    setup(props, { emit }) {
        // setup() {
        var showForm = ref(false)
        // var participantList = ref([])

        var deleteParticipant = (participantId) => {
            fetch(`http://localhost:8002/api/participants/${participantId}`, {
                method: 'DELETE'
            })
                .then(resp => resp.json())
                .then(() => {
                    emit("deleteParticipant", participantId)
                    //    participantList.value = participantList.value.filter((participant) => participant.id !== participantId)
                })

        }

        // TODO: UPDATING
        // var fillParticipantForm  =    (tmpParticipant) => {
        //     emit('fillForm', tmpParticipant)
        //     showForm.value = true
        // }

        return {
            // participantList,
            deleteParticipant,
            // fillParticipantForm,
            showForm,
        };
    }
})
</script>
<style>
* {
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
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
    border: none;
    border-collapse: collapse;
    padding: 8px;
    border: solid gray 1px;
    text-align: center;
}

table {
    margin-top: 24px;
    width: 100%;
    /* border: solid gray 1px; */
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.4); */
}

.participant-list__btn {
    background: transparent;
    cursor: pointer;
    border: none;
    width: 100%;
}

.participant-list__btn-icon {
    height: 25px;
    opacity: 0.4;
}

.participant-list__btn-icon:hover {
    opacity: 0.8;
}
</style>