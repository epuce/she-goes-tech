<template>
    <div class="main-view-wrapper">
        <OpenFormBtn open-form-btn="Open Form" @click="openForm"/>
        <UserForm :class="isFormOpen ? 'user-form--opened' : ''"/>
        <div class="table-view-wrapper">
            Table view
        </div>
        <!-- <div class="popup-overlay">
            <div class="popup">
                <div class="text">This is a popup</div>
                <button>x</button>
            </div>
        </div> -->
    </div>
</template>
<script>
import { defineComponent, ref} from 'vue';
import OpenFormBtn from './OpenFormBtn.vue'
import UserForm from './UserForm.vue'

export default defineComponent ({ 
    components: {
    OpenFormBtn,
    UserForm
  },

  setup() {
    var isFormOpen = ref(false);

var openForm = function () {
  isFormOpen.value = !isFormOpen.value;
};

return {
  isFormOpen,
  openForm,
};
  }


})
</script>
<style>
body {
    margin: 0;
}
.main-view-wrapper {
    display: flex;
}

.table-view-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
}

.popup-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(202, 196, 196, 0.815);
}

.popup {
    position:relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 300px;
    height: 100 px;
    background-color: grey;
    padding: 30px;
    justify-content: center;
    align-items: center;
}

.text {
    display: block;
}

button {
    display:inline-block;
}

.user-form--opened {
    margin-left: 0; 
}

</style>