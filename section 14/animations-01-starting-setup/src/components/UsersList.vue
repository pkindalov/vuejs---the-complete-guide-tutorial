<template>
  <!-- transition element don't render any element in dom 
       transition-group however put an element into dom. You can choose what element
       to add using the tag attribute on transition-group element and put the name of
       the tag inside. You can use a valid html tags in there and also to use a custom component

       transition-group works pretty much like the transition element. It also add these css classes
       (v-enter-to, v-enter-from, v-enter-active, v-leave-to, v-leave-from, v-leave-active etc..)
       to the element which are added or removed. It dives into the css code to see how long the
       animation takes.
  -->
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>

  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },
  methods: {
    addUser() {
      const enteredUser = this.$refs.userNameInput.value;
      this.users.unshift(enteredUser);
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
