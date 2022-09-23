Vue.createApp({
    data() {
        return {
            sum: 0,
        }
    },
    watch: {
        calcSum() {
            const that = this;
            setTimeout(() => {
                that.sum = 0;
            }, 5000);
        }
    },
    computed: {
        calcSum() {
            if (this.sum < 37) return ' Not there yet';
            if (this.sum === 37) return this.sum;
            if (this.sum > 37) return ' Too much!';
        },
    },
    methods: {
        increase(num) {
            this.sum += num;
        }
    }

}).mount('#assignment');