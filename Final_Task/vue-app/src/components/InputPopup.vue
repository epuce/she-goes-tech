<template>
    <div class="popup-wrapper" v-if="show">
        <form class="popup">
            <div>
                <div>Things TO DO</div>
                <textarea id="todo-textarea" v-model="data.toDo"></textarea>
                <div v-if="!validation.toDo" class="invalid-input">
                    At least 3 characters needed
                </div>
            </div>
            <div>
                Deadline
                <Datepicker v-model="data.deadline" />
            </div>
            <div>
                Send me a reminder
                <input v-model="data.sendReminder" type="checkbox">
            </div>
            <div v-if="data.sendReminder">
                Phone number
                <input id="phone-input" v-model="data.phone" type="tel">
                <div v-if="!validation.phone" class="invalid-input">
                    Needs to be 8 digits
                </div>
            </div>
            <button type="button" @click="onSave()">SAVE</button>
        </form>
    </div>
    <div id="show-btn" @click="show = !show"><span v-if="show">Close</span><span v-else>Open</span></div>
    <BackdropPopup v-if="isOpen" 
                       :text='"Need to "+popupText'
                       @close-popup="isOpen=false"
                       >
                       </BackdropPopup>
</template>
<script>
import { defineComponent, ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import BackdropPopup from './BackdropPopup.vue'

export default defineComponent({
    components: {
        Datepicker,
        BackdropPopup,
    },


    setup(props, { emit }) {
        const show = ref(false)
        let popupText = ref('')
        let validation = ref({
            toDo: true,
            phone: true,
        })

        let data = ref({
            sendReminder: false,
            toDo: '',
            deadline: '',
            phone: '',
        })

        const onSave = () => {
            if (validateData()) {

                let toDoList = [];
                if (localStorage.getItem("toDoList") !== null) {
                    toDoList = JSON.parse(localStorage.getItem("toDoList"))
                }
                toDoList.push(data.value);
                localStorage["toDoList"] = JSON.stringify(toDoList)
                
                popupText.value=data.value.toDo;
                isOpen.value=true;

                data.value = {
                    sendReminder: false,
                    toDo: '',
                    deadline: '',
                    phone: '',
                }

                emit("savedToTable");
                
            }
        }

        const validateData = () => {
            let result = true;
            if (data.value.toDo.length < 3) {
                validation.value.toDo = false
                result = false
            } else {
                validation.value.toDo = true
            }

            if (data.value.sendReminder === true && !/^\d{8}$/.test(data.value.phone)) {
                validation.value.phone = false
                result = false
            } else {
                validation.value.phone = true
            }
            return result
        }

        var isOpen = ref(false)

        return {
            data,
            onSave,
            validation,
            show,
            isOpen,
            popupText,
        }
    }
})
</script>
<style>
.invalid-input {
    color: red;
}

.popup-wrapper {
    width: 240px;
    padding: 20px 10px;
    height: 100%;
    background-color: lightcoral;
    float: left;
}

#todo-textarea {
    min-width: 234px;
    max-width: 234px;
    min-height: 37px;
    max-height: 37px; 
}

#phone-input {
    width: 234px
}
#show-btn {
    float: left;
    cursor: pointer;
    width: 100px;
    height: 20px;
    background-color: lightseagreen;
    text-align: center;
    transform: rotate(-90deg);
    position: relative;
    top: 40px;
    right: 40px;

}
</style>