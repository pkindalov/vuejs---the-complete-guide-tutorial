export default {
  addProductToCart(context, payload) {
    context.commit('addProductToCart', payload);
  }
}