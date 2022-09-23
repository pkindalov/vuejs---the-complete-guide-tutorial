Vue.createApp({
  data() {
    return {
      sum: 0,
    }
  },
  watch: {
    sum(oldValue, newValue) {
      if (oldValue !== newValue) {
        setTimeout(() => {
          this.sum = 0;
        }, 5000)
      }
    }
  },
  computed: {
    calcSum() {
      if (this.sum <= 37) return this.sum + ' Not there yet';
      if (this.sum > 37) return this.sum + ' Too much!';
    },
  },
  methods: {
    increaseByFive() {
      this.sum += 5;
    },
    increaseByOne() {
      this.sum += 1;
    }
  }

}).mount('#assignment');