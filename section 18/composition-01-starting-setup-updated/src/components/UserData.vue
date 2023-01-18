<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  // inject: [], -- in options api
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!! DON'T!!! IT WILL NO THROW AN ERROR BUT IT IS HIGHLY UNPREDICTABLE.
    //!! age.value = 32
    //!! YOU MUST ONLY CHANGE INJECTED VALUES ON PLACE WHERE YOU PROVIDE THEM.
    //!! IN THIS CASE IN APP.VUE FILE.
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // context.emit('save-data', 1); = this.$emit('save-data', 1);
    console.log(context);
    return { userName: uName, age };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>
