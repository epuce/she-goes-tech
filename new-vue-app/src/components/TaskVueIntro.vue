<template>
    <div>
        <button @click="isClicked = true">
         {{ isClicked ? 'Clicked' : 'Click me' }}
        </button>
        <button @click="isOpen = true">Show Popup</button>
   
    <MyPopup2 
            :textPopup="YouDidIt"
            v-if="isOpen" 
            @close-popup="isOpen = false"/>
    
    </div>
</template>

<script>
import MyPopup2 from './MyPopup2.vue';

export default {
  name: 'TaskVueIntro',
  components: {
    MyPopup2
  },
  
  data() {
    return {
      isClicked: false,
      isPopupVisible: false,
      popupText: 'You did it!',
      isOpen: false,
    };
  },

  methods: {
    onPopupClose() {
      this.isPopupVisible = false;
      this.isClicked = false;
      this.$emit('button-color-changed');
    },
  }
}
</script>

<style scoped>
.clicked {
  background-color: red;
}
</style>