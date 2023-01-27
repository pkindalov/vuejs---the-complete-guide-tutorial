export default {
  //if this mixin would be merged with a component which also have mounted lifecycle hook
  //then both lifecycle hooks will be executed - the one in component and the one in mixin.
  //mounted from the component will be executed last.
  mounted() {
    console.log('Mounted!');
  }
}