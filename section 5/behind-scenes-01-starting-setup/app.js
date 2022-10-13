const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      // this.currentUserInput = event.target.value;
      this.currentUserInput = this.$refs.userText;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');
