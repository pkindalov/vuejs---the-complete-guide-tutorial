<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore(); //way for using store in composition api
    //this.$store - the way used with options api

    function inc() {
      store.dispatch('increment');
    }

    return { inc };
  },
};
</script>
