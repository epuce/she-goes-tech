<template>
  <label class="wrapper flex items-center">
    {{ label }}
    <input
      class="checkbox"
      type="checkbox"
      :checked="isChecked"
      :value="true"
      @change="updateInput"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    updateInput() {
      this.$emit("update-checkbox", this.isChecked);
    },
  },
};
</script>

<style>
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}

.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border-radius: 2px;
  background-color: none;
  border: 1px solid #fca26e;
}

.wrapper:hover input ~ .checkmark {
  background-color: rgba(252, 162, 110, 0.5);
}

.wrapper input:checked ~ .checkmark {
  background-color: #fca26e;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.wrapper input:checked ~ .checkmark:after {
  display: block;
}

.wrapper .checkmark:after {
  left: 7px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
