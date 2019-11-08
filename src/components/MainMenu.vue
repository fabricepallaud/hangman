<template>
  <section class="main-menu">
    <button class="player-mode" :class="{ active : guesserIsHuman }" @click="startGameHumanGuesser">
      Human Player
    </button>

    <button class="player-mode" :class="{ active : !guesserIsHuman }" @click="startGameComputerGuesser">
      Computer Player
    </button>
  </section>
</template>

<script>
export default {
  computed: {
    guesserIsHuman () {
      return this.$store.state.guesserIsHuman
    }
  },
  methods: {
    startGameHumanGuesser () {
      this.$emit('start-game-human-guesser')
    },
    startGameComputerGuesser () {
      this.$emit('start-game-computer-guesser')
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  margin-top: auto;
  display: flex;
}

.player-mode {
  flex: 1 1 auto;
  padding: 0.75rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &.active {
    background: #6dba2c;
    color: white;
  }

  @include breakpoint-sm {
    padding: 1rem;
  }
}
</style>
