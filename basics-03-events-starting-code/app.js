const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
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
