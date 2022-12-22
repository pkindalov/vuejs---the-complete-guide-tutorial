export default {
  addProductToCart(context, payload) {
    const products = context.getters.getProducts.product.products;
    payload.products = products;
    context.commit('addProductToCart', payload);
  },
  removeProductFromCart(context, productId) {
    context.commit('removeProductToCart', productId);
  },
};
