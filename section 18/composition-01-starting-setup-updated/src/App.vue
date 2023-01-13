<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Lirst Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Lirst Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

//for objects - reactive works only with objects
// import { reactive } from 'vue';
export default {
  setup() {
    //normal refs are read and write, but computed refs are only read-only
    // const uName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(31);

    const uName = computed(function name() {
      return firstName.value + ' ' + lastName.value;
    });

    //uName.value - computed ref are only readonly

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    // const user = ref({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    function setNewAge() {
      // user.age = 32;
      uAge.value = 33;
    }

    // setTimeout(function () {
    //   // uName.value = 'Max';
    //   // uAge.value = 32;

    //   // user.value.name = 'Max'; - with refs
    //   // user.value.age = 32;

    //   user.name = 'Max'; //- with reactive
    //   user.age = 32;
    // }, 2000);

    // return { userName: uName, age: uAge };
    // return { user: user, setAge: setNewAge };
    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      // setFirstName,
      // setLastName,
      firstName,
      lastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
