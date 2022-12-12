<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      //do something.. this is used just for the example about programmatic navigation
      this.$router.push('/');
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList component beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList component beforeRouteLeave: ');
    console.log(to, from);
    if (this.changesSaved) {
      next();
      return;
    }
    const userWantsToLeave = confirm('Are you sure? You have unsaved changes');
    next(userWantsToLeave);
  },
  unmounted() {
    console.log('Unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
