<template>
  <!-- my version -->
  <!-- <button @click="logIn" v-if="!isLogged">Login</button>
  <button @click="logOut" v-else>Logout</button>  -->

  <!-- author version -->
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
  <p>{{ isTestAuth }}</p>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
export default {
  //my version
  // computed: {
  //   ...mapGetters(['isLogged']),
  // },
  // methods: {
  //   ...mapActions(['logIn', 'logOut']),
  // },
  //author version
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    },
  },
};
</script>
