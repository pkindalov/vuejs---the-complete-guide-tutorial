export default {
  addProductToCart(state, productData) {
    console.log('add product contex:');
    console.log(state);

    console.log('data:');
    console.log(productData);
    // const productInCartIndex = this.cart.items.findIndex(
    //   (ci) => ci.productId === productData.id
    // );

    const productInCartIndex = state.items.findIndex(
      (ci) => ci.productId === productData.id
    );

    console.log(productInCartIndex);

    // if (productInCartIndex >= 0) {
    //   this.cart.items[productInCartIndex].qty++;
    // } else {
    //   const newItem = {
    //     productId: productData.id,
    //     title: productData.title,
    //     image: productData.image,
    //     price: productData.price,
    //     qty: 1,
    //   };
    //   this.cart.items.push(newItem);
    // }
    // this.cart.qty++;
    // this.cart.total += productData.price;
  },
}