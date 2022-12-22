export default {
  addProductToCart(state, productData) {
    const productInCartIndex = state.items.findIndex(
      (ci) => ci.id === productData.id
    );

    if (productInCartIndex >= 0) {
      this.commit('cart/incrementItems', productInCartIndex);
    } else {
      const newItem = {
        id: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1,
      };
      this.commit('cart/addItem', newItem);
    }
    this.commit('cart/incrementTotalItemsCount');
    this.commit('cart/increaseTotal', productData.price);
  },
  removeProductToCart(state, productId) {
    const products = state.items;
    const productInCartIndex = products.findIndex(
      (cartItem) => cartItem.id === productId
    );
    const prodData = products[productInCartIndex];
    this.commit('cart/removeItem', productInCartIndex);
    this.commit('cart/decreaseQtyByNum', prodData.qty);
    this.commit(
      'cart/decrementTotalItemsSumByNum',
      prodData.price * prodData.qty
    );
  },
  incrementItems(state, productInCartIndex) {
    state.items[productInCartIndex].qty++;
  },
  incrementTotalItemsCount(state) {
    state.qty++;
  },
  decrementTotalItemsSumByNum(state, number) {
    state.total -= number;
  },
  decreaseQtyByNum(state, number) {
    state.qty -= number;
  },
  addItem(state, item) {
    state.items.push(item);
  },
  removeItem(state, itemId) {
    state.items.splice(itemId, 1);
  },
  increaseTotal(state, number) {
    state.total += number;
  },
};
