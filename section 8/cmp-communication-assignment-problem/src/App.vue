<template>
  <user-data @add-user="addNewUser"></user-data>
  <active-user
    v-for="user in users"
    :key="user.id"
    :username="user.username"
    :age="user.age"
  ></active-user>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: Date.now().toString(),
          username: "тест",
          age: 0,
        },
      ],
    };
  },
  methods: {
    addNewUser(username, age) {
      console.log("username: " + username);
      console.log("age: " + age);
      const newUser = {
        username: username,
        age: age,
      };
      this.users.unshift(newUser);
    },
  },
};
</script>
