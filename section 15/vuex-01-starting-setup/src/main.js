import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  //Mutations are clearly defined methods, which have the logic to update the state.
  //And from inside our components, we should, in the end, just trigger those mutations
  //instead of directly manipulating the state.

  //By triggering mutations, all components that want to edit a state do it
  //in the same way. And it's guaranteed that they do it in the same way.

  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    }
  }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
