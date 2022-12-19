export default {
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
};