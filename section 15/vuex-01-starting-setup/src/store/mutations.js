export default {
  //my version
  // logIn(state) {
  //   state.isLogged = true;
  //   console.log(state.isLogged);
  // },
  // logOut(state) {
  //   state.isLogged = false;
  // }

  //author version
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
};