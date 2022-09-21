const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted');
    },
    setName(event, family) {
      this.name = event.target.value + ' ' + family;
    },
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
