<template>
  <h2>{{ username }}</h2>
  <h3>{{ age }}</h3>
  <br />
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>
