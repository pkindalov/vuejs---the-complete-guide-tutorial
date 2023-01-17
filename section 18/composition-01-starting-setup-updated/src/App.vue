<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :age="age"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Lirst Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Lirst Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
import UserData from './components/UserData.vue';

//for objects - reactive works only with objects
// import { reactive } from 'vue';
export default {
  components: {
    UserData,
  },
  setup() {
    //normal refs are read and write, but computed refs are only read-only
    // const uName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(31);

    const uName = computed(function name() {
      return firstName.value + ' ' + lastName.value;
    });

    // watch(uAge, function (newValue, oldValue) {
    //   console.log('New age: ' + newValue);
    //   console.log('Old age: ' + oldValue);
    // });

    watch([uAge, uName], function (newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
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

    function setLastName() {
      // lastName.value = this.$refs.lastNameInput.value; //options API, this not work in composition API.
      lastName.value = lastNameInput.value.value;
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
      lastNameInput,
      setLastName,
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
