<template>
  <div class="btn-group">
      <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name !== undefined">
        {{ selectedOption.name }}
        <span class="caret"></span>
      </li>

      <li @click="toggleMenu()" class="dropdown-toggle dropdown-toggle-placeholder" v-if="selectedOption.name === undefined">
        {{placeholderText}}
        <span class="caret"></span>
      </li>

      <ul class="dropdown-menu" v-if="showMenu">
          <li v-for="(option, idx) in options" :key="idx">
              <a href="javascript:void(0)" @click="updateOption(option)">
                  {{ option.name }}
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              selectedOption: {
                name: '',
              },
              showMenu: false,
              placeholderText: 'Please select an item',
          }
      },
      props: {
          options: {
              type: [Array, Object]
          },
          selected: {},
          placeholder: [String],
          closeOnOutsideClick: {
            type: [Boolean],
            default: true,
          },
      },
      mounted() {
          this.selectedOption = this.selected;
          if (this.placeholder)
          {
              this.placeholderText = this.placeholder;
          }
          if (this.closeOnOutsideClick) {
            document.addEventListener('click', this.clickHandler);
          }
      },
      beforeUnmount() {
          document.removeEventListener('click', this.clickHandler);
      },
      methods: {
          updateOption(option) {
              this.selectedOption = option;
              this.showMenu = false;
              this.$emit('updateOption', this.selectedOption);
          },
          toggleMenu() {
            this.showMenu = !this.showMenu;
          },
          clickHandler(event) {
              const { target } = event;
              const { $el } = this;
              if (!$el.contains(target)) {
                this.showMenu = false;
              }
          },
      }
  }
</script>

<style>
.btn-group {
width: 100%;
height: 30px;

position: relative;
display: inline-block;
vertical-align: middle;
}
.btn-group a:hover {
text-decoration: none;
}
.dropdown-toggle {
color: azure;
height: 25px;
padding-top: 5px;
text-transform: none;
font-weight: 300;
border: 0;
border-bottom: solid 1px #fca26e;
background-size: 0 2px, 100% 1px;
background-repeat: no-repeat;
background-position: center bottom, center calc(100% - 1px);
background-color: transparent;
transition: background 0s ease-out;
float: none;
overflow: hidden;
}
.dropdown-toggle:hover {
background: rgba(252,162,110,0.5);
border-radius: 5px 5px 5px 5px;
cursor: pointer;
}
.dropdown-menu {
position: absolute;
top: 100%;
left: 0;
z-index: 1000;
float: left;
width: 100%;
padding: 0;
margin: 0;
list-style: none;
color: azure;
font-size: 16px;
text-align: left;
background-color: rgba(252,162,110,0.5);
border: none;
border-radius: 4px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
background-clip: padding-box;
}
.dropdown-menu > li > a {
padding: 20px;
display: block;
clear: both;
font-weight: normal;
line-height: 15px;
color: azure;
white-space: nowrap;
text-decoration: none;
}
.dropdown-menu > li > a:hover {
background: rgba(252,162,110,0.5);
color: azure;
}
.dropdown-menu > li {
overflow: hidden;
width: 100%;
position: relative;
margin: 0;
}
.caret {
width: 0;
position: absolute;
top: 15px;
height: 0;
margin-left: -24px;
vertical-align: middle;
border-top: 4px dashed;
border-top: 4px solid \9;
border-right: 4px solid transparent;
border-left: 4px solid transparent;
right: 10px;
}
li {
  list-style: none;
}
</style>