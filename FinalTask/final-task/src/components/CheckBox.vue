<template>
    <label class="wrapper flex items-center">
      {{label}}
      <input class="checkbox" type="checkbox" :checked="isChecked" :value="true" @change="updateInput"/>
      <span class="checkmark"></span>
    </label>
  </template>
  
  <script>
  export default {
    props: {
      "label": { type: String, required: true},
    },
    data() {
      return {
        isChecked: false
      }
    },
    methods: {
      updateInput() {
        this.$emit('update-checkbox', this.isChecked)
      }
    }
  }
  </script>
  
  <style>
   /*Customize the label (the wrapper) */
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
  /* Hide the browser's default checkbox */
  .wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    border-radius: 2px;
    background-color: none;
    border: 1px solid #FCA26E;
  }
  /* On mouse-over, add a grey background color */
  .wrapper:hover input ~ .checkmark {
    background-color: rgba(252,162,110,0.5);
  }
  /* When the checkbox is checked, add a blue background */
  .wrapper input:checked ~ .checkmark {
    background-color: #FCA26E;
  }
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  /* Show the checkmark when checked */
  .wrapper input:checked ~ .checkmark:after {
    display: block;
  }
  /* Style the checkmark/indicator */
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