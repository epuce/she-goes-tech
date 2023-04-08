<!-- CSS AND JS OK, DONE -->

<template>
  <div>
    <button
      type="button"
      class="open-form-btn"
      @click="openForm"
      :class="isFormOpen ? 'open-form-btn--opened' : ''"
    >
      <span 
        class="open-form-btn__txt"
      >
        {{ openFormBtn }}
      </span>
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
</style>
