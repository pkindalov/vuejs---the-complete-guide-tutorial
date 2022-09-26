const app = Vue.createApp({
  data() {
    return {
      userTask: '',
      tasks: [],
      toShowList: true
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.userTask);
    },
    showHideList(event) {
      this.toShowList = !this.toShowList;
      if (this.toShowList) {
        event.target.textContent = 'Hide';
        return;
      }
      event.target.textContent = 'Show';
    }
  }

});

app.mount('#assignment');