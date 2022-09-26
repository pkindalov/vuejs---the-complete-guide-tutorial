const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      visible: true,
      userColor: ''
    }
  },
  computed: {
    changeElementCls() {
      let styles = {};
      switch (this.userInput) {
        case 'user1':
          styles['user1'] = true;
          break;
        case 'user2':
          styles['user2'] = true;
          break;
      }
      if (this.visible) styles['visible'] = true;
      if (!this.visible) styles['hidden'] = true;
      return styles;
    },
  },
  methods: {
    getUserInput(event) {
      this.userInput = event.target.value;
    },
    changeVisibility() {
      this.visible = !this.visible;
    }
  }
});

app.mount('#assignment');