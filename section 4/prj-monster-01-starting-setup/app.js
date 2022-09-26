function getRendomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRendomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRendomValue(8, 15);
      this.playerHealth -= attackValue;
    }
  }
});

app.mounth('#game');