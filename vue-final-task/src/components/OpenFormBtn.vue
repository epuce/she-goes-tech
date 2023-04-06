<template>
  <div>
    <button
      type="button"
      class="open-form__btn"
      @click="openForm"
      :class="isFormOpen ? 'open-form__btn--opened' : ''"
    >
      <span class="button-txt">{{ openFormBtn }}</span>
    </button>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    openFormBtn: {
      type: String,
      required: true,
    },
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
  },
});
</script>
<style>
.open-form__btn {
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

.open-form__btn--opened {
  position: fixed;
  left: 220px;
}

.button-txt {
  transform: rotate(90deg);
  white-space: nowrap;
  font-weight: 700;
  left: 0px;
  transition: left 1s ease-in-out;
}
</style>
