<template>
  <div
    class="user-form-container"
    :class="isFormOpen ? 'user-form--opened' : ''"
    @close-form="isFormOpen=!isFormOpen"
  >
    <UserForm ref="UserForm"/>
    <SubscribeBtn @click="saveForm()"/>
    <button
      type="button"
      class="open-form-btn"
      @click="openForm()"
      :class="isFormOpen ? 'open-form-btn--opened' : ''"
    >
      <span class="open-form-btn__txt"> Open Form </span>
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, defineExpose } from "vue";
import UserForm from "./UserForm.vue";
import SubscribeBtn from "./SubscribeBtn.vue"

export default defineComponent({
  components: {
    UserForm,
    SubscribeBtn
  },

  setup(props, {emit}) {
    var isFormOpen = ref(false);
    var userForm = ref()

    function openForm(){
      isFormOpen.value=!isFormOpen.value
    }

   

    function saveForm () {
      userForm.value.saveForm()
      emit("show-popup")
    }

    defineExpose({ 
      openForm,
    });

    
    return {
      isFormOpen,
      openForm,
      saveForm
    };
  },
});
</script>

<style>
.user-form-container {
  max-width: 220px;
  min-width: 220px;
  background-color: #7e7b7b;
  margin-left: -220px;
  transition: margin-left 1s ease-in-out;
  padding: 10px;
  box-sizing: border-box;
}

.open-form-btn {
  background-color: darkred;
  position: fixed;
  width: 30px;
  height: 90px;
  top: 200px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px darkred;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: left 1s ease-in-out;
}

.open-form-btn--opened {
  left: 220px;
}

.open-form-btn__txt {
  transform: rotate(90deg);
  white-space: nowrap;
  font-weight: 700;
  transition: left 1s ease-in-out;
}

.user-form--opened {
  margin-left: 0;
}
</style>
