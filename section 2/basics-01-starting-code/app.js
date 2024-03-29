const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master View Vue and build amazing apps!</h2>',
      vueLink: 'https://www.vuejs.org'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      return this.courseGoalB;
    }
  }
});
app.mount('#user-goal');