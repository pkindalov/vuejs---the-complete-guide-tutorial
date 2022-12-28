import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';

const store = createStore({
  namespaced: true,
  modules: {
    coaches: coachesModule
  },
  state() { }
});

export default store;