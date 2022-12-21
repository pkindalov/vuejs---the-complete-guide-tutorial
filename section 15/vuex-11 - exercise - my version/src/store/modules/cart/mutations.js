export default {
  addProductToCart(state, productData) {
    const productInCartIndex = state.items.findIndex(
      (ci) => ci.id === productData.id
    );

    if (productInCartIndex >= 0) {
      this.commit('cart/incrementItems', productInCartIndex);
    }
    else {
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
  incrementItems(state, productInCartIndex) {
    state.items[productInCartIndex].qty++;
  },
  incrementTotalItemsCount(state) {
    state.qty++;
  },
  addItem(state, item) {
    state.items.push(item);
  },
  increaseTotal(state, number) {
    state.total += number;
  }
}