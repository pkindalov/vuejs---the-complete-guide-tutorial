<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from '../components/UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert,
  },
  //The Component options wins if there is a clash with the mixin. By default the data is simply combined
  //but if there is a same data property like alertIsVisible in mixin and in the component,
  //the component options wins, not mixin
  data() {
    return {
      alertTitle: 'Delete User?',
      // alertIsVisible: true,
    };
  },
  mixins: [alertMixin],
};
</script>
