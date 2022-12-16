import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      console.log(state);
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
    testAuth(state, getters, rootState, rootGetters) {
      //this will not work. The state is local/private. Here from the counterModule 
      // we don't have access to isLoggedIn variable which in the store.

      // return state.isLoggedIn;

      //Here(In this getter) we have access only to state belonging to this module.
      //There is some workaround using rootState and rootGetters
      console.log(rootGetters);

      //now this works. You can see boolean value under the login/logout button
      return rootState.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    },
  }
};

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {

      // isLogged: false //my version
      isLoggedIn: false, //author version
    }
  },
  //Mutations are clearly defined methods, which have the logic to update the state.
  //And from inside our components, we should, in the end, just trigger those mutations
  //instead of directly manipulating the state.

  //By triggering mutations, all components that want to edit a state do it
  //in the same way. And it's guaranteed that they do it in the same way.

  mutations: {
    //my version
    // logIn(state) {
    //   state.isLogged = true;
    //   console.log(state.isLogged);
    // },
    // logOut(state) {
    //   state.isLogged = false;
    // }

    //author version
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    //my version  
    // logIn(context) {
    //   context.commit('logIn');
    // },
    // logOut(context) {
    //   context.commit('logOut');
    // }
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    // my version
    // isLogged(state) {
    //   return state.isLogged;
    // }
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
