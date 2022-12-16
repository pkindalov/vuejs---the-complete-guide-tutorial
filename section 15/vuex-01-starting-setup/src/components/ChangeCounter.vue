<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 10 })">Increase</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']),

    //you can use your custom name for the functions.
    ...mapActions({
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
