<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <!-- 1.Separate refs -->
  <!-- <h3 v-if="showCourseGoal">{{ courseGoal }}</h3> -->

  <!-- 2.Ref Object -->
  <!-- <h3 v-if="courseData.showCourseGoal">{{ courseData.myCourseGoal }}</h3> -->

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->

  <!-- 1.Separate refs -->
  <!-- <button @click="showHideCourseGoal">Toggle Goal</button>-->

  <!-- 2.Ref Object -->
  <!-- <button @click="showHideCourseGoal">Toggle Goal</button> -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->

  <!-- Task 4: Also solve the assignment with the Options API -->
  <h3 v-if="toShowCourseGoal">{{ myCourseGoal }}</h3>
  <button @click="showHideCourseGoal">Toggle Goal</button>
</template>

<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';
export default {
  data() {
    return {
      myCourseGoal:
        'To finish it and to make all practise exercises and to learn as much as I can.',
      showCourseGoal: false,
    };
  },
  computed: {
    toShowCourseGoal() {
      return this.showCourseGoal;
    },
  },
  methods: {
    showHideCourseGoal() {
      this.showCourseGoal = !this.showCourseGoal;
    },
  },
  // setup() {
  //   //1.Separate refs
  //   // const myCourseGoal = ref(
  //   //   'To finish it and to make all practise exercises and to learn as much as I can.'
  //   // );
  //   // let showCourseGoal = ref(false);
  //   // const showHideCourseGoal = () =>
  //   //   (showCourseGoal.value = !showCourseGoal.value);
  //   // return { courseGoal: myCourseGoal, showCourseGoal, showHideCourseGoal };

  //   //2.Ref Object
  //   // const courseData = ref({
  //   //   myCourseGoal:
  //   //     'To finish it and to make all practise exercises and to learn as much as I can.',
  //   //   showCourseGoal: false,
  //   // });

  //   // const showHideCourseGoal = () =>
  //   //   (courseData.value.showCourseGoal = !courseData.value.showCourseGoal);

  //   // return { courseData, showHideCourseGoal };

  //   // 3.Reactive Object
  //   const courseData = reactive({
  //     myCourseGoal:
  //       'To finish it and to make all practise exercises and to learn as much as I can.',
  //     showCourseGoal: false,
  //   });

  //   const showHideCourseGoal = () =>
  //     (courseData.showCourseGoal = !courseData.showCourseGoal);

  //   return {
  //     courseData,
  //     showHideCourseGoal,
  //   };
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
