const app = Vue.createApp({
  data() {
    return {
      userText: '',
      confirmedInput: ''
    }
  },
  methods: {
    showMsg() {
      alert('Cool');
    },
    setUserText(event) {
      this.userText = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userText;
    }
  }
}).mount('#assignment');