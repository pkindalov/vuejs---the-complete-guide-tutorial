const app = Vue.createApp({
  data() {
    return {
      name: 'Panayot',
      age: 34,
      imgURL: 'https://www.thesprucepets.com/thmb/wNqkG8YzvRd22RBSk6lu4h5QZVo=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/low-maintenance-freshwater-fish-4770223-hero-ffb66c229c194e2db4916e88bbd17a15.jpg',
      enteredValue: ''
    }
  },
  methods: {
    genRndNumber() {
      return Math.random();
    },
    calcAge() {
      return this.age + 5;
    },
    changeName() {
      console.log('here');
    }
  }
}).mount('#assignment');