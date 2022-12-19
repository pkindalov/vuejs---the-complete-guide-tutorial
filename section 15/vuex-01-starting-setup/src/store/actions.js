export default {
  //my version  
  // logIn(context) {
  //   context.commit('logIn');
  // },
  // logOut(context) {
  //   context.commit('logOut');
  // }
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  }
};