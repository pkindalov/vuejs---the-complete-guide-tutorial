export default {
  getCartQuantity(state) {
    return state.qty;
  },
  getCartTotal(state) {
    return state.total;
  },
  getItems(state) {
    return state.items;
  },
  getProducts(state, rootState, rootGetters) {
    return rootGetters;
  },
};
