import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

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

  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;