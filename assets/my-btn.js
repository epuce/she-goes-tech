Vue.component('my-btn', {
  props: {
      text: {
          type: String,
          required: false,
          default: '',
      }
  },
  data: function(){
      return {
          clickCount: 0,
      }
  },
  methods: {
      onClick: function() {
          this.clickCount++
          // this.clickCount = this.clickCount + 1
      }
  },
  template: `
      <span>
          <button v-on:click="onClick">
              {{text}} has been clicked {{ clickCount }}
          </button>
      </span>
  `
})