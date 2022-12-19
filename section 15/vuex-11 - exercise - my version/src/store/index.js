import { createStore } from "vuex";
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
  // modules: {
  //   cart: cartModule,
  //   product: productModule
  // },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;