export default {
  addRequest(state, payway) {
    state.requests.push(payway);
  },
  setRequest(state, payway) {
    state.requests = payway;
  },
};
