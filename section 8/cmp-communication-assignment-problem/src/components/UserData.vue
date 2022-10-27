<template>
  <form @submit.prevent="$emit('add-user', this.username, this.age)">
    <div>
      <label for="username"></label>
      <input type="text" id="username" name="username" v-model="username" />
    </div>
    <div>
      <label for="age"></label>
      <input type="number" id="age" name="age" v-model="age" />
    </div>
    <div>
      <input type="submit" value="Add" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: 0,
    };
  },
};
</script>
