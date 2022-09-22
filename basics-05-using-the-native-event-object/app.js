const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  watch: {
    name(value) {
      if (value === 0) {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + 'Schwarzmuller';
      }
    } //now the connection between property name and the method is established.
    //thats mean that if the name property is changed, then the name method will be re-executed
  },
  computed: {
    // fullname() {
    //   console.log('Running again');
    //   if (this.name === '') return '';
    //   return this.name + ' ' + 'Schwarzmuller';
    // }
  },
  methods: {
    outputFullName() {
      console.log('Running again');
      if (this.name === '') return '';
      return this.name + ' ' + 'Schwarzmuller';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.fullName = '';
    }
  }
});

app.mount('#events');
